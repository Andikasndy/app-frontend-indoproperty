import React from "react";
import { FaLocationDot } from "react-icons/fa6";

const Searchbar = () => {
    return  (
        <div className="flexBetween pl-6 h-[3.3rem] bg-white w-full sm:max-w-[466px] md:max-w-[833px] xl:max-w-full rounded-full ring-1 ring-slate-500/10">
            <input type="text" placeholder="Masukan Daerah Nama/Kota/Negara" className="bg-transparent border-none outline-none w-full" />
            <FaLocationDot className="relative right-4 text-xl hover:text-secondary cursor-pointer"/>
        </div>
    )
}

export default Searchbar;