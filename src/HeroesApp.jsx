import { Outlet } from 'react-router-dom';
import { Navbar } from './ui/components/Navbar';
import { AuthProvider } from './auth/context/AuthProvider';

// import { AppRouter } from "./router/AppRouter";

 
export const HeroesApp = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <AppRouter /> */}
    </>
  );
};

