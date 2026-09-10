import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToasts, toastDismissed } from "../../features/toasts/toastsSlice";

const AUTO_DISMISS_MS = 5000;

const toneStyles = {
  error: "border-[#FC466B]/60 bg-[#2a0a16]",
  success: "border-[#59D3AA]/60 bg-[#06241b]",
  info: "border-white/20 bg-[#120d2e]",
};

const Toast = ({ toast }) => {
  const dispatch = useDispatch();
  const { id, message, tone } = toast;

  // Depending on the id (not a callback prop) keeps the timer from restarting
  // every time a sibling toast re-renders the list.
  useEffect(() => {
    const timerId = setTimeout(() => dispatch(toastDismissed(id)), AUTO_DISMISS_MS);
    return () => clearTimeout(timerId);
  }, [dispatch, id]);

  return (
    <div
      className={`pointer-events-auto flex items-start gap-4 rounded-xl border px-5 py-4 text-white shadow-lg duration-300 animate-in fade-in slide-in-from-bottom-2 ${
        toneStyles[tone] || toneStyles.info
      }`}
    >
      <p className="text-sm">{message}</p>
      <button
        type="button"
        onClick={() => dispatch(toastDismissed(id))}
        aria-label="Dismiss notification"
        className="ml-auto text-lg leading-none text-gray-400 duration-200 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
      >
        &times;
      </button>
    </div>
  );
};

const ToastHost = () => {
  const toasts = useSelector(selectToasts);

  if (toasts.length === 0) return null;

  return (
    <div
      role="region"
      aria-label="Notifications"
      aria-live="polite"
      className="pointer-events-none fixed inset-x-4 bottom-4 z-50 flex flex-col gap-3 sm:left-auto sm:right-6 sm:w-80"
    >
      {toasts.map((toast) => (
        <Toast key={toast.id} toast={toast} />
      ))}
    </div>
  );
};

export default ToastHost;
