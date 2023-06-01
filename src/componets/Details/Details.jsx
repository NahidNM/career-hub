import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { addToDb } from '../../Utilitis/fakeDB';
import { CurrencyDollarIcon, CalendarDaysIcon, EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Details = () => {
   const handleApply = id =>{
    addToDb(id);
    return toast('🦄 apply job added',{
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        })
    
   }
let { jobId } = useParams();

const [details, setDetails] = useState({})
// console.log(details)
useEffect (()=>{
    fetch('/jobs.json')
    .then(res=>res.json())
    .then(data =>setDetails(data.find(dt =>dt.jobId == jobId)))
},[])
// console.log(details.jobTitle)

    return (
        <div className='mt-5 mb-10 md:mb-20 md:mt-10'>
            <h1 className='text-2xl font-bold text-center'>Job Details</h1>
            
            <div className='grid gap-8 mx-2 mt-6 md:mt-20 md:mx-20 md:grid-cols-3'>
                <div className='p-5 bg-gray-200 rounded md:col-span-2'>
                    
                    <p className='mb-2'><span className='text-xl font-bold'>Job Description : </span>{details.jobDescription}</p>
                  
                       <p className='mb-2'><span className='text-xl font-bold'>Job Responsibility : </span>{details.jobResponsibilities}</p>
                
                    <p className='mb-2'><span className='text-xl font-bold'>Educational Requirements : <br/> </span>{details.educationalRequirements}</p>
                    
                   <p className='mb-2'><span className='text-xl font-bold'>Experiences : <br/> </span>{details.experienceNeeded}</p>
                </div>
                
                <div className='px-5 py-8 mx-auto rounded md:w-80 bg-orange-50' >
                    <h1 className='mb-4 text-xl font-bold'>Job Details</h1><hr/>
                    
                    <div className='inline-flex items-center gap-2'>
                    <CurrencyDollarIcon className="w-5 h-5 text-blue-500" />
                    <p className='my-2'><span className='font-bold'>Salary : </span>{details.salary} (per mount)</p>
                    </div>
                    
                    <div className='inline-flex items-center gap-2'>
                    <CalendarDaysIcon className="w-5 h-5 text-blue-500" /> 
                    <p ><span className='font-bold'>Job Title  : </span>{details.jobTitle} </p>
                    </div>
                    
                    <h1 className='my-4 text-xl font-bold'>Contact Information</h1><hr/>
                    
                   <div className='inline-flex items-center gap-2 mt-2'>
                   <PhoneIcon className="w-5 h-5 text-blue-500" />
                   <p ><span className='font-bold'>Phone : : </span>{details.contactPhoneNumber} </p>
                   </div>
                   
                    <div className='inline-flex items-center gap-2'>
                    <EnvelopeIcon className="w-5 h-5 text-blue-500" />
                    <p className='my-2'><span className='font-bold'>Email : </span>{details.contactEmail} </p>
                    </div>
                    
                    <div className='inline-flex items-center gap-2'>  
                    <MapPinIcon className="w-5 h-5 text-blue-500" />
                    <p ><span className='font-bold'>Address : </span>{details.jobLocation} </p>
                    </div>
                    
                    <button onClick={()=>handleApply(details.jobId)} className='w-full px-4 py-2 mt-10 text-white bg-blue-600 rounded-md hover:bg-stone-500'>Apply Now</button>
                </div>
            </div>
                
            <ToastContainer/> 
        </div>
    );
};

export default Details;