import React from 'react'
import Image from 'next/image'
import Stars from '@/components/stars'
export default function Testimonial() {
    return (
        <div className='flex flex-col items-center bg-violet-100 w-screen h-screen'>
            <header className='flex flex-col w-screen items-center mb-10'>
                <h1 className='text-3xl font-bold mt-6'>What our clients have to say</h1>
                <p className='text-black/30 mt-6 text-center'>Our success is determined on how satisfied our customers are with the <br /> service. These reviews say we have stuff to do</p>
            </header>
            <div className='w-screen h-screen flex justify-center mt-10 '>
                 <Image className='w-1/4 h-[70%]' src="/images/8.testimonial/image1.png" alt='' width={1080} height={1920}/>
                 <article className='ms-10 '>
                    <img className='text-sky-500 w-32 h-20' src="./images/quotation-marks-svgrepo-com.svg" alt="" />
                        <h2 className='font-bold text-2xl my-7 bg-gradient-to-r from-purple-500 via-purple-400 to-blue-500 text-transparent bg-clip-text'>Outstanding!!</h2>
                        <p className='text-black/50'>I just wanted to drop you a little email to say thank you for all your hard work <br/> i&apos;m delighted i chose you as my partner. Your websites are quite simple to edit <br/> and maintain, which is fantastic.</p>
                        <div className='flex my-7 text-yellow-400 gap-x-1'>
                            <Stars/>
                            <Stars/>
                            <Stars/>
                            <Stars/>
                            <Stars/>
                        </div>
                        <h2 className='flex text-black/60'><strong>Daniel Lane</strong>, developer</h2>
                        <div className='flex gap-x-1 mt-4'>
                              <button className='w-2 h-1 rounded-xl bg-white'></button>
                              <button className='w-2 h-1 rounded-xl bg-gradient-to-r from-violet-500 to-blue-500'></button>
                              <button className='w-2 h-1 rounded-xl bg-white'></button>
                              <button className='w-2 h-1 rounded-xl  bg-white'></button>
                        </div>
                 </article>
            </div>
        </div>
    )
}
