import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import MyNavbar from '../15_browserRouter/MyNavbar';
import Loader from './Loder';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-300 via-yellow-900 to-red-400 text-white relative">
      <MyNavbar />

      <Suspense
        fallback={
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
            <Loader />
          </div>
        }
      >
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

export default Layout;
