import { createBrowserRouter } from 'react-router-dom';
import MessagesPage from '../pages/MessagesPage/MessagesPage';

export const rootRouter = createBrowserRouter([
  { path: '/messages', element: <MessagesPage /> },
  { path: '*', element: <MessagesPage /> },
]);
