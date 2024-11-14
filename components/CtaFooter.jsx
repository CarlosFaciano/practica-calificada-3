import React from 'react'
import Facebook from './icons/Facebook'
import Twitter from './icons/Twitter'
import Linkedin from './icons/Linkedin'
import Youtube from './icons/Youtube'
import Mail from './icons/mail'
import ArrowButton from './icons/ArrowButton'
import Link from 'next/link'

export default function CtaFooter() {
    return (
        <>
            <div className='overflow-x-hidden mt-96 w-screen h-3/4  bg-[url("/images/11.footer/image1.png")] bg-no-repeat bg-cover flex justify-center items-center flex-col '>
                <h2 className='bg-gradient-to-r from-violet-500 to-blue-500 text-transparent bg-clip-text text-4xl font-bold flex justify-center items-center pb-5'>Exclusively by ThemeWagon</h2>
                <h2 className='font-medium pb-16'>Klean is an elegant HTML5 template and a perfect starting point for your next <br /> SaaS oriented site, carefully curated by ThemeWagon </h2>
                <button className='h-9 w-52 rounded-2xl text-center flex justify-center items-center text-white font-medium bg-gradient-to-r from-violet-500 to-blue-500 '>Download Free</button>
            </div>
            <footer className='flex backdrop-blur-2xl w-screen h-1/4 gap-x-16 justify-center py-5'>
                <section className='flex  w-screen h-1/4 gap-x-16 justify-center'>

                    <ul className='flex flex-col h-full text-black/80 font-medium text-2xl pb-8 gap-y-3'>
                        About
                        <li className='font-medium text-lg text-black/60'>Prices</li>
                        <Link href="/details"> <li className='font-medium text-lg text-black/60'>About</li></Link>
                       
                        <li className='font-medium text-lg text-black/60'>Services</li>
                        <li className='font-medium text-lg text-black/60'>Career</li>
                    </ul>
                    <ul className='flex flex-col h-full text-black/80 font-medium text-2xl pb-8 gap-y-3'>
                        Resources
                        <li className='font-medium text-lg text-black/60'>Terms </li>
                        <li className='font-medium text-lg text-black/60'>Help</li>
                        <li className='font-medium text-lg text-black/60'>Privacy</li>
                    </ul>
                    <ul className='flex flex-col h-full text-black/80 font-medium text-2xl pb-8 gap-y-3 '>
                        Team
                        <Link href="/team"><li className='font-medium text-lg text-black/60'>Developer</li></Link>
                        <Link href="/team"><li className='font-medium text-lg text-black/60'>Designer</li></Link>

                    </ul>
                    <ul className='flex flex-col h-full text-black/80 font-medium text-2xl pb-8 gap-y-3'>
                        Blog
                        <Link href="/blog"><li className='font-medium text-lg text-black/60'>CEO</li></Link>
                        <Link href="/blog"><li className='font-medium text-lg text-black/60'>Lifestyle</li></Link>
                        <Link href="/testimonials"><li className='font-medium text-lg text-black/60'>Article</li></Link>
                        <Link href="/blog"><li className='font-medium text-lg text-black/60'>Tech</li></Link>
                        
                    </ul>
                    <div className='flex flex-col items-start  h-full gap-y-2'>
                        <h2 className='text-black/80 font-bold text-xl pb-3'>Follow Us</h2>
                        <ul className='flex gap-x-2 justify-end'>
                            <li className=''><Facebook /></li>
                            <li className=''><Twitter /></li>
                            <li className=''><Linkedin /></li>
                            <li className=''><Youtube /></li>
                        </ul>
                        <h1 className=''>Subscribe to our newsletter</h1>
                        <div className='w-full h-full py-2  rounded-full flex items-center backdrop-blur-xl bg-white justify-center'>
                            <Mail />
                            <input className='w-[70%] h-full ps-2 outline-none' placeholder='Email' type="text" />
                            <button className='bg-gradient-to-br from-violet-500 to-blue-500 h-7 w-7 rounded-full p-[1.5px] '>
                                <div className='bg-white h-full w-full rounded-xl flex justify-center items-center'>
                                    <span className=' bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text  '>
                                        <ArrowButton/>
                                        
                                    </span>
                                    
                                </div>
                            </button>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}
