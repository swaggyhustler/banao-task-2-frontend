import { useContext, useState } from "react";
import SignupModal from "./SignupModal";
import { GlobalContext } from "../contexts/GlobalContext";
import EditModal from "./EditModal";
import { toast } from "react-toastify";

const Navbar = () => {
    const {isLogged, setIsLogged, setShowSignUpModal, showSignUpModal, setPostType} = useContext(GlobalContext);
    const [createPost, setCreatePost] = useState(false);
    

    const handleJoinGroup = () =>{
        console.log(isLogged);
        if(!isLogged){
            document.body.classList.add('overflow-hidden');
            setShowSignUpModal(true);
            return;
        }else{
            toast.success("Already LoggedIn");
        }
    }

    const handleWritePost = () =>{
        if(!isLogged){
            document.body.classList.add('overflow-hidden');
            setShowSignUpModal(true);
            return;
        }else{
            document.body.classList.add('overflow-hidden');
            setCreatePost(true);
        }
    }

    return (
    <div className="hidden md:flex items-center bg-white justify-between my-2 py-2 sticky top-0 z-1">
        <div className="flex gap-4 md:text-sm lg:text-base bg-white">
            <button onClick={()=>setPostType("all")} className="p-2 focus:border-b-2 focus:border-black active" autoFocus={true}>All Posts</button>
            <button onClick={()=>setPostType("article")} className="p-2 focus:border-b-2 focus:border-black">Article</button>
            <button onClick={()=>setPostType("event")} className="p-2 focus:border-b-2 focus:border-black">Events</button>
            <button onClick={()=>setPostType("education")} className="p-2 focus:border-b-2 focus:border-black">Education</button>
            <button onClick={()=>setPostType("job")} className="p-2 focus:border-b-2 focus:border-black">Jobs</button>
        </div>
        <div className="flex gap-4">
            <button onClick={handleWritePost} className="p-2 bg-[#EDEEF0] rounded-md md:text-sm lg:text-base font-semibold">Write a Post
                <svg width="22" height="22" className="inline" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_1_839)">
                        <path d="M6.41663 9.16663L11 13.75L15.5833 9.16663H6.41663Z" fill="black" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_839">
                            <rect width="22" height="22" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </button>
            <button className="py-2 px-5 bg-[#2F6CE5] rounded-md md:text-sm lg:text-base font-semibold text-white" onClick={handleJoinGroup}>Join Group</button>
            <SignupModal showSignUpModal={showSignUpModal} setShowSignUpModal={setShowSignUpModal} setIsLogged={setIsLogged} />
            <EditModal open={createPost} onClose={setCreatePost} createPost={true}/>
        </div>
    </div>
    )
}

export default Navbar;