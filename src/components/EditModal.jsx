import axios from "axios";
import { useEffect, useState, useContext } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import { toast } from "react-toastify";
import MobileModal from "./MobileModal";

const EditModal = ({open, onClose, data=null, createPost=false}) =>{

    const [formData, setFormData] = useState(null);
    const [showMobileModal, setMobileModal] = useState(true);
    const {fetchData, isLogged, setShowSignUpModal} = useContext(GlobalContext);

    useEffect(()=>{
        setFormData(data);
    }, [data]);

    if(!open) return null;

    if(open && !isLogged && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        return <MobileModal open={showMobileModal} setOpen={setMobileModal}/>
    }

    if(open && !isLogged && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
        onClose(false);
        document.body.classList.add('overflow-hidden');
        setShowSignUpModal(true);
        return;
    }

    const handleChange = (e) =>{
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(createPost){
            await axios.post('https://banao-task-2-backend-lovat.vercel.app/post/create', formData);
            toast.success('Post Created');
            document.body.classList.remove('overflow-hidden');
        }else{
            await axios.put('https://banao-task-2-backend-lovat.vercel.app/post/update', formData);
            toast.success('Post Updated');
            document.body.classList.remove('overflow-hidden');
        }
        fetchData();
        onClose(false);
    }
    
    return (
        <>
            <div className="fixed top-0 left-0 w-screen h-screen bg-black opacity-50"></div>
            <div className="fixed bg-white -translate-x-1/2 -translate-y-1/2 top-[50%] left-[50%] z-10 w-[90%] md:w-1/2  rounded-lg flex flex-col justify-between items-center p-2 md:p-8">
                <button className="self-end bg-slate-300 px-2 py-1 rounded-lg font-semibold border hover:border-slate-900" onClick={()=>{onClose(false)}}>Close</button>
                <h1 className="text-2xl md:text-3xl font-semibold">{createPost?'Create Post': 'Edit'}</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-2 w-[90%]">
                    <div>
                        <label htmlFor="category" className="block font-semibold mb-1">Category</label>
                        <input value={formData?.category} onChange={handleChange} className="p-2 border border border-2 border-slate-400 w-full" name="category" type="text" id="category" placeholder={data?.category} />
                    </div>
                    <div>
                        <label htmlFor="title" className="block font-semibold mb-1">Title</label>
                        <input value={formData?.title} onChange={handleChange} className="p-2 border border border-2 border-slate-400 w-full" type="text" id="title" name="title"/>
                    </div>
                    <div>
                        <label htmlFor="url" className="block font-semibold mb-1">Banner URL</label>
                        <input value={formData?.banner} onChange={handleChange} className="p-2 border border border-2 border-slate-400 w-full" type="text" id="url" name="banner" placeholder={data?.banner} />
                    </div>
                    <div>
                        <label htmlFor="content" className="block font-semibold mb-1">Content</label>
                        <textarea value={formData?.content} onChange={handleChange} name="content" className="border border-2 border-slate-400 w-full p-1" id="content">{data?.content}</textarea>
                    </div>
                    <button className="px-4 py-2 rounded-lg bg-green-500 font-semibold self-end hover:bg-green-600">Submit</button>
                </form>
            </div>
        </>
    )
}

export default EditModal; 