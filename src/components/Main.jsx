import Container from './Container';
import Navbar from './Navbar';

const Main = () => {
    
    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-[100%] md:w-[80%]">
                <div className="flex mt-4 md:hidden justify-between items-center mx-4">
                    <p className="font-bold">Posts(123)</p>
                    <button className="py-2 px-4 bg-slate-300 rounded-md font-semibold">Filter:All</button>
                </div>
                <Navbar />
                <Container />
            </div>
        </div>
    )
}

export default Main;