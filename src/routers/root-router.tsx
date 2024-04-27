import { createBrowserRouter, Navigate } from 'react-router-dom';
import DashboardInboxPage from '../pages/DashboardInboxPage/DashboardInboxPage';
import LandingPage from '../pages/LandingPage/LandingPage';
import DashboardSpamPage from '../pages/DashboardSpamPage/DashboardSpamPage';
import DashboardStarredPage from '../pages/DashboardStarredPage/DashboardStarredPage';
import DashboardTrashPage from '../pages/DashboardTrashPage/DashboardTrashPage';
import DashboardDraftsPage from '../pages/DashboardDraftsPage/DashboardDraftsPage';

export const rootRouter = createBrowserRouter([
  { path: '/', element: <LandingPage /> },

  { path: '/dashboard/inbox', element: <DashboardInboxPage /> },
  { path: '/dashboard/spam', element: <DashboardSpamPage /> },
  { path: '/dashboard/starred', element: <DashboardStarredPage /> },
  { path: '/dashboard/trash', element: <DashboardTrashPage /> },
  { path: '/dashboard/drafts', element: <DashboardDraftsPage /> },

  { path: '*', element: <Navigate to="/dashboard/inbox" /> },
]);
