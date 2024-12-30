import HeroPic from "../assets/Hero.jpg";
import MobileModal from "./MobileModal";
import { useState } from "react";
const Hero = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () =>{
        setOpen(true);
        document.body.classList.add('overflow-hidden');
    }
    return (
        <div className="relative w-full">
            <img src={HeroPic} alt="Person" className="w-screen h-64 md:h-full" />
            <div className="absolute top-0 w-full h-full">
                <div className="flex md:hidden p-4 justify-between items-center">
                    <a href="#"><svg xmlns="http://www.w3.org/2000/svg" height={25} width={25} viewBox="0 0 448 512"><path fill="#ffffff" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg></a>
                    <button onClick={handleOpen} className="p-2 border-2 rounded-lg text-white font-semibold">Join Group</button>
                    <MobileModal open={open} setOpen={setOpen} />
                </div>
                <div className="md:w-[40%] absolute bottom-[10%] left-[8%]">
                    <h1 className="text-white text-xl md:text-3xl font-bold">Computer Engineering</h1>
                    <p className="text-white text-xs md:text-xl">372,826 Computer Engineers follow this</p>   
                </div>
            </div>
        </div>
    )
}

export default Hero;