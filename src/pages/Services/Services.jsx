import React from 'react';
import Navbar from '../../SharedComponents/Navbar';
import { useLoaderData } from 'react-router-dom';
import Card from '../../components/Card';
import { Helmet } from 'react-helmet-async';

const Services = () => {
    const events = useLoaderData();
    
    return (
        <div className='container mx-auto'>
            <Helmet>
                <title>Shine events | Services</title>
            </Helmet>
            <Navbar></Navbar>
            <div className='grid lg:grid-cols-3 gap-3 mt-10'>
                {
                    events.map(event => <Card key={event.id} event={event}></Card>)
                }
            </div>
            
        </div>
    );
};

export default Services;