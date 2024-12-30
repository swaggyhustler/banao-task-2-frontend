import { createPortal } from "react-dom";
import GoogleIcon from '../assets/google.png';
import FacebookIcon from '../assets/facebook.png';
import { useState } from "react";
const MobileModal = ({open, setOpen}) =>{
    const [signin, setSignin] = useState(false);
    if(!open) return null;
    return (
        createPortal(
        <>
            <div className="h-screen w-screen bg-black opacity-50 fixed top-0 left-0"></div>
            <div className="fixed bg-white bottom-0 w-screen h-[80%] p-4 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-xl">Create Account</h1>
                    <button className="border-2 w-20 px-2 py-1 rounded-md bg-slate-200 self-end font-semibold" onClick={()=>setOpen(false)}>Close</button>
                </div>

                <div className="flex flex-col bg-slate-400 rounded-md">
                    {!signin && <div className="container flex justify-center items-center">
                        <input className="p-2 bg-slate-200 w-[48%] mx-[4px] mt-[4px] " type="text" placeholder="First Name" />
                        <input className="p-2 bg-slate-200 w-[48%] mr-[4px] mt-[4px] " type="text" placeholder="Last Name" />
                    </div>}
                    <input className="p-2 bg-slate-200 m-[4px]" type="email" placeholder="Email" />
                    <input className={!signin?"p-2 bg-slate-200 mx-[4px]": "p-2 bg-slate-200 mx-[4px] mb-[4px]"} type="password" placeholder="Password" />
                    {!signin && <input className="p-2 bg-slate-200 m-[4px]" type="password" placeholder="Confirm Password" />}
                </div>
                <div className="flex justify-around items-center">
                    <button className="p-4 bg-blue-500 rounded-full text-white font-semibold hover:bg-blue-400">{!signin ? "Create Account": "Sign In"}</button>
                    <a href="#" className="text-blue-700 font-semibold" onClick={()=>setSignin((prev)=>!prev)}>or Sign {!signin?"In":"Up"}</a>
                </div>

                <div>
                    <button className="p-4 border-2 border-slate-200 w-full rounded-md hover:bg-slate-100"><img height={25} width={25} className="inline mr-2" src={GoogleIcon} alt="google icon" />{!signin?"Sign Up":"Sign In"} with Google</button>
                    <button className="p-4 border-2 border-slate-200 w-full rounded-md mt-2 hover:bg-slate-100"><img height={25} width={25} className="inline mr-2" src={FacebookIcon} alt="facebook icon" />{!signin?"Sign Up":"Sign In"} with Facebook</button>
                </div>
                
                <p className="text-center text-sm">By Signing Up, You agree to our Terms and Conditions, Privacy Policy</p>

            </div>
        </>
        ,document.getElementById('portal'))
    )
}

export default MobileModal;