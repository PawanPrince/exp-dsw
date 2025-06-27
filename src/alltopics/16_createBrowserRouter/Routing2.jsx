import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Home from '../../pages/Home';
// import Layout from './Layout';
// import About from '../../pages/About';
// import Signup from '../../pages/Signup';
// import NotFound from '../../pages/NotFound';
// import Contact from '../../pages/Contact';
import { lazy } from 'react';
// import ExploreDilse from './ExploreDilse';
const Home = lazy(() => import('../../pages/Home'));
const About = lazy(() => import('../../pages/About'));
const Contact = lazy(() => import('../../pages/Contact'));
const Signup = lazy(() => import('../../pages/Signup'));
const Layout = lazy(() => import('../16_createBrowserRouter/Layout'));
const NotFound = lazy(() => import('../../pages/NotFound'));
const ExploreDilse = lazy(() => import('./ExploreDilse'));
const Founder = lazy(() => import('../../pages/Founder'));
const Youtube = lazy(() => import('../../pages/Youtube'));
const PrivacyPolicy = lazy(() => import('../../pages/PrivacyPolicy'));
const CookiePolicy = lazy(() => import('../../pages/CookiePolicy'));
const TermsOfService = lazy(() => import('../../pages/TermsOfService'));
const ExploreMoreFilms = lazy(() => import('../../pages/ExploreMoreFilms'));
const BookNow = lazy(() => import('../../pages/BookNow'));












let myRoutes = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [

            {
                path: '/',
                index: true, // This will render Home component when the path is exactly '/'
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '*',
                element: <NotFound />
            },
            {
                path: 'exploredilse',
                element: <ExploreDilse />
            },
            {
                path: 'founder',
                element: <Founder />
            },
            {
                path: '/youtube',
                element: <Youtube />
            },
            {
                path: '/privacy',
                element: <PrivacyPolicy />,
            },
            {
                path: '/terms',
                element: <TermsOfService />,
            },
            {
                path: '/cookies',
                element: <CookiePolicy />,
            },
            {
                path: '/explorefilms',
                element: <ExploreMoreFilms />,
            },
            {
                path: '/booknow',
                element: <BookNow />
            },




        ],
    },

]);



const Routing2 = () => {
    return (
        <div>
            <RouterProvider router={myRoutes}>

            </RouterProvider>
        </div>
    );
};

export default Routing2