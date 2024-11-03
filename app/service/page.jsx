import React from 'react'
import Image from 'next/image'


export default function Service() {
    return (
        <section className='flex justify-center '>
            <div className='h-screen w-screen bg-violet-100 flex flex-col content-center justify-center'>
                <header className='flex flex-col w-screen items-center'>
                    <h1 className='text-3xl font-bold mt-6'>Service</h1>
                    <p className='text-black/30 mt-6 text-center'>We offer youth with chances for career development in their practice. We also <br /> support a wide range of services to ensure client satisfaction</p>
                </header>
                <div className='w-full h-full flex justify-center gap-x-8'>
                    <article className='w-[20%] h-[65%] flex flex-col justify-center items-center  mt-10 border border-white border-spacing-0 rounded-xl bg-white/10 backdrop-blur-lg pb-5'>
                        <img className=' h-2/5' src="/images/3.services/icon1.png" alt="" />
                        <h2 className='text-black/80 font-bold text-xl mb-4'>Send texts instantly</h2>
                        <p className='text-black/30 mb-5'>Financial planning, forecasting and <br /> adjusting rapidly with customer <br /> demands and budget</p>
                        <ul className='flex'>
                            <li className='text-blue-500 pe-2'>Learn More</li>
                            <li className='text-blue-500'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                            </li>
                        </ul>
                    </article>
                    <article className='w-[20%] h-[65%] flex flex-col justify-center items-center  mt-10 border border-white border-spacing-0 rounded-xl bg-white/10 backdrop-blur-lg pb-5'>
                        <img className=' h-2/5' src="/images/3.services/icon2.png" alt="" /> 
                        <h2 className='text-black/80 font-bold text-xl mb-4'>Better Organized</h2>
                        <p className='text-black/30 mb-5'>Latest technology and experienced <br/> guidance, trained HR specialists <br/> to keep updated</p>
                        <ul className='flex'>
                            <li className='text-blue-500 pe-2'>Learn More</li>
                            <li className='text-blue-500'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                            </li>
                        </ul>
                    </article>
                    <article className='w-[20%] h-[65%] flex flex-col justify-center items-center  mt-10 border border-white border-spacing-0 rounded-xl bg-white/10 backdrop-blur-lg pb-5'>
                        <img className='h-2/5' src="/images/3.services/icon3.png" alt="" />
                        <h2 className='text-black/80 font-bold
                         text-xl mb-4'>Analytical Statistics</h2>
                        <p className='text-black/30 mb-5'>Messages, real-time reminders, <br/> memos, and many more will <br/>keep your team in sync</p>
                        <ul className='flex'>
                            <li className='text-blue-500 pe-2'>Learn More</li>
                            <li className='text-blue-500'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                                <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 0 1 1.06 0l3.75 3.75a.75.75 0 0 1 0 1.06l-3.75 3.75a.75.75 0 1 1-1.06-1.06l2.47-2.47H3a.75.75 0 0 1 0-1.5h16.19l-2.47-2.47a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                            </li>
                        </ul>
                    </article>
                </div>
            </div>
        </section>
    )
}
