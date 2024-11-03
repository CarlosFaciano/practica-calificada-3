import React from 'react'
import Image from 'next/image'
export default function Team() {
    return (
        <header className='flex flex-col w-screen h-screen items-center mb-10 bg-violet-100 '>
            <h1 className='text-3xl font-medium mt-6'>Our Team</h1>
            <p className='text-black/30 mt-6 text-center'>People from various origins, cultures, and personalities make up our team. <br/> This blend makes it a powerful team.
            </p>
        <div className='flex justify-center mt-10 w-4/5 gap-x-4'>
             <Image src="/images/7..team/image1.png" width={300} height={500}></Image>
             <Image src="/images/7..team/image2.png" width={300} height={500}></Image>
             <Image src="/images/7..team/image3.png" width={300} height={500}></Image>
             <Image src="/images/7..team/image4.png" width={300} height={500}></Image>
        </div>
        <div className='w-full flex justify-center '>
            <button className='bg-gradient-to-br from-violet-500 to-blue-500 h-10 w-40 rounded-xl p-[1.5px] mt-10'>
                <div className='bg-violet-100 h-full w-full rounded-xl flex justify-center items-center'>
                    <span className='bg-gradient-to-br from-violet-500 to-blue-500 text-transparent bg-clip-text '>
                          View full team
                    </span>
                </div>
            </button>
        </div>
        </header>
    )
}
