import React from "react";
import './MainLayout.css'
import { Outlet } from 'react-router-dom'
import { NavBar } from '../navigationbar/NavBar';


/**
 * A component that contains the layout for the react app.
 */
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