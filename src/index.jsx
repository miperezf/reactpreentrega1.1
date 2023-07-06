import React from "react";
import ReactDOM from "react-dom/client";
import Navbar1 from "./Navbar1";
import { ItemListContainer } from "./ItemListContainer";
import "./style.css"




const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Navbar1/> 
        <ItemListContainer greeting="Bienvenidos a mi tienda"/>
    </React.StrictMode>
)