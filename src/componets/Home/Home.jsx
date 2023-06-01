import React, { useEffect, useState } from 'react';
import person from '../../../public/img/P3OLGJ1 copy 1.png'
import Catagory from '../Catagory/Catagory';
import Jobs from '../Jobs/Jobs';
import { useLoaderData } from 'react-router-dom';
const Home = () => {
    
    // see all jobs button state
    const [showAll, setShowAll] = useState(false)
    const display =() => {
        setShowAll(true)
    }
    
    const hide = () => {
        setShowAll(false)
    }
    
    const jobs = useLoaderData();
    // console.log(jobs);
    
    const [catagorys, setCatagorys] = useState([]);
    
    useEffect(()=>{
        fetch('Catagory.json')
        .then(res =>res.json())
        .then(data => setCatagorys(data))
    },[]);
    // console.log(catagorys)
    return (
        <div>
            <section className='flex items-center content-center justify-between mx-2 mt-10 md:mx-auto md:w-3/4'>
        <div className='w-80'>
            <h3 className='text-3xl font-bold tracking-wider md:text-5xl'>One Step <br />Closer To Your <br /><span className='text-blue-500'>Dream Job</span></h3>
            <p className='my-2 text-xs'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <button className='px-3 py-1 text-white bg-blue-600 rounded-md'>Get Started</button>
        </div>
        <div>
            <img className='h-80 w-80' src={person} alt="" />
        </div>
        </section>
        
        {/* Job Category Section */}
        <section className='my-20'>
           <div className='text-center'>
            <h2 className='text-3xl font-bold'>Featured Jobs</h2>
            <p className='text-xs'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div> 
            <div className='grid grid-cols-2 mt-8 md:w-3/4 md:grid-cols-4 md:mx-auto'>
                {
                    catagorys.map(catagory => 
                        <Catagory catagory={catagory} key={catagory.id}></Catagory>
                    )
                }
             </div>
        </section>
        
        {/* Featured Jobs */}
        <section>
        <div className='text-center'>
            <h2 className='text-3xl font-bold'>Job Category List</h2>
            <p className='text-xs'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div> 
            <div className='grid mt-10 md:grid-cols-2 md:mx-10'>
               {
                jobs?.slice(0, showAll ? jobs.length:4).map((job) =>
                    <Jobs job={job} key={job.jobId
                    }></Jobs>
                    )
               }
            </div>
        </section>
        
        <div className='flex justify-around pt-8'>
            {
                !showAll && <button onClick={display} className='px-4 py-2 my-5 text-white bg-blue-600 rounded-md hover:bg-stone-500'>See All Jobs</button>
            }
            {
                showAll && <button onClick={hide} className='px-4 py-2 my-5 text-white bg-blue-600 rounded-md hover:bg-stone-500'>See less</button>
            }
            
            
        </div>
        </div>
    );
};

export default Home;