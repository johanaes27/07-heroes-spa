import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { DcPage, HeroPage, MarvelPage, SearchPage } from '../pages';
import Particle from '../components/Particle';

export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />
        <div style={{width: '100%', height:'100%'}}>
        <div className="container"  >
        
  
            <Routes>
                <Route path="marvel" element={<MarvelPage />} />
                <Route path="dc" element={<DcPage />} />
                
                <Route path="search" element={<SearchPage />} />
                <Route path="hero/:id" element={<HeroPage />} />
                                

                <Route path="/*" element={<Navigate to="/marvel" />} />

            </Routes>
        </div>
        </div>


    </>
  )
}
