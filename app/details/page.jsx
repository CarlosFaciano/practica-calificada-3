import React from 'react'

export default function Details() {
  return (
    <section className='h-screen w-screen bg-violet-100 flex flex-col items-center pb-10'>

      <div className='h-2/5 w-4/5  flex justify-center mb-20 mt-20'>

          <div className='flex relative  w-[30%]'>
            <img className='absolute bottom-0 translate-y-0 left-0 -translate-x-0' src="./images/4.details/illustration1.png" alt="" />
            <img className='' src="./images/4.details/illustration3.png" alt="" />
          </div>

          <article className='flex flex-col ms-4 '>
            <h2 className='text-black text-3xl font-bold'>A creative team that which <br /> builds stunning UI/UX</h2>
            <p className='text-black/50 font-medium mt-7'>Today i'd like to show you some incredible Sign up screen app <br /> UI ideas and concepts that offer a modern user experience. <br /> The most stunning, cutting edge UI/UX</p>
            <p className='mt-7 text-black/50 font-medium'>Klean is a free bootstrap 5 template for multipurpose landing <br /> pages. This design is a perfect choice, carefully curated by <br /> <span className='text-black/80 font-medium'>ThemeWagon</span></p>
            <button className='mt-10 bg-gradient-to-br from-violet-500 to-blue-500 h-12 w-32 rounded-full p-[1.5px]'>
              <div className='bg-violet-100 h-full w-full rounded-full flex justify-center items-center'>
                <span className='bg-gradient-to-br from-violet-500 to-blue-500 text-transparent bg-clip-text '>
                  Read More
                </span>
              </div>
            </button>
          </article>
      </div>

      <div className='h-2/5 w-4/5  flex justify-center  mt-10 bg-violet-100 ms-32'>

        <article className='flex flex-col ms-4 '>
          <h2 className='text-black text-3xl font-bold'>Devoted to defining <br/> the cutting edge</h2>
          <p className='text-black/50 font-medium mt-7'>"This new creation is cutting-edge technology." Says the <br/> researcher. "whose study originates from a business <br/> at the forefront of space science."</p>
          <p className='mt-7 text-black/50 font-medium'>Klean is a free bootstrap 5 template for multipurpose landing <br /> pages. This design is a perfect choice, carefully curated by <br /> <span className='text-black/80 font-medium'>ThemeWagon</span></p>
          <button className='mt-10 bg-gradient-to-br from-violet-500 to-blue-500 h-12 w-32 rounded-full p-[1.5px]'>
            <div className='bg-violet-100 h-full w-full rounded-full flex justify-center items-center'>
              <span className='bg-gradient-to-br from-violet-500 to-blue-500 text-transparent bg-clip-text '>
                Read More
              </span>
            </div>
          </button>
        </article>

        <div className=' ms-20 relative h-2/5 w-[30%]'>
          <img className='absolute top-0 -translate-y-1/2 right-0' src="./images/4.details/illustration2.png" alt="" />
          <img className='' src="./images/4.details/illustration6.png" alt="" />
        </div>

      </div>
    </section>
  )
}
