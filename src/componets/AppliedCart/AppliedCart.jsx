import React from 'react';
import { CurrencyDollarIcon,  MapPinIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const AppliedCart = (props) => {
   const {jobId,companyName, imageLink, jobType, jobTime,  jobTitle,  salary, jobLocation} =props.applied;
   
    return (
        <div className='flex items-center p-4'>
            <div className='flex items-center w-full space-x-2'>
           <img  className='w-14 h-14 md:h-36 md:w-36' src={imageLink} alt="" />
           
           <div className='flex justify-between gap-5 '>
            
            <div className='flex items-center justify-between pb-2 md:space-x-28'>
                <div className='flex-col space-y-1 md:flex-row'>
                <h3 className='text-xl font-semibold'>
                {jobTitle}
              </h3> 
              <p className='text-xl'>{companyName}</p>
              
              <div className='space-x-2 md:gap-4'>
                <button className='px-3 py-1 text-indigo-600 border border-indigo-600 rounded-md md:my-5 hover:bg-red-400 bg-slate-50 '>{jobType}</button>
                <button className='px-3 py-1 my-5 text-indigo-600 border border-indigo-600 rounded-md hover:bg-red-400 bg-slate-50'>{jobTime}</button>
            </div>
              
              <div className='flex items-center gap-3 text-sm text-slate-500'>
                <div className='inline-flex items-center gap-1 '>
                <MapPinIcon className="w-5 h-5 text-blue-500 " />
                <p>{jobLocation}</p>
                </div>
               <div className='inline-flex items-center gap-1'>
               <CurrencyDollarIcon className="w-5 h-5 text-blue-500" />
               <p> {salary}</p>
               </div>
            </div>
                </div>
                <div className='text-sm '>
                    <Link to={`/details/${jobId}`}><button className='w-full px-1 py-1 text-white bg-blue-600 rounded-md md:py-2 md:px-4 hover:bg-stone-500'>View Details</button></Link>
                </div>
            </div>
            
            
           </div>
           </div>
           
        </div>
        
    );
};

export default AppliedCart;