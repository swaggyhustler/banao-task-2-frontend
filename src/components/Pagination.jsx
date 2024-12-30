const Pagination = ({postPerPage, totalPages, paginate, executeScroll}) =>{
    const pageNumbers = [];
    for(let i=1; i<Math.ceil(totalPages/postPerPage); i++){
        pageNumbers.push(i);
    }
    const handleClick = (e) =>{
        paginate(+e.target.innerText);
        console.log(e.target.innerText);
        executeScroll();
    }
    return (
        <div className="flex gap-1 justify-center items-center mb-12 overflow-auto">
            {
                pageNumbers.map((i)=> <div className="h-8 w-8 flex justify-center items-center border border-2 cursor-pointer" key={i} onClick={handleClick} >{i}</div>)
            }
        </div>
    )
}

export default Pagination;