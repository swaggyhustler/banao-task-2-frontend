import ThumbUp from "../assets/thumb-up.png";
import Left from "./Left";

const Container = () =>{
    return (
        <div id="container" className="flex justify-between">
                    {/* <div id="left" className="w-full md:w-[60%]">
                        {
                            posts?.map((post, index)=>{
                                return <Post post={post} key={index} />
                            })
                        }
                    </div> */}
                    <Left />
                    <div className="hidden md:block mt-9 max-w-[30%]">
                        <div className="flex justify-between items-center border-b-2 border-slate-400 pb-2">
                            <div className="flex items-center justify-center">
                                <label htmlFor="location" className="flex items-center gap-1">
                                    <svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_1_842)">
                                            <path d="M9 1.5C6.0975 1.5 3.75 3.8475 3.75 6.75C3.75 10.6875 9 16.5 9 16.5C9 16.5 14.25 10.6875 14.25 6.75C14.25 3.8475 11.9025 1.5 9 1.5ZM5.25 6.75C5.25 4.68 6.93 3 9 3C11.07 3 12.75 4.68 12.75 6.75C12.75 8.91 10.59 12.1425 9 14.16C7.44 12.1575 5.25 8.8875 5.25 6.75Z" fill="black" />
                                            <path d="M9 8.625C10.0355 8.625 10.875 7.78553 10.875 6.75C10.875 5.71447 10.0355 4.875 9 4.875C7.96447 4.875 7.125 5.71447 7.125 6.75C7.125 7.78553 7.96447 8.625 9 8.625Z" fill="black" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_1_842">
                                                <rect width="18" height="18" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </label>
                                <input type="text" id="location" className="md:text-sm lg:text-base" placeholder={"Hyderabad, Telangana"} />
                            </div>
                            <label htmlFor="location">
                                <svg width="20" className="cursor-pointer" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_1_848)">
                                        <path d="M2.5 14.375V17.5H5.625L14.8417 8.28334L11.7167 5.15834L2.5 14.375ZM17.2583 5.86667C17.5833 5.54167 17.5833 5.01667 17.2583 4.69167L15.3083 2.74167C14.9833 2.41667 14.4583 2.41667 14.1333 2.74167L12.6083 4.26667L15.7333 7.39167L17.2583 5.86667Z" fill="black" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_1_848">
                                            <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </label>
                        </div>

                        <div className="flex mt-4 gap-2">
                            <svg width="25" height="25"  viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g opacity="0.5" clipPath="url(#clip0_1_853)">
                                    <path d="M7.33337 10H8.66671V11.3334H7.33337V10ZM7.33337 4.66671H8.66671V8.66671H7.33337V4.66671ZM7.99337 1.33337C4.31337 1.33337 1.33337 4.32004 1.33337 8.00004C1.33337 11.68 4.31337 14.6667 7.99337 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8.00004C14.6667 4.32004 11.68 1.33337 7.99337 1.33337ZM8.00004 13.3334C5.05337 13.3334 2.66671 10.9467 2.66671 8.00004C2.66671 5.05337 5.05337 2.66671 8.00004 2.66671C10.9467 2.66671 13.3334 5.05337 13.3334 8.00004C13.3334 10.9467 10.9467 13.3334 8.00004 13.3334Z" fill="black" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_1_853">
                                        <rect width="16" height="16" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p className="text-sm inline opacity-50 z-[-1]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, blanditiis.</p>
                        </div>

                        <div className="mt-24 flex flex-col gap-8">
                            <div className="font-semibold md:text-lg lg:text-xl xl:text-2xl">
                                <img className="inline mr-3" src={ThumbUp} height={30} width={30} alt="thumbs up" />Recommended Groups
                            </div>
                            <div className="flex flex-col gap-3 text-sm lg:text-base">
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="h-12 w-12 rounded-full bg-black"></div>
                                        <p>John Doe</p>
                                    </div>
                                    <button className="rounded-full bg-black text-white px-4 py-1">Follow</button>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="h-12 w-12 rounded-full bg-black"></div>
                                        <p>John Doe</p>
                                    </div>
                                    <button className="rounded-full bg-black text-white px-4 py-1">Follow</button>
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-3">
                                        <div className="h-12 w-12 rounded-full bg-black"></div>
                                        <p>John Doe</p>
                                    </div>
                                    <button className="rounded-full bg-black text-white px-4 py-1">Follow</button>
                                </div>
                                <a href="#" className="self-end text-blue-900 font-semibold">see more...</a>
                            </div>
                        </div>

                    </div>
                </div>
    )
}

export default Container;