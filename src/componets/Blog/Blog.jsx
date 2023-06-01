import React from 'react';

const Blog = () => {
    return (
        <div className='p-5 my-10 space-y-3 bg-cyan-200'>
           <div className='p-3 my-4 rounded-md bg-slate-200'>
           <h1 className='my-2 text-xl font-semibold'>1. When should you use context API?</h1>
           <div className='pl-3'>
           <p>> Context API is a feature in React that allows you to share data between components without having to pass props down through every level of the component tree.</p>
            <p>> While Sharing data or state across multiple components that are not directly related in the component tree</p>
          <p>> While Providing a global event system for triggering actions or handling events.</p>
          <p>> To managing application-wide settings, such as theme preferences or user authentication data.</p>
          <p>> To dynamically modifying the behavior or appearance of components based on application-wide state.</p>
          <p>> For managing state for forms or other data entry components.</p>
           </div>
           </div>

           <div className='p-3 my-4 rounded-md bg-slate-200'>
            <h1 className='my-2 text-xl font-semibold'>2. What is a custom hook?</h1>
            <p className='pl-3'>custom hook is a function that uses the built-in React hooks to encapsulate and reuse stateful logic in a composable way as like useEffect. Custom hooks allow us to remove complex or repetitive logic from your components and reuse it in react application.</p>
           </div>

           <div className='p-3 my-4 rounded-md bg-slate-200'>
            <h1 className='my-2 text-xl font-semibold'>3.  What is useRef?</h1>
            <p className='pl-3'>useRef() is a hook that provides a way to store and access mutable values that are related to a particular component instance. The useRef() hook returns a mutable object with a current property that can be set and read during the lifetime of the component.</p>
           </div>

           <div className='p-3 my-4 rounded-md bg-slate-200'>
            <h1 className='my-2 text-xl font-semibold'>4. What is useMemo?</h1>
           <p className='pl-3'>useMemo() is a hook that allows you to memoize large computations so that they are only re-computed when their dependencies have changed. Memoization is a technique for optimizing functions by caching their results based on their input parameters. By using useMemo() we can avoid unnecessary re-computations and improve the performance of react application.</p>
           </div>
        </div>
    );
};

export default Blog;