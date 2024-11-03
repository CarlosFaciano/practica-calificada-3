import React from 'react'
import NavBar from '@/components/NavBar'
import Image from 'next/image'
export default function PrincipalPage() {
  return (
    <div className="w-[max-width: 1600px] h-[665px] ">
    <NavBar />
    <div className="  flex  h-full  bg-no-repeat bg-contain  bg-violet-100  bg-right justify-end">
      <figure className=" h-full w-2/3 bg-no-repeat bg-right flex justify-end">
          <Image className="w-full h-full object-fill" src="/images/illustration1.png" width={4096} height={2060} layout='responsive'/>
      </figure>
      <div className="flex flex-col w-full h-full  justify-center left-20 absolute">
        <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-600 to-blue-500 text-transparent bg-clip-text mb-4 ">Bootstrap 5 theme</h1>
        <h2 className="text-black/30 flex text-2xl items-center mb-4"> Crafted by  <span className="text-black font-bold text-3xl ms-1"> ThemeWagon </span>
        </h2>
        <p className="text-black/30">ThemeWagon offers an wide array of category-oriented <br />Free and Premium Bootstrap HTML Templates and Themes</p>
        <button className="shadow-lg text-white font-bold bg-gradient-to-r from-violet-600 to-blue-500 h-10 w-28 rounded-md mt-20">Check Demo</button>
      </div>
     
    </div>
    <footer className="flex gap-x-16 justify-center bg-violet-100 pt-10">
        <img className="w-[12%] h-14" src="./images/2.home/google.png"></img>
        <img className="w-[12%] h-14" src="./images/2.home/netflix.png"></img>
        <img className="w-[12%] h-14" src="./images/2.home/microsoft.png"></img>
        <img className="w-[12%] h-14" src="./images/2.home/mailbuster.png"></img>
        <img className="w-[12%] h-14" src="./images/2.home/themewagon.png"></img>

      </footer>



  </div>
  )
}
