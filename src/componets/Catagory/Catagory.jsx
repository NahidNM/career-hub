import React from 'react';

const Catagory = (props) => {
    // console.log(props.catagory)
    const {logo, categoryName, jobsAvailable} = props.catagory;
    return (
        <div className='p-5 mx-auto my-5 bg-orange-200 rounded-md  drop-shadow-xl'>
                            <img className=' h-14 w-14' src={logo} alt="" />
                            <h1 className='text-xl'> {categoryName}</h1>
                            <p className='text-xs'>{jobsAvailable} Jobs Available</p>
                        </div>
    );
};

export default Catagory;