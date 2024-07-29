import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar"
import { useState, useEffect} from "react";
import { MdClose, MdMenu } from "react-icons/md";
import userIcon from "../assets/user.svg"

const Header = () =>{
    const [active, setActive] = useState(false)
    const [menuOpend, setmenuOpend ] = useState(false);
    const toggleMenu = () => setmenuOpend(!menuOpend)

    useEffect  (() =>{
        const handleScroll = () =>{
            if (window.scrollY > 0){
                //close menuopend jika web di scroll
                if(menuOpend){
                    setmenuOpend(false);
                }
            }
            //deteksi  scroll
            setActive(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        //menghapus EventListener di layar 
        return() =>{
            window.removeEventListener ("scroll", handleScroll);
        };
    },[menuOpend]);// dependency array memasstikan menuOpenend berhassil berubah

    return (
        <header className="max-padd-container fixed top-1 w-full left-0 right-0 z-50">
            {/* container */}
            <div className={`${active ? "py-0" :"py-1"}max-padd-container bg-white transition-all duration-200 rounded-2xl px-5 ring-1 ring-slate-900/5`}>
                <div className="flexBetween py-3">
                    {/* logo */}
                    <Link to="./" >
                    <span className="font-[900] text-[24px]">Indo<span className=" font-[600] medium-20">Property</span></span>
                    </Link>
                    {/* navbar */}
                    <div className="flexCenter gap-x-4">
                        {/* desktop */}
                        <Navbar containerStyles={"hidden xl:flex space-x-4 medium-16 ring-1 ring-slate-900/10 rounded-3xl p-2 bg-primary"}/>
                        {/* mobile */}
                        <Navbar containerStyles={`${menuOpend ? " xl:hidden flex items-start flex-col gap-y-8 capitalize fixed top-20 right-8 p-12 bg-white rounded-2xl shadow-md w-64 medium-16 ring-1 ring-slate-900/10 transition-all duration-300 z-50"
                            :"flex items-start flex-col gap-y-8 capitalize fixed top-20 -right-[100%] p-12 bg-white rounded-2xl shadow-md w-64 medium-16 ring-1 ring-slate-900/10 transition-all duration-300"}`}/>
                    </div>
                    <div className="flexBetween gap-x-3">
                    {!menuOpend ? (<MdMenu onClick={toggleMenu} className="xl:hidden crusor-pointer text-3xl hover:text-secondary"/>)
                    :(<MdClose onClick={toggleMenu} className="xl:hidden crusor-pointer text-3xl hover:text-secondary"/>)} 
                    
                    {/* button */}
                    <button className="btn-secondary flexCenter medium-16 rounded-2xl">
                        <img src={userIcon} alt="" height={22} width={22}/>
                        <span>Login</span>
                    </button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;