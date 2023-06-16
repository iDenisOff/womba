import { RouterProvider } from 'react-router-dom';

import router from '../Router';

const Root = () => {
    return <RouterProvider router={router} />;
};

export default Root;
