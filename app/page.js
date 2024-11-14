
import NavBar from "@/components/NavBar";
import Image from "next/image";
import Service from "./service/page";
import Projects from "./projects/page";
import Details from "./details/page";
import Team from "./team/page";
import PrincipalPage from "./home/page";
import Testimonial from "./testimonials/page";
import Blog from "./blog/page";
import ContactUs from "./contactUs/page";
import CtaFooter from "@/components/CtaFooter";


export default function Home() {

  return (
    <div className="h-screen">
       <PrincipalPage/>
       
   
    </div>
  );
}
