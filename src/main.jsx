import { createRoot } from 'react-dom/client';
import "./global.css";

// const div = document.getElementById("root");

// createRoot(div).render(

//   <div>
//     <h1>Hello world</h1>
//     <h2>Java Script</h2>
//   </div> );

import App from "./App"; 

// createRoot(div).render(<App></App>);
const div = document.getElementById("root");
createRoot(div).render(<App/>);