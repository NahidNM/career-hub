import React from 'react';
import { Link } from 'react-router-dom';
import { CurrencyDollarIcon,  MapPinIcon } from '@heroicons/react/24/solid'

const Jobs = (props) => {
    const { jobId,companyName, imageLink,   jobTitle, jobType, jobTime, salary, jobLocation } = props.job;
    return (
        <div className='gap-5 px-6 py-3 mx-2 my-3 bg-gray-200 rounded-md md:w-4/5 md:mx-auto drop-shadow-xl'>
            <img className='w-40 h-36' src={imageLink} alt="" />
            <h1 className='text-3xl font-semibold tracking-wide'>{jobTitle}</h1>
            <h1 className='my-2 text-2xl'>{companyName}</h1>
            
            <div className='gap-4 space-x-2'>
                <button className='px-3 py-1 my-5 text-indigo-600 border border-indigo-600 rounded-md hover:bg-red-400 bg-slate-50 '>{jobType}</button>
                <button className='px-3 py-1 my-5 text-indigo-600 border border-indigo-600 rounded-md hover:bg-red-400 bg-slate-50'>{jobTime}</button>
            </div>
            
            <div className='flex items-center gap-5 text-sm'>
                <div className='inline-flex items-center gap-2'>
                <MapPinIcon className="w-5 h-5 text-blue-500 " />
                <p>{jobLocation}</p>
                </div>
               <div className='inline-flex items-center gap-2'>
               <CurrencyDollarIcon className="w-5 h-5 text-blue-500" />
               <p> {salary}</p>
               </div>
            </div>
            <button className='px-4 py-2 my-5 text-white bg-blue-600 rounded-md hover:bg-stone-500'><Link to={`/details/${jobId}`}>View Details</Link></button>
            
        </div>
    );
};

export default Jobs;