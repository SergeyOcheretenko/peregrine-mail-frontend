import { RouterProvider } from 'react-router-dom';
import { rootRouter } from './routers/root-router';

export default function App(): JSX.Element {
  return (
    <>
      <RouterProvider router={rootRouter} />
    </>
  );
}
