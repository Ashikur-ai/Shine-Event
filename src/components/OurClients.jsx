import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const OurClients = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 })
    }, [])
    return (
        <div>
            <div  className="mb-10 mt-20">
                <p className="text-6xl font-bold text-center">Our Clients</p>
                <div className="divider text-xl text-blue-600">Happy Customers as always</div>
            </div>

            <div className='grid lg:grid-cols-2 gap-5'>
                <div data-aos="fade-right" className="card bg-blue-600 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/8jtZJwN/c2.webp" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        

                    </div>
                </div>

                <div data-aos="fade-left" className="card bg-blue-600 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/71k3cCD/c3.webp" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">


                    </div>
                </div>

                <div data-aos="fade-up" className="card bg-blue-600 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/gSHRLFB/c04-1.webp" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">


                    </div>
                </div>

                <div data-aos="fade-up" className="card bg-blue-600 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/6yrdMj3/c4.webp" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">


                    </div>
                </div>

                <div data-aos="fade-right" className="card bg-blue-600 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/bFKnKK0/c5.webp" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">


                    </div>
                </div>

                <div data-aos="fade-left" className="card bg-blue-600 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/QvksT4V/c6.webp" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">


                    </div>
                </div>
            </div>

        </div>
    );
};

export default OurClients;