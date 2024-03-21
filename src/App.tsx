import { lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/error-page'
import Root from './routes/root'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            { path: 'order', Component: lazy(() => import('./routes/order')) },
            {
                path: 'order/:orderId/confirmation',
                Component: lazy(() => import('./routes/order-confirmation')),
            },
        ],
    },
    {
        path: 'login',
        Component: lazy(() => import('./routes/login')),
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
