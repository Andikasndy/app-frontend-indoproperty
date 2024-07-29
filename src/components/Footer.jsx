import React from "react";
import { Link } from "react-router-dom";
import { FOOTER_LINKS, socialmedia, FOOTER_CONTACT_INFO} from "../constants/data";

const Footer = () =>{
    return(
        <footer className="max-padd-container mb-4">
            <div className="max-padd-container bg-primary rounded-tr-3xl pt-12 xl:pt-20 pb-8">
                <h3 className="h3">jelajahi real estate impian anda bersama kami ?</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem quasi rem fugit ducimus officiis? Quisquam corporis ducimus.</p>
                <hr className="my-8 bg-slate-900/40 h-[2px] " />
                {/* container */}
                <div className="flex justify-between flex-wrap gap-x-2 gap-y-8">
                    <div className="max-w-sm">
                        <Link to={"./"} className="flex items-center gap-x-2">
                        <span className="font-[900] text-[24px]">Indo<span className=" font-[600] medium-20">Property</span></span>
                        </Link>
                        <p className="py-4">Lorem ipsum dolor sit amet consectetur, dolorum minima! Nam nihil accusamus impedit neque cumque. Minima, nam quidem deserunt et a illum sapiente possimus assumenda.</p>
                        <div className="flexBetween pl-6 h-[3,3rem] bg-white w-full max-w-[366px] rounded-full ring-1 ring-slate-500/30">
                            <input type="email" placeholder="masukan email anda" className="bg-transparents border-none outline-none" />
                            <button className="btn-secondary rounded-full relative right-[0,33rem]">Subscribe</button>
                        </div>
                    </div>
                    <div className="flex justify-between flex-wrap gap-8">
                        {FOOTER_LINKS.map((col) =>(
                            <FooterColomun key={col.title} title={col.title}>
                                <ul className="flex flex-col gap-4 regular-34 text-gray-30">
                                    {col.links.map((link)=>(
                                        <Link to={'/'} key={link}>{link}</Link>
                                    ))}
                                </ul>
                            </FooterColomun>
                        ))}
                        <div className="flex flex-col gap-5">
                            <FooterColomun title={FOOTER_CONTACT_INFO.title}>
                                {FOOTER_CONTACT_INFO.links.map((link) =>(
                                    <Link to={'/'} key={link.label} className="flex gap-4 md:flex-col lg:flex-row">
                                        <p>{link.label}</p>:<p>{link.value}</p>
                                    </Link>
                                ))}
                            </FooterColomun>
                        </div>
                        <div className="flex">
                            <FooterColomun title={socialmedia.title}>
                                <ul className="flex gap-4">
                                    {socialmedia.links.map((link) => (
                                        <Link to={'/'} key={link.id}>{link.icon}</Link>
                                    ))}
                                </ul>
                            </FooterColomun>
                        </div>
                    </div>
                </div>
            </div>
            <p className="bg-tertiary/95 text-white medium-14 py-4 px-8 rounded-b-3xl flexBetween">
                <span>2024 IndoProperty</span> All rights reseved
            </p>
        </footer>
    );
}

export default Footer;

const FooterColomun = ({title , children}) =>{
    return (
        <div className="flex flex-col gap-5">
            <h4 className="bold-18 whitespace-nowrap">{title}</h4>
            {children}
        </div>
    )
}