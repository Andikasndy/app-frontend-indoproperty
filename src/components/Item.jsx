import React from "react";
import FaHeartBtn from "./FaHeartBtn";
import { MdOutlineBathtub, MdOutlineBed, MdOutlineGarage } from "react-icons/md";
import { Link } from "react-router-dom";

const Item = ({property}) => {
    return (
        <div className="rounded-2xl p-4 bg-white">
            <div className="pb-3 relative">
                <img src={property.image} alt={property.title} className="rounded-xl"/>
                <div className="absolute top-3 right-3">
                    {/* like button */}
                    <FaHeartBtn />
                </div>
            </div>
            <h5 className="bold-16 my-1 text-secondary">{property.city}</h5>
            <h4 className="medium-18 line-clamp-1">{property.title}</h4> {/*line climb 1 diginakan untuk membuat .. ketika text terlalu panjang*/}
            {/* info */}
            <div className="flex gap-x-2 py-2 ">
                <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]"><MdOutlineBed/> {property.facilities.bedrooms}</div>
                <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]"><MdOutlineBathtub/> {property.facilities.bathrooms}</div>
                <div className="flexCenter gap-x-2  font-[500]"><MdOutlineGarage/> {property.facilities.parkings}</div>
            </div>
            <p className="pt-2 mb-4  line-clamp-2">{property.description}</p>
            <div className="flexBetween mt-2">
                <div className="bold-16">${property.price}.00</div>
                <Link to={"/"}>
                <button className="btn-secondary rounded-xl !py-[7px] !px-5">Lihat Detail</button>
                </Link>
            </div>
        </div>
    );
}
export default Item