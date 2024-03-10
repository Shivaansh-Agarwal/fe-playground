import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayout } from '../layouts/root';
import { ErrorPage } from '../pages/error-page';
import { ROUTES } from './utils.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: ROUTES,
  },
]);

export const Routes = () => {
  return <RouterProvider router={router} />;
};
