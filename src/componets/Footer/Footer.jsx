import React from 'react';
// import { CurrencyDollarIcon,  MapPinIcon } from '@heroicons/react/24/solid'
import iconImg from './../../../public/img/Group 9969.png'
const Footer = () => {
    return (
        <div className='grid grid-cols-2 gap-5 p-5 bg-black md:grid-cols-5'>
            <div className='space-y-4'>
                <h2 className='text-white '>GlobalJob</h2>
                <p className='text-xs text-slate-300'>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
               <img className='w-14 h14' src={iconImg} alt=""  />
            </div>
            <div className='space-y-4'>
                <h1 className='text-white '>Company</h1>
                <div className='space-y-2 text-xs text-slate-300'>
                <p>About Us</p>
                <p>Work</p>
                <p>Latest News</p>
                <p>Careers</p>
                </div>
            </div>
            <div className='space-y-4'>
                <h1 className='text-white '>Product</h1>
                <div className='space-y-2 text-xs text-slate-300'>
                    <p>Prototype</p>
                    <p>Plans & Pricing</p>
                    <p>Customers</p>
                    <p>Integrations</p>
                </div>
            </div>
            <div className='space-y-4'>
               <h1 className='text-white '>Support</h1>
               <div className='space-y-2 text-xs text-slate-300'>
                <p>Help Desk</p>
                <p>Sales</p>
                <p>Become a Partner</p>
                <p>Developers</p>
                </div> 
            </div>
            <div className='space-y-4'>
                <h1 className='text-white '>Contact</h1>
                <div className='space-y-2 text-xs text-slate-300'>
                    <p>524 Broadway , NYC</p>
                    <p>+1706-848-010</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;