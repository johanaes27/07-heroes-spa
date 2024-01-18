import {
    Navigate,
    RouterProvider,
    createBrowserRouter,
  } from 'react-router-dom';
  import { DcPage, HeroPage, MarvelPage, SearchPage } from '../heroes';
  import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes/routes/HeroesRoutes';
import { PrivateRouter } from './PrivateRouter';
import { PublicRoute } from './PublicRoute';
   const childrenHeroesRoutes = [
    {
      path: 'marvel',
      element: <MarvelPage />,
    },
    {
      path: 'dc',
      element: <DcPage />,
    },
    {
      path: 'search',
      element: <SearchPage />,
    },
    {
      path: 'hero/:id',
      element: <HeroPage />,
    },
    {
      path: '*',
      element: <Navigate to="/" replace />,
    },
  ]


  export const AppRouter = () => {
    const router = createBrowserRouter( [
      {
        path: 'login',
        element: <PublicRoute> <LoginPage /> </PublicRoute>,
      },
      {
        path: '/*',
        element: <PrivateRouter> <HeroesRoutes /> </PrivateRouter>,
        // element:  <HeroesRoutes />,
        children: childrenHeroesRoutes
      },
    ]);
   
    return <RouterProvider router={router} />
      
  };

