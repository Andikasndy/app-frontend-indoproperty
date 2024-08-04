import React from "react";
import Searchbar from "../components/Searchbar";
import {PROPERTIES} from '../constants/data'
import Item from '../components/Item'
import useProperties from "../hooks/useProperties.jsx";
import {PuffLoader} from "react-spinners"

const Listing = () => {
    const {data, isError, isLoading} = useProperties();
    //console.log(data)
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
    return(
        <main className="max-padd-container my-[100px] ">
            <div className="max-padd-container py-10 xl:py-22 bg-primary rounded-3xl">
                <div>
                    <Searchbar/>
                    {/* container */}
                    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 mt-10 ">
                        {data.map((property)=> (
                                <Item key={property.title} property={property}/>
                            ))}
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Listing;