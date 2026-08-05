import { Disclosure } from '@headlessui/react'
import { MdKeyboardArrowDown , MdKeyboardArrowUp} from "react-icons/md";

const faqs = [
    {
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    {
        question: "What's the best thing about Switzerland?",
        answer:
            "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
    },
    // More questions...
]


const FAQs = () => {
    return (
        <div className='container mx-auto'>
            <div className='xl:px-32 lg:px-20 lg:flex '>
               
                    <div className="mx-auto lg:w-1/2  px-6 py-24 sm:py-32 lg:px-8 lg:py-32 ">
                        <div className="mx-auto  divide-y divide-white/10">
                            <h2 className="text-3xl font-bold leading-10 tracking-tight text-white">Getting Started</h2>
                            <hr className='w-32 mt-12 bg-gradient-to-r h-[1px] from-[#FC466B] to-[#3F5EFB] '/>
                            <dl className="mt-4 space-y-6 divide-y divide-white/10">
                                {faqs.map((faq) => (
                                    <Disclosure as="div" key={faq.question} className="pt-6">
                                        {({ open }) => (
                                            <>
                                                <dt>
                                                    <Disclosure.Button className="focus:text-green-400 focus:outline-none flex w-full items-start justify-between text-left text-white">
                                                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                                                        <span className="ml-6 flex h-7 items-center">
                                                            {open ? (
                                                                <MdKeyboardArrowUp className="h-6 w-6" aria-hidden="true" />
                                                            ) : (
                                                                <MdKeyboardArrowDown className="h-6 w-6" aria-hidden="true" />
                                                            )}
                                                        </span>
                                                    </Disclosure.Button>
                                                </dt>
                                                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                    <p className="text-base leading-7 text-gray-300">{faq.answer}</p>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                ))}
                            </dl>
                        </div>
                    </div>
                
                    <div className="mx-auto lg:w-1/2  px-6 py-24 sm:py-32 lg:px-8 lg:py-32 ">
                        <div className="mx-auto  divide-y divide-white/10">
                            <h2 className="text-3xl font-bold leading-10 tracking-tight text-white">Safety, Security and Polices</h2>
                            <hr className='w-32 mt-12 bg-gradient-to-r h-[1px] from-[#FC466B] to-[#3F5EFB] '/>
                            <dl className="mt-4 space-y-6 divide-y divide-white/10">
                                {faqs.map((faq) => (
                                    <Disclosure as="div" key={faq.question} className="pt-6">
                                        {({ open }) => (
                                            <>
                                                <dt>
                                                    <Disclosure.Button className="focus:text-green-400 focus:outline-none flex w-full items-start justify-between text-left text-white">
                                                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                                                        <span className="ml-6 flex h-7 items-center">
                                                            {open ? (
                                                                <MdKeyboardArrowUp className="h-6 w-6" aria-hidden="true" />
                                                            ) : (
                                                                <MdKeyboardArrowDown className="h-6 w-6" aria-hidden="true" />
                                                            )}
                                                        </span>
                                                    </Disclosure.Button>
                                                </dt>
                                                <Disclosure.Panel as="dd" className="mt-2 pr-12">
                                                    <p className="text-base leading-7 text-gray-300">{faq.answer}</p>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                ))}
                            </dl>
                        </div>
                    </div>

            </div>
        </div>
    )
}

export default FAQs