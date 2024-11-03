import React from 'react'

export default function Features() {
  return (
    <section className='flex flex-col justify-center bg-violet-100'>
         <div className='h-screen w-screen bg-violet-100 flex flex-col '>
                <header className='flex flex-col w-screen items-center mb-10'>
                    <h1 className='text-3xl font-medium mt-6'>Features</h1>
                    <p className='text-black/30 mt-6 text-center'>We provide a number of excellent features that will undoubtedly improve the <br/> user experience. We also provide a better support system</p>
                </header>
                <div className='w-full h-full flex justify-center gap-x-8 flex-wrap bg-violet-100'>
                    <article className='w-[90%] h-[40% ] lg:w-[20%] h-[40%] flex flex-col justify-center items-center  mt-20   rounded-xl  pb-5 '>
                        <img className='h-[85%]' src="/images/5.features/icon1.png" alt="" />
                        <h2 className='text-black/60 font-bold
                         text-lg mt-4 mb-2'>Encripted Mail</h2>
                         <p className=' text-black/40 text-center'>A process of encrypting email communications</p>
                    </article>
                    <article className='w-[90%] h-[40% ] lg:w-[20%] h-[40%] flex flex-col justify-center items-center  mt-20   rounded-xl  pb-5'>
                        <img className='h-[85%]' src="/images/5.features/icon2.png" alt="" />
                        <h2 className='text-black/60 font-bold
                         text-lg mt-4 mb-2'>Display Sharing</h2>
                         <p className='text-black/40 text-center'>with other participants, you may share <br/> your screen</p>
                    </article>
                    <article className='w-[90%] h-[40% ] lg:w-[20%] h-[40%]  flex flex-col justify-center items-center  mt-20   rounded-xl  pb-5'>
                        <img className='h-[85%]' src="/images/5.features/icon3.png" alt="" />
                        <h2 className='text-black/60 font-bold
                         text-lg mt-4 mb-2'>Private Notebook</h2>
                         <p className=' text-black/40 text-center'>Private notebook is an application that <br/> is protected</p>
                    </article>
                </div>
                <div className='w-full h-full flex justify-center gap-x-8 bg-violet-100 flex-wrap'>
                    <article className='w-[90%] h-[40% ] md:w-[40%] md:h-[40%] lg:w-[20%] h-[40%] flex flex-col justify-center items-center  mt-20   rounded-xl  pb-5'>
                        <img className='h-[85%]' src="/images/5.features/icon4.png" alt="" />
                        <h2 className='text-black/60 font-bold
                         text-lg mt-4 mb-2'> App Assistance</h2>
                         <p className=' text-black/40 text-center'>App Assistant is quickly and efectively <br/> ran the system</p>
                    </article>
                    <article className='w-[90%] h-[40% ] md:w-[40%] md:h-[40%] lg:w-[20%] h-[40%]  flex flex-col justify-center items-center  mt-20   rounded-xl  pb-5'>
                        <img className='h-[85%]' src="/images/5.features/icon5.png" alt="" />
                        <h2 className='text-black/60 font-bold
                         text-lg mt-4 mb-2'>Multiple Printing</h2>
                         <p className=' text-black/40 text-center'>Our canvas printing are crafted on <br/> top notch canvas</p>
                    </article>
                    <article className='w-[90%] h-[40%] md:w-[40%] md:h-[40%] lg:w-[20%] lg:h-[40%]  flex flex-col justify-center items-center  mt-20   rounded-xl  pb-5 bg-violet-100'>
                        <img className='h-[85%]' src="/images/5.features/icon6.png" alt="" />
                        <h2 className='text-black/60 font-bold
                         text-lg mt-4 mb-2'>Free Sketch</h2>
                         <p className=' text-black/40 text-center'>Our canvas printing are crafted on <br/> top notch canvas</p>
                    </article>
                </div>
         </div>
    </section>
   
    
  )
}