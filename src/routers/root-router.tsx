import { createBrowserRouter, Navigate } from 'react-router-dom';
import DashboardInboxPage from '../pages/DashboardInboxPage/DashboardInboxPage';
import LandingPage from '../pages/LandingPage/LandingPage';

export const rootRouter = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/dashboard/inbox', element: <DashboardInboxPage /> },
  { path: '*', element: <Navigate to="/dashboard/inbox" /> },
]);
