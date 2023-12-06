import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../../SharedComponents/Navbar';
import toast from 'react-hot-toast';

const LatestEvent = () => {
    const handleTicket = () => {
        toast.success('Ticket confirmed')
    }
    return (
        <div >
            <Helmet>
                <title>Shine Events | Event</title>
            </Helmet>
            <Navbar></Navbar>
            <div className='w-1/2 mx-auto mt-10 mb-10'>
                <div>
                    <p className='text-6xl font-bold'>Summer Music Festival</p>
                    <p className='text-3xl'>Only <span className='font-bold text-5xl'>15</span> days remaining</p>
                    
                </div>
                <button className='btn btn-primary mt-3' onClick={handleTicket}>Get your Ticket</button>
            </div>

            <div >
                <img className='w-2/4 mx-auto rounded-3xl' src="https://i.ibb.co/2hpwLLD/summer-music-festival.jpg" alt="" />
            </div>
        </div>
    );
};

export default LatestEvent;