import React, { Suspense, useEffect, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import MyNavbar from '../15_browserRouter/MyNavbar';
import Loader from './Loder';
import Footer from './Footer';
import ScrollToTop from '../16_createBrowserRouter/ScrollToTop';

const Layout = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500); // Adjust delay if needed
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-300 via-yellow-900 to-red-400 text-white relative">
      <MyNavbar />
      <ScrollToTop />

      {loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 transition-opacity duration-300">
          <Loader />
        </div>
      )}

      <Suspense fallback={<></>}>
        <Outlet />
      </Suspense>

      <Footer />
    </div>
  );
};

export default Layout;
