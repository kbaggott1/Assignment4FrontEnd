import React from "react";
import './MainLayout.css'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../navigationbar/NavBar';



export function MainLayout() {
    return (
        <>
        <div className="navigationBar">
            <NavBar/>
        </div>
        <div className="mainContent">
            <Outlet/>
        </div>
        </>

    )
}