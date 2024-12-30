import { useContext, useRef, useState, useEffect } from "react";
import { GlobalContext } from "../contexts/GlobalContext";
import Post from "./Post";
import Pagination from "./Pagination";

const Left = () => {
    const {posts, postType} = useContext(GlobalContext);
    const postPerPage = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const [currentPosts, setCurrentPosts] = useState(null);
    const [totalPosts, setTotalPosts] = useState(posts?.length);
    const scrollToPostRef = useRef();
    
    const executeScroll = () =>{
        scrollToPostRef.current.scrollIntoView();
    }

    const [indexOfLastPage, setIndexOfLastPage]=useState(currentPage * postPerPage);
    const [indexOfFirstPage, setIndexOfFirstPage]=useState(indexOfLastPage - postPerPage);


    useEffect(()=>{
        setIndexOfLastPage(currentPage * postPerPage);
        setIndexOfFirstPage(indexOfLastPage - postPerPage);
        if(postType === 'all' && posts){
            setCurrentPosts([...posts.slice(indexOfFirstPage, indexOfLastPage)]);
            setTotalPosts(posts?.length);
        }else{
            try{
                const result = posts?.filter((post)=>{return null !== post.category.toLowerCase().match(postType)});
                setCurrentPosts([...result.slice(indexOfFirstPage, indexOfLastPage)]);
                setTotalPosts(result?.length);
            }catch(e){
                console.log(e.message);
            }
        }
    }, [postType, posts, currentPage, indexOfFirstPage, indexOfLastPage, currentPage]);
    
    const paginate = pageNumber => setCurrentPage(pageNumber);

    return (
        <div id="left" className="w-full md:w-[60%]" ref={scrollToPostRef}>
            {
                currentPosts?.map((post, index)=> <Post post={post} key={index} />)
            }
            <Pagination postPerPage={postPerPage} totalPages={totalPosts} paginate={paginate} executeScroll={executeScroll} />
        </div>
    )
}

export default Left;