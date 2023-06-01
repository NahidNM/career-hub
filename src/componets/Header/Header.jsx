import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid'

const Header = () => {
    
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    return (
        <div className='flex items-center justify-between mx-4 mt-3 lg:mt-8 lg:mx-20'>
            <div>
                <h3 className='text-2xl font-bold md:text-4xl'>GlobalJobs</h3>
            </div>
            <ul className='items-center hidden md:text-xl lg:flex space-x-7 text-emerald-700'>
                <li>
                <NavLink to='/' className={({isActive})=>(isActive? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200 ': 'hover:text-green-500')}>Home</NavLink>
                </li>
                <li>
                <NavLink to="/statistics" className={({isActive})=>(isActive? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'hover:text-green-500')}>Statistics</NavLink>
                </li>
               <li>
               <NavLink to="/applied" className={({isActive})=>(isActive? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'hover:text-green-500')}>Applied Jobs</NavLink>
               </li>
               <li>
               <NavLink to="/blog" className={({isActive})=>(isActive? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'hover:text-green-500')}>Blog</NavLink>
               </li>
            </ul>
           
            {/* mobile menu */}
            <div className=' lg:hidden'>
              
            <button
            aria-label='Open Menu'
            title='Open Menu'
            className='p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50'
            onClick={() => setIsMenuOpen(true)}
          >
            <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
              <path
                fill='currentColor'
                d='M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z'
              />
              <path
                fill='currentColor'
                d='M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z'
              />
              <path
                fill='currentColor'
                d='M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z'
              />
            </svg>
          </button>
          
          {isMenuOpen && (
            <div className='absolute z-10'>
              <div className='p-2 border rounded shadow-sm'>
                <div className='flex items-center justify-between mb-2'>
                  <div>
                  <button
                      aria-label='Close Menu'
                      title='Close Menu'
                      className='p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline'
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <svg className='w-5 text-gray-600' viewBox='0 0 24 24'>
                        <path
                          fill='currentColor'
                          d='M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <nav>
                  <ul className='space-y-2 text-sm bg-white'>
                  <li>
                <NavLink to='/' className={({isActive})=>(isActive? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200 ': 'hover:text-green-500')}>Home</NavLink>
                </li>
                <li>
                <NavLink to="/statistics" className={({isActive})=>(isActive? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'hover:text-green-500')}>Statistics</NavLink>
                </li>
               <li>
               <NavLink to="/applied" className={({isActive})=>(isActive? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'hover:text-green-500')}>Applied Jobs</NavLink>
               </li>
               <li>
               <NavLink to="/blog" className={({isActive})=>(isActive? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'hover:text-green-500')}>Blog</NavLink>
               </li>
                  </ul>
                </nav>
                
                </div>  
            </div>
          )}
            </div>
            
            <div>
                <NavLink to='/applied'><button className='w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-stone-500'>Start Applying</button></NavLink>
                
            </div>
        </div>
    );
};

export default Header;