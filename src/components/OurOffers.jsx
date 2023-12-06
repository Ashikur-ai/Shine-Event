import { FcIdea } from "react-icons/fc";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const OurOffers = () => {

    useEffect(() => {
        Aos.init({duration:2000})
    }, [])

    return (
        <div>
            <div className="mb-10">
                <p className="text-6xl font-bold text-center">Our Strong Points</p>
                <div className="divider text-xl text-blue-600">Elevate Your Occasion</div>
            </div>
            <div className="p-4 space-y-2 md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div data-aos="fade-right" className="card   bg-base-100 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <FcIdea className="text-9xl"></FcIdea>
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Event Planning</h2>
                        <p>Comprehensive event planning services, including concept development, theme selection, and overall event design.</p>

                    </div>
                </div>

                <div data-aos="fade-down" className="card bg-base-100 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/xGDf2gy/venue.png" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Venue Selection</h2>
                        <p>Assistance in choosing the perfect venue that suits the event's size, theme, and budget.</p>

                    </div>
                </div>

                <div data-aos="fade-left" className="card   bg-base-100 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/j80q0bz/management.png" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Production Management</h2>
                        <p>Managing all technical aspects, including lighting, sound, and stage design, to ensure a seamless and engaging event.</p>

                    </div>
                </div>

                <div data-aos="fade-right" className="card   bg-base-100 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/wcmkdtx/icons8-promotion.gif" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Event Promotion</h2>
                        <p>Developing marketing and promotional strategies to create buzz and attract a larger audience to the event.</p>

                    </div>
                </div>

                <div data-aos="fade-up" className="card   bg-base-100 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/2sk8TyV/ticket.png" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Ticketing and Registration</h2>
                        <p>Setting up online ticketing and registration systems for easy access and data collection</p>

                    </div>
                </div>

                <div data-aos="fade-left" className="card   bg-base-100 shadow-2xl">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/KKzNf6r/security.gif" alt="" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Security and Safety</h2>
                        <p>Implementing security measures and safety protocols to ensure the well-being of attendees.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurOffers;