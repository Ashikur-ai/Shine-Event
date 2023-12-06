import React from 'react';
import Navbar from '../../SharedComponents/Navbar';
import { Helmet } from 'react-helmet-async';

import SlideCard from '../../components/SlideCard';
import { Link, useLoaderData } from 'react-router-dom';
import OurOffers from '../../components/OurOffers';
import Card from '../../components/Card';
import OurClients from '../../components/OurClients';






const Home = () => {
    const events = useLoaderData();
    console.log("from home section", events);
    return (
        <div>
            <Helmet>
                <title>Shine Events</title>
            </Helmet>
            <Navbar></Navbar>
            
            

            <div className='lg:grid grid-cols-5 p-16 gap-8'>
                <div className="col-span-5 lg:flex lg:justify-center lg:items-center  md:col-span-3 bg-white mb-4">
                    <div className="mx-auto max-w-[43rem]">
                        <div className="text-center">
                            <p className="text-2xl font-medium  text-indigo-600/95">Crafting Unforgettable Moments</p>
                            <h1 className="mt-3 text-[3.5rem] font-bold leading-[4rem] tracking-tight text-black">Your Ultimate Event Management Destination!</h1>
                            <p className="mt-3 text-lg leading-relaxed text-slate-400">Turning Visions into Reality: Discover Your Perfect Event with Our Expert Event Management Services!</p>
                        </div>

                        <div className="mt-6 flex items-center justify-center gap-4">
                            <Link to="/services" className="transform rounded-md bg-indigo-600/95 px-5 py-3 font-medium text-white transition-colors hover:bg-indigo-700">Our Services</Link>
                            
                        </div>
                    </div>
                </div>

                <div className='hidden md:block md:col-span-2 min-h-full  justify-center'>
                    <SlideCard></SlideCard>
                   
                </div>
            </div>

            <div className='mt-12 container mx-auto'>
                <div className="mb-10">
                    <p className="text-6xl font-bold text-center">Our Services</p>
                    <div className="divider text-blue-600 text-xl">We provide best services in town</div>
                </div>
                <div className='grid lg:grid-cols-3 gap-2 md:grid-cols-2'>
                    {
                        events.slice(0,6)?.map(event => <Card event={event} key={event.id}></Card>)
                    }
                </div>

                <div className='text-center'>
                    <Link to="/services" className='btn mt-6 btn-primary '>Find More</Link>
                </div>
            </div>

            <div className='container mx-auto mt-40'>
                <OurOffers></OurOffers>
            </div>

            <div className='container mx-auto p-5'>
                <OurClients></OurClients>
            </div>
           
            
            
        </div>
    );
};

export default Home;