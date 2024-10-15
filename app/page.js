
import NavBar from "@/components/NavBar";
import Image from "next/image";


export default function Home() {

  return (
    <div className="w-[1600px] h-[665px] ">
      <NavBar />
      <div className=" bg-[url('/images/illustration1.png')] w-screen  h-[97%] flex  bg-no-repeat bg-contain overflow-hidden bg-violet-100  bg-right">
      <div className="flex w-full justify-center items-center">
      <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-600 to-blue-500 text-transparent bg-clip-text">Bootstrap 5 theme</h1>
      <h2 className="text-black/30">Crafted by <span>ThemeWagon</span></h2>
      </div>
      </div>
      



    </div>
  );
}
