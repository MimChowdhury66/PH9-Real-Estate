import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData, useParams } from 'react-router-dom';
import 'animate.css';

const PropertyDetails = () => {
    const properties = useLoaderData();
    // console.log(properties);
    const { id } = useParams();
    const propertyIdInt = parseInt(id);
    const property = properties.find(property => property.id === propertyIdInt);
    // console.log(property);
    return (
        <div>
            <Helmet>
                <title>Property Portal | Property Details</title>
            </Helmet>

            <section>
                <img src={property.image} alt="" className="lg:w-full lg:h-[400px] md:w-full md:h-[300px] mx-auto mb-5 mt-5 dark:bg-gray-500 rounded-lg shadow-md lg:mt-10" />
                <div className="dark:bg-default-600 ">
                    <div className="container flex flex-col items-center px-4 py-5 pb-4 mx-auto text-center lg:pb-5 md:py-5 md:px-10 lg:px-32 dark:text-gray-50">
                        <div className='flex'>
                            <h1 className="text-xl lg:text-4xl font-bold leading-none sm:text-xl xl:max-w-3xl dark:text-gray-50 animate__animated animate__backInDown">{property.estate_title} </h1>
                            <div className="badge badge-primary p-3">{property.type}</div>
                        </div>
                        <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl dark:text-gray-50">{property.description} </p>
                        <div className="flex flex-wrap justify-center">

                        </div>
                    </div>
                </div>

            </section>
            <section className="dark:bg-gray-100 dark:text-gray-800">
                <div className="container flex flex-col justify-center px-4 py-4 mx-auto md:p-4">

                    <div className="divide-y dark:divide-gray-300">
                        <div className="py-4 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                            <h3 className="font-semibold md:col-span-5">Segment</h3>
                            <p className="md:pl-0 md:col-span-7">{property.segment_name}</p>
                        </div>
                        <div className="py-4 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                            <h3 className="font-semibold md:col-span-5">Facilities</h3>
                            <p className="md:pl-0 md:col-span-7">  {property.facilities.map((facility, idx) => <span key={idx}> <ul className="list-disc ml-6"> <li>{facility}</li> </ul></span>)} </p>
                        </div>
                        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                            <h3 className="font-semibold md:col-span-5">Location</h3>
                            <p className="md:pl-0 md:col-span-7">{property.location}</p>
                        </div>
                        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                            <h3 className="font-semibold md:col-span-5">Status</h3>
                            <p className="md:pl-0 md:col-span-7">{property.status}</p>
                        </div>
                        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                            <h3 className="font-semibold md:col-span-5">Area</h3>
                            <p className="md:pl-0 md:col-span-7">{property.area}</p>
                        </div>
                        <div className="py-6 space-y-2 md:grid md:grid-cols-12 md:gap-8 md:space-y-0">
                            <h3 className="font-semibold md:col-span-5">Price</h3>
                            <p className="md:pl-0 md:col-span-7">{property.price}</p>
                        </div>
                    </div>
                </div>
            </section>
            <div className='flex justify-center '>
                <button className="btn btn-outline  w-1/2">Confirm</button>

            </div>
        </div>
    );
};

export default PropertyDetails;