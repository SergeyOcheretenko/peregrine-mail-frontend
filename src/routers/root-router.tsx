import { createBrowserRouter } from 'react-router-dom';
import DashboardInboxPage from '../pages/DashboardInboxPage/DashboardInboxPage';
import LandingPage from '../pages/LandingPage/LandingPage';

export const rootRouter = createBrowserRouter([
  { path: '/', element: <LandingPage /> },
  { path: '/dashboard/inbox', element: <DashboardInboxPage /> },
]);
