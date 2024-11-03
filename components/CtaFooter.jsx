import React from 'react'
import Facebook from './icons/Facebook'
import Twitter from './icons/Twitter'
import Linkedin from './icons/Linkedin'
import Youtube from './icons/Youtube'

export default function CtaFooter() {
    return (
        <>
            <div className='w-screen h-3/4  bg-[url("/images/11.footer/image1.png")] bg-no-repeat bg-cover flex justify-center items-center flex-col '>
                <h2 className='bg-gradient-to-r from-violet-500 to-blue-500 text-transparent bg-clip-text text-4xl font-bold flex justify-center items-center pb-5'>Exclusively by ThemeWagon</h2>
                <h2 className='font-medium pb-16'>Klean is an elegant HTML5 template and a perfect starting point for your next <br /> SaaS oriented site, carefully curated by ThemeWagon </h2>
                <button className='h-9 w-52 rounded-2xl text-center flex justify-center items-center text-white font-medium bg-gradient-to-r from-violet-500 to-blue-500 '>Download Free</button>
            </div>
            <footer className='flex backdrop-blur-2xl border border-white w-screen h-1/4 gap-x-16 justify-center'>
                <section className='flex  w-screen h-1/4 gap-x-16 justify-center'>
                    <ul className='flex flex-col h-full text-black/80 font-medium text-2xl pb-8 gap-y-3'>
                        About
                        <li className='font-medium text-lg text-black/60'>Prices</li>
                        <li className='font-medium text-lg text-black/60'>About</li>
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
                        <li className='font-medium text-lg text-black/60'>Developer</li>
                        <li className='font-medium text-lg text-black/60'>Designer</li>

                    </ul>
                    <ul className='flex flex-col h-full text-black/80 font-medium text-2xl pb-8 gap-y-3'>
                        Blog
                        <li className='font-medium text-lg text-black/60'>CEO</li>
                        <li className='font-medium text-lg text-black/60'>Lifestyle</li>
                        <li className='font-medium text-lg text-black/60'>Article</li>
                        <li className='font-medium text-lg text-black/60'>Tech</li>
                    </ul>
                    <div className='flex flex-col items-end  w-screen h-full'>
                        <h2 className='text-black/80 font-bold text-xl pb-3'>Follow Us</h2>
                        <ul className='flex gap-x-2 justify-end'>
                            <li className=''><Facebook/></li>
                            <li className=''><Twitter/></li>
                            <li className=''><Linkedin/></li>
                            <li className=''><Youtube/></li>
                        </ul>
                        <h1 className=''>Subscribe to our newsletter</h1>
                        <div className='w-full h-full bg-red-500'>
                           <div className='w-full h-9 bg-violet-500'></div>
                        </div>
                    </div>
                </section>
            </footer>
        </>
    )
}
