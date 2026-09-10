import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { toastShown } from '../features/toasts/toastsSlice';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialValues = { name: '', email: '', subject: '', message: '' };

const validate = ({ name, email, message }) => {
    const errors = {};

    if (!name.trim()) errors.name = 'Name is required';
    if (!email.trim()) {
        errors.email = 'Email is required';
    } else if (!EMAIL_PATTERN.test(email.trim())) {
        errors.email = 'Enter a valid email address';
    }
    if (!message.trim()) errors.message = 'Message is required';

    return errors;
};

const baseFieldClass =
    'w-full px-4 py-2 mt-2 text-blue-600 rounded-full bg-transparent focus:outline-none focus:ring-0';

const ContactUs = () => {
    const dispatch = useDispatch();
    const [values, setValues] = useState(initialValues);
    const [touched, setTouched] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const submitTimerRef = useRef(null);

    // Never let the mock request settle onto an unmounted form.
    useEffect(() => () => clearTimeout(submitTimerRef.current), []);

    const errors = validate(values);
    const isValid = Object.keys(errors).length === 0;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setValues((current) => ({ ...current, [name]: value }));
        setIsSubmitted(false);
    };

    const handleBlur = (event) => {
        setTouched((current) => ({ ...current, [event.target.name]: true }));
    };

    const showError = (field) => Boolean(touched[field] && errors[field]);

    const fieldClass = (field, extra = '') =>
        `${baseFieldClass} ${extra} ${showError(field) ? 'border border-[#FC466B]' : 'formBorder-gradient'}`;

    const handleSubmit = (event) => {
        event.preventDefault();
        setTouched({ name: true, email: true, message: true });

        if (!isValid) return;

        // Mock submit only - no backend involved.
        setIsSubmitting(true);
        submitTimerRef.current = setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setValues(initialValues);
            setTouched({});
            dispatch(
                toastShown({ message: 'Thanks! We will get back to you shortly.', tone: 'success' })
            );
        }, 800);
    };

    return (
        <div id='contact' className='container mx-auto'>
            <div className='lg:flex lg:px-32 gap-x-10 '>
                <div className=' flex-grow'>
                    <section className="w-full bg-gradient-to-l  from-[#110D2E]/30  to-[#fc466a4a]/10  rounded-md shadow-md  p-8 sm:p-16">
                        <div className='flex flex-col mb-10 justify-center items-center'>
                            <h2 className="text-2xl font-semibold  capitalize text-white">Drop Us Your Message</h2>
                            <p className='text-gray-400 text-center'>Freely contact with us anytime. We are available here for you.</p>
                        </div>
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="grid grid-cols-1 gap-6 mt-4 lg:grid-cols-2">
                                <div className='col-span-2 lg:col-span-1'>
                                    <label htmlFor='name' className='sr-only'>Full Name</label>
                                    <input
                                        id='name'
                                        name='name'
                                        type='text'
                                        value={values.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        aria-invalid={showError('name')}
                                        aria-describedby={showError('name') ? 'name-error' : undefined}
                                        className={fieldClass('name')}
                                        placeholder='Full Name'
                                    />
                                    {showError('name') && (
                                        <p id='name-error' className='mt-2 px-4 text-sm text-[#FC466B]'>{errors.name}</p>
                                    )}
                                </div>

                                <div className='col-span-2 lg:col-span-1'>
                                    <label htmlFor='email' className='sr-only'>Your Email</label>
                                    <input
                                        id='email'
                                        name='email'
                                        type='email'
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        aria-invalid={showError('email')}
                                        aria-describedby={showError('email') ? 'email-error' : undefined}
                                        className={fieldClass('email')}
                                        placeholder='Your Email'
                                    />
                                    {showError('email') && (
                                        <p id='email-error' className='mt-2 px-4 text-sm text-[#FC466B]'>{errors.email}</p>
                                    )}
                                </div>

                                <div className='col-span-2'>
                                    <label htmlFor='subject' className='sr-only'>Subject</label>
                                    <input
                                        id='subject'
                                        name='subject'
                                        type='text'
                                        value={values.subject}
                                        onChange={handleChange}
                                        className={`${baseFieldClass} formBorder-gradient`}
                                        placeholder='Select Subject'
                                    />
                                </div>

                                <div className='col-span-2 '>
                                    <label htmlFor='message' className='sr-only'>Message</label>
                                    <textarea
                                        id='message'
                                        name='message'
                                        value={values.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        aria-invalid={showError('message')}
                                        aria-describedby={showError('message') ? 'message-error' : undefined}
                                        className={fieldClass('message', 'px-6')}
                                        placeholder='Message...'
                                        rows={5}
                                    />
                                    {showError('message') && (
                                        <p id='message-error' className='mt-2 px-4 text-sm text-[#FC466B]'>{errors.message}</p>
                                    )}
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center gap-4 mt-6">
                                <button
                                    type='submit'
                                    disabled={!isValid || isSubmitting}
                                    className="min-h-[44px] px-6 py-2 rounded-full bg-[#6318F1] text-white duration-200 hover:shadow-lg hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Messages'}
                                </button>

                                {isSubmitted && (
                                    <p role='status' className='text-[#59D3AA]'>
                                        Thanks! Your message has been sent.
                                    </p>
                                )}
                            </div>
                        </form>
                    </section>
                </div>


                <div className='  lg:w-[22%] flex flex-col items-center justify-center mx-16 formBorder-gradient border'>

                    <div className='flex flex-1 flex-col items-center justify-around '>
                      <div className='flex flex-col justify-center items-center py-4'>
                      <FaPhoneAlt size={44} className='text-blue-700 my-4'/>
                        <div className='text-white text-lg py-1'>Phone</div>
                        <div className='text-gray-400 text-lg'>0310 - 7756294</div>
                      </div>
                        <hr className='w-32 align-bottom bg-gradient-to-r h-[1px] from-[#FC466B] to-[#3F5EFB] '/>
                    </div>


                    <div className='flex flex-1 flex-col items-center justify-around '>
                      <div className='flex flex-col justify-center items-center py-4'>
                      <MdMarkEmailUnread size={44} className='text-blue-700 my-4'/>
                        <div className='text-white text-lg py-1'>Email</div>
                        <div className='text-gray-400 text-lg'>0310 - 7756294</div>
                      </div>
                        <hr className='w-32 align-bottom bg-gradient-to-r h-[1px] from-[#FC466B] to-[#3F5EFB] '/>
                    </div>


                    <div className='flex flex-1 flex-col items-center justify-around '>
                      <div className='flex flex-col justify-center items-center py-4'>
                      <FaLocationDot size={44} className='text-blue-700 my-4'/>
                        <div className='text-white text-lg py-1'>Location</div>
                        <div className='text-gray-400 text-lg'>0310 - 7756294</div>
                      </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default ContactUs
