import CtaFooter from '@/components/CtaFooter'
import React from 'react'
export default function Projects() {
    return (
        <>
        <div className='h-screen w-screen bg-violet-100 flex flex-col overflow-y-auto'>
            <header className='flex flex-col w-screen items-center mb-10'>
                <h1 className='text-3xl font-medium mt-6'>Our Projects</h1>
                <p className='text-black/30 mt-6 text-center'>A project is a single or team activity, combining research and design with best <br /> effort, Here are some of our team &quote;</p>
            </header>
            <div className='w-[70%] h-[90%] grid gap-4     mx-auto flex-shrink-0  border border-white border-spacing-0 mb-5 pb-5 grid-cols-3 grid-rows-3 p-2 rounded-xl backdrop-blur-xl'>
                <div className=' '>
                    <img className='max-h-full w-full object-cover' src="./images/6.projects/image1.png" alt="" />
                </div>
                <div className=' grande2'>
                    <img className='max-h-full w-full object-cover' src="/images/6.projects/image3.png" alt="" />
                </div>
                <div className=' '>
                    <img className='max-h-full w-full object-cover' src="/images/6.projects/image5.png" alt="" />
                </div>
                <div className='  grande columna1'>
                    <img className='max-h-full w-full object-cover' src="/images/6.projects/image2.png" alt="" />
                </div>
                <div className=' '>
                    <img className='max-h-full w-full object-cover' src="/images/6.projects/image4.png" alt="" />
                </div>
                <div className='grande'>
                    <img className='max-h-full w-full object-cover' src="/images/6.projects/image6.png" alt="" />
                </div>
                   
                
            </div>
        </div>
        <CtaFooter/>
        </>
    )
}
