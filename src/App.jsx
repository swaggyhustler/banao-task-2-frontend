import Header from "./components/Header";
import Hero from "./components/Hero";
import Navbar from "./components/Main";
import { ToastContainer } from 'react-toastify';

const App = () =>{
    return (
        <>
            <Header />
            <Hero />
            <Navbar />
            <ToastContainer />
        </>
    );
}

export default App;