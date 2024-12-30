import Logo from "../components/Logo";
const Header = () =>{
    return (
        <div className="hidden w-full md:flex justify-around items-center p-4">
            <Logo />
            <div className="min-w-[50%] bg-slate-100 p-2 rounded-full">
                <p className="text-center">Search for your favorite groups in ATG</p>
            </div>
            <p>Create account <span className="text-blue-900 font-bold">It&apos;s Free</span></p>
        </div>
    )
}

export default Header;