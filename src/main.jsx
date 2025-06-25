import { createRoot } from 'react-dom/client';
import "./global.css";
import React, { Suspense } from 'react';
import App from "./App";
import Loader from './alltopics/16_createBrowserRouter/Loder'; // ✅ adjust the path if needed

const div = document.getElementById("root");

createRoot(div).render(
  <Suspense
    fallback={
      <div className="fixed inset-0 flex items-center justify-center bg-black text-white z-50">
        <Loader />
      </div>
    }
  >
    <App />
  </Suspense>
);
