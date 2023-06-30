import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from './Navbar'

import "./style.css"
import Navbar1 from "./Navbar1";

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        {/* <Navbar/> */}
        <Navbar1/>
    </React.StrictMode>
)