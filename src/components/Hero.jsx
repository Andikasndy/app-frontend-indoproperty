import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return(
        <section className="max-padd-container pt-[99px]">
            <div className="max-padd-container bg-hero bg-center bg-cover bg-no-repeat h-[655px] w-full rounded-3xl">
                <div className="relative top-32 xs:top-52">
                    <span className="medium-18">Selamat Datang di Indoproperty</span>
                    <h1 className="h1 capitalize max-w-[40rem]">temukan rumah istimewa dengan Indoproperty</h1>
                    <p className="my-10 max-w-[33rem]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi explicabo eos suscipit voluptatum beatae officiis debitis tenetur illum similique quos animi nemo voluptatibus, molestiae rerum iure natus, voluptatem quod eius?</p>
                    {/* button */}
                    <div className="inline-flex items-center justify-center gap-4 p-2 bg-white rounded-2xl">
                        <div className="text-center regular-14 leading-tight pl-5">
                            <h5 className="uppercase font-bold">10% off</h5>
                            <p className="regular-14">On All Properties</p>
                        </div>
                        <Link to={"./listing"} className="btn-secondary rounded-xl pl-5">Buy now</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;