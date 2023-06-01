import React from 'react';
import Header from './componets/Header/Header';
import Footer from './componets/Footer/Footer';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Header></Header>
      <div className='md:min-h-[calc(100vh-300px)]'>
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;<h1>App</h1>