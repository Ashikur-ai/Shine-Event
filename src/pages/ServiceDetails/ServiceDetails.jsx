import React, { useEffect, useState } from 'react';
import Navbar from '../../SharedComponents/Navbar';
import { useLoaderData, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const ServiceDetails = () => {
    const events = useLoaderData();
    const { id } = useParams();
    const intId = parseInt(id);
    const [sEvent, setEvent] = useState({});

    useEffect(() => {
        const selectedEvent = events.find(event => event.id === intId);
        setEvent(selectedEvent)
    }, [intId, events])

    const handleBooking = () => {
        toast.success('Booking Confirmed')
    }


    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="hero min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img src={`${sEvent.img_url}`} className="max-w-sm rounded-lg shadow-2xl" />
                        <div>
                            <h1 className="text-5xl font-bold text-blue-600">{sEvent.event_name}</h1>
                            <p className="py-6 text-xl">{sEvent.description}</p>
                            <div className="stats shadow">

                                <div className="stat place-items-center">
                                    <div className="stat-title">Area</div>
                                    <div className="stat-value">1000 sq ft</div>
                                </div>

                                

                                <div className="stat place-items-center">
                                    <div className="stat-title">Accommodation</div>
                                    <div className="stat-value">1,200</div>
                                    
                                </div>

                            </div>
                            <div className=''>
                                <p className='text-2xl font-bold mb-4'>Price: ${sEvent.price}</p>
                                <button onClick={handleBooking} className="btn btn-primary">Get Booking</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ServiceDetails;