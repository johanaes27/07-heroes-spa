import { Navigate, Outlet, createBrowserRouter } from "react-router-dom";
import { Navbar } from "../../ui"
import { HeroesApp } from "../../HeroesApp";
import { DcPage, MarvelPage } from "../pages";


export const HeroesRoutes = () => {
  
  return (
    <>
        <Navbar />

       <div className="container">
        <Outlet />
        </div> 
    </>
  )
}

