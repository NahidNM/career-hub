import React, { useState } from 'react';
// import { getStoredCart } from '../../Utilitis/fakeDB';
import { Link, useLoaderData } from 'react-router-dom';
import AppliedCart from '../AppliedCart/AppliedCart';
import { deleteShoppingCart } from '../../Utilitis/fakeDB';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const Applied = () => {

    // const jobData = useLoaderData();
    // const savedCart = getStoredCart()
    // let cart = []
    // for(const id in savedCart){
    //     const foundJobData = jobData.find(job => job.jobId === id)
    //     if(foundJobData){
    //         cart.push(foundJobData)
    //     }
    // }

    const { cartArray } = useLoaderData()
    // console.log(cartArray)
    
    const [ dataLoad, setDataLoad] = useState(cartArray)
    
    const onsite = (cartArray) => {
        const onsiteJob = cartArray.filter((job) => job.jobType === "Onsite")
        setDataLoad(onsiteJob);
        //  console.log(onsiteJob)
    }
    
    const remote = (cartArray) => {
        const remoteJob = cartArray.filter((job) => job.jobType === "Remote")
        setDataLoad(remoteJob);
        //  console.log(remoteJob)
    }
    // console.log(dataLoad)
    
    const handleDeleteItem = () => {
        setDataLoad([])
        deleteShoppingCart()
        return toast('🦄 all cart remove!',{
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
    
        return (
        <div className='flex items-start justify-center my-1 text-gray-900 bg-gray-1000'>
           <div className='flex flex-col space-y-4'>
           
           <div className='flex items-center justify-between'>
           <h2 className='ml-2 text-2xl font-semibold md:mt-10'>{cartArray.length ? 'Appied jobs items' : 'Appied jobs Empty'}</h2>
           
            <div className='flex items-center mx-5 mt-10 space-x-2'>
                
                         <div>
                        <button onClick={()=> onsite(cartArray)}  className='px-3 py-1 text-indigo-600 border border-indigo-600 rounded-md md:my-5 hover:bg-red-400 bg-slate-50 '>Onsite</button>
                        </div>
                   
                       <div>
                       <button onClick={()=> remote(cartArray)} className='px-3 py-1 my-5 text-indigo-600 border border-indigo-600 rounded-md hover:bg-red-400 bg-slate-50'>remote</button>
                       </div> 
                     
            </div>
           </div>
            
            
            <div className='divide-y divide-gray-700'>
                {
                  dataLoad.map( appliedJob => <AppliedCart
                  key = {appliedJob.jobId} 
                  applied={appliedJob}
                  ></AppliedCart>
                  )
                }
            </div>
            
            <div className='mx-auto mb-10'>
            {
              dataLoad.length>0 ? <button onClick={handleDeleteItem} className='px-4 py-2 mb-10 text-white bg-blue-600 rounded-md hover:bg-stone-500'>clear cart</button>
             
               : 
              <Link to="/"><button className='px-4 py-2 mb-10 text-white bg-blue-600 rounded-md hover:bg-stone-500'>back to home</button></Link>  
            }
           </div>
            </div> 
           <ToastContainer/>
        </div>
    );
};

export default Applied;