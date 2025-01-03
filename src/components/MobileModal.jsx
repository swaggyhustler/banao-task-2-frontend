import { createPortal } from "react-dom";
import GoogleIcon from '../assets/google.png';
import FacebookIcon from '../assets/facebook.png';
import { useState, useContext } from "react";
import axios from "axios";
import { GlobalContext } from "../contexts/GlobalContext";
import { toast } from "react-toastify";

const MobileModal = ({open, setOpen}) =>{
    const {setIsLogged} = useContext(GlobalContext);
    const [signin, setSignin] = useState(false);
    const [formData, setFormData] = useState({});

    const handleClose = () => {
        document.body.classList.remove('overflow-hidden');
        setOpen(false);
    }

    if(!open) return null;

    document.body.classList.add('overflow-hidden');
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(signin){
            const result = await axios.post('https://banao-task-2-backend-lovat.vercel.app/auth/login', formData);
            // setIsLogged(true);
            if(result.data.authenticatedUser){
                toast.success("Login Successful");
                setIsLogged(true);
                document.body.classList.remove('overflow-hidden');
            }else{
                toast.error("Wrong Credentials");
            }
        }else{
            if(formData?.password !== formData?.re_password)
                return console.log("Recheck password");
            axios.post('https://banao-task-2-backend-lovat.vercel.app/auth/register', formData);
            setSignin(true);
            document.body.classList.remove('overflow-hidden');
        }
    }
    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }
    return (
        createPortal(
        <>
            <div className="h-screen w-screen bg-black opacity-50 fixed top-0 left-0"></div>
            <form onSubmit={handleSubmit} className="fixed bg-white bottom-0 w-screen h-[80%] p-4 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-xl">Create Account</h1>
                    <button className="border-2 w-20 px-2 py-1 rounded-md bg-slate-200 self-end font-semibold" onClick={handleClose}>Close</button>
                </div>

                <div className="flex flex-col bg-slate-400 rounded-md">
                    {!signin && <div className="container flex justify-center items-center">
                        <input name="first_name" onChange={handleChange} value={formData?.first_name} className="p-2 bg-slate-200 w-[48%] mx-[4px] mt-[4px] " type="text" placeholder="First Name" />
                        <input name="last_name" onChange={handleChange} value={formData?.last_name} className="p-2 bg-slate-200 w-[48%] mr-[4px] mt-[4px] " type="text" placeholder="Last Name" />
                    </div>}
                    <input name="email" onChange={handleChange} value={formData?.email} className="p-2 bg-slate-200 m-[4px]" type="email" placeholder="Email" />
                    <input name="password" onChange={handleChange} value={formData?.password} className={!signin?"p-2 bg-slate-200 mx-[4px]": "p-2 bg-slate-200 mx-[4px] mb-[4px]"} type="password" placeholder="Password" />
                    {!signin && <input name="re_password" onChange={handleChange} value={formData?.re_password} className="p-2 bg-slate-200 m-[4px]" type="password" placeholder="Confirm Password" />}
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

            </form>
        </>
        ,document.getElementById('portal'))
    )
}

export default MobileModal;