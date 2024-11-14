import CtaFooter from '@/components/CtaFooter'
import Location from '@/components/icons/Location'
import Mail from '@/components/icons/mail'
import PenIcon from '@/components/icons/PenIcon'
import Phone from '@/components/icons/Phone'
import UserIcon from '@/components/icons/UserIcon'
import React from 'react'

export default function ContactUs() {
    return (
        <>
            <header className='flex justify-center'>
                <h2 className='text-3xl text-black font-bold pt-4'>Contact Us</h2>
            </header>
            <section className='w-full h-full flex justify-end  items-center relative'>
                <div className='flex w-[30%] h-2/4 right-[40%] border border-white backdrop-blur-xl rounded-xl absolute z-10 flex-col items-center pt-8 gap-y-6'>
                    <div className='w-[90%] h-9 rounded-full  flex backdrop-blur-xl'>
                        <div className='w-12 h-full bg-white rounded-s-2xl flex ps-2 items-center'> <UserIcon/></div>
                        <input placeholder='Write your name' className='w-[85%] h-fullflex bg-white flex-shrink-0 flex-grow-0 rounded-e-2xl outline-none' type="text" />
                    </div>
                    <div className='w-[90%] h-9 rounded-full  flex backdrop-blur-xl'>
                        <div className='w-12 h-full bg-white rounded-s-2xl flex ps-2 items-center'><Mail/></div>
                        <input placeholder='Write your email' className='w-[85%] h-fullflex bg-white flex-shrink-0 flex-grow-0 rounded-e-2xl outline-none' type="text" />
                    </div>
                    <div className='w-[90%] h-9 rounded-full  flex backdrop-blur-xl'>
                        <div className='w-12 h-full rounded-s-2xl bg-white flex ps-2 items-center'><PenIcon/></div>
                        <input placeholder='Write your message' className='w-[85%] h-fullflex bg-white flex-shrink-0 flex-grow-0 rounded-e-2xl outline-none' type="text" />
                    </div>
                    <div className='w-full pt-20 flex justify-center'>
                        <button className='w-[90%] h-9 bg-gradient-to-r from-violet-500  to-blue-500 text-white font-medium rounded-2xl text-center'>Submit</button>
                    </div>
                </div>
                <div className='w-1/2 h-3/4 bg-violet-200 rounded-s-[5rem] backdrop-blur-xl items-center flex'>
                    <ul className='flex flex-col gap-y-6 ps-52 justify-between'>
                        <li className='w-full h-12   flex justify-between items-center backdrop-blur-xl gap-x-0  '>
                            <div className='text-blue-500  border border-white h-10 w-10 flex items-center justify-center rounded-md backdrop-blur-xl'>
                                <Phone />
                            </div>
                            <div className='flex flex-col'>
                                <h2 className='font-medium text-black/80'>Phone</h2>
                                <h2 className='font-medium text-black/60'>+880124332334</h2>
                            </div>
                        </li>

                        <li className='w-full h-12   flex justify-between items-center backdrop-blur-xl  '>
                            <div className='text-blue-500  border border-white h-10 w-10 flex items-center justify-center rounded-md backdrop-blur-xl'>
                                <Mail />
                            </div>
                            <div className='flex flex-col'>
                                <h2 className='font-medium text-black/80'>Email</h2>
                                <h2 className='font-medium text-black/60'>something@gmail.com</h2>
                            </div>
                        </li>
                        <li className='w-full h-12 mt-3   flex  justify-between items-center backdrop-blur-xl  '>
                            <div className='text-blue-500  border border-white h-10 w-10 flex items-center justify-center rounded-md backdrop-blur-xl'>
                                <Location />
                            </div>
                            <div className='flex flex-col'>
                                <h2 className='font-medium text-black/80'>Location</h2>
                                <h2 className='font-medium text-black/60'>43/A Spooner Street <br />St lawrence, Virginia <br /> Texas</h2>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <CtaFooter/>
        </>
    )
}
