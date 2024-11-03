import EyeIcon from '@/components/icons/EyeIcon'
import LikeIcon from '@/components/icons/LikeIcon'
import React from 'react'

export default function Blog() {
    return (
        <>
            <header className='flex flex-col w-screen h-1/5 items-center mb-10 bg-violet-100 '>
                <h1 className='text-3xl font-medium mt-6'>Our Team</h1>
                <p className='text-black/30 mt-6 text-center'>Blogs are a great method to increase traffic and generate leads. Make a profit. <br /> Get compensated for your efforts.
                </p>
            </header>
            <section className='w-full h-screen  flex gap-x-4 justify-center gap-y-4 md:gap-y-0 flex-wrap'>
                <article className='rounded-lg bg-violet-200 w-[90%] md:w-[45%] lg:w-[30%] h-[40%] backdrop-blur-xl px-4'>
                    <h2 className='bg-gradient-to-r from-violet-500 to-blue-700 text-transparent bg-clip-text border-b border-gray-500 pt-2 pb-5'> Article</h2>
                    <h2 className='font-bold text-black/60 text-xl pt-3'>How do you use social media for growing traffic and sales?</h2>
                    <div className='flex gap-x-3 pt-3 items-center pb-12'>
                        <ul>
                            <li className='h-10 w-10 bg-red-600 rounded-full'></li>
                        </ul>
                        <div className='flex flex-col '>
                            <h2 className='text-black/70 text-lg font-medium'>Jessica Parker</h2>
                            <h2 className='text-black/60 text-md font-medium '>May, 2020. 5 mins read</h2>

                        </div>

                    </div>
                    <footer className='flex gap-x-4'>
                        <div className='flex gap-x-2 '>
                            <LikeIcon />
                            <h2 className='text-black/60 '>34</h2>
                        </div>
                        <div className='flex gap-x-2'>
                            <EyeIcon />
                            <h2 className='text-black/60 '>203</h2>
                        </div>
                    </footer>
                </article>
                <article className='rounded-lg bg-violet-200 w-[90%] md:w-[45%] lg:w-[30%] h-[40%] backdrop-blur-xl px-4'>
                    <h2 className='bg-gradient-to-r from-violet-500 to-blue-500 text-transparent bg-clip-text border-b border-gray-500 pt-2 pb-5'> Lifestyle</h2>
                    <h2 className='font-bold text-black/60 text-xl pt-3'>Health & fitness for busy people during times of stress
                        Jason Bourne</h2>
                    <div className='flex gap-x-3 pt-3 items-center pb-12'>
                        <ul>
                            <li className='h-10 w-10 bg-white rounded-full'>
                                <img src="" alt="" />
                            </li>
                        </ul>
                        <div className='flex flex-col '>
                            <h2 className='text-black/70 text-lg font-medium'>Jason Bourne</h2>
                            <h2 className='text-black/60 text-md font-medium '>April 2020. 10 mins read</h2>

                        </div>


                    </div>
                    <footer className='flex gap-x-4'>
                        <div className='flex gap-x-2 '>
                            <LikeIcon />
                            <h2 className='text-black/60 '>39</h2>
                        </div>
                        <div className='flex gap-x-2'>
                            <EyeIcon />
                            <h2 className='text-black/60 '>604</h2>
                        </div>
                    </footer>
                </article>
                <article className='rounded-lg bg-violet-200 w-[90%] md:w-[45%] lg:w-[30%] h-[40%] backdrop-blur-xl px-4'>
                    <h2 className='bg-gradient-to-r from-violet-500 to-blue-500 text-transparent bg-clip-text border-b border-gray-500 pt-2 pb-5'> CEO/ Office</h2>
                    <h2 className='font-bold text-black/60 text-xl pt-3'>QR codes- innovative ways to use them in small business</h2>
                    <div className='flex gap-x-3 pt-3 items-center pb-12'>
                        <ul>
                            <li className='h-10 w-10 bg-red-600 rounded-full'></li>
                        </ul>
                        <div className='flex flex-col '>
                            <h2 className='text-black/70 text-lg font-medium'>
                            Wanda Maximoff</h2>
                            <h2 className='text-black/60 text-md font-medium '>March, 2020. 7 mins read</h2>

                        </div>


                    </div>
                    <footer className='flex gap-x-4'>
                    <div className='flex gap-x-2 '>
                            <LikeIcon />
                            <h2 className='text-black/60 '>26</h2>
                        </div>
                        <div className='flex gap-x-2'>
                            <EyeIcon />
                            <h2 className='text-black/60 '>436</h2>
                        </div>
                        


                    </footer>
                </article>


            </section>
        </>
    )
}




