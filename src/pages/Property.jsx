import React from "react";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getProperty } from "../utils/api";
import { PuffLoader } from "react-spinners";
import FaHeartBtn from "../components/FaHeartBtn";
import { MdOutlineBathtub, MdOutlineBed, MdOutlineGarage } from "react-icons/md";
import { Link } from "react-router-dom";

const property = () => {
    const {pathname} = useLocation()
    const id = pathname.split("/").slice(-1)[0]
    //console.log(id)
    const {data, isLoading, isError} = useQuery(["resd", id], () => getProperty(id))
    console.log(data)
    if (isError){
        return(
            <div className="flexCenter">
                <span>terjadi Error di saat fetching data</span>
            </div>
        )
    }
    if (isLoading){
        return(
            <div className="h-64 flexCenter">
                <PuffLoader
                height = '80'
                width = '80'
                radius = {1}
                color = '#555'
                aria-label = 'puff-loading'
                />
            </div>
        )
    }
    return (
        <section className="max-padd-container my-[100px]">
             <div className="pb-3 relative">
                <img src={data.image} alt={data.title} className="rounded-xl"/>
                <div className="absolute top-3 right-3">
                    {/* like button */}
                    <FaHeartBtn />
                </div>
            </div>
            <h5 className="bold-16 my-1 text-secondary">{data.city}</h5>
            <h4 className="medium-18 line-clamp-1">{data.title}</h4> {/*line climb 1 diginakan untuk membuat .. ketika text terlalu panjang*/}
            {/* info */}
            <div className="flex gap-x-2 py-2 ">
                <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]"><MdOutlineBed/> {data.facilities.bedrooms}</div>
                <div className="flexCenter gap-x-2 border-r border-slate-900/50 pr-4 font-[500]"><MdOutlineBathtub/> {data.facilities.bathrooms}</div>
                <div className="flexCenter gap-x-2  font-[500]"><MdOutlineGarage/> {data.facilities.parkings}</div>
            </div>
            <p className="pt-2 mb-4  line-clamp-2">{data.description}</p>
            <div className="flexBetween mt-2">
                <div className="bold-16">${data.price}.00</div>
                <Link to={"/"}>
                <button className="btn-secondary rounded-xl !py-[7px] !px-5">Lihat Detail</button>
                </Link>
            </div>
        </section>
    )
}

export default property