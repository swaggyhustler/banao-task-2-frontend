import axios from "axios";
import { useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";

export const GlobalContextProvider = ({children}) =>{

    const [posts, setPosts] = useState(null);
    const [isLogged, setIsLogged] = useState(false); 
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [postType, setPostType] = useState("all");

    const fetchData = async () =>{
        const result = await axios.get("https://banao-task-2-backend-lovat.vercel.app/post");
        setPosts(result.data.posts);
    }
    
    useEffect(()=>{
        fetchData();
    }, []);

    return (
        <GlobalContext.Provider value={{posts, setPosts, fetchData, isLogged, setIsLogged, showSignUpModal, setShowSignUpModal, postType, setPostType}}>
            {children}
        </GlobalContext.Provider>
    )
}