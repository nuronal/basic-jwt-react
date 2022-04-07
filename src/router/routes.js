import React from "react"

const Home = React.lazy(() => import('../pages/Home'))
const Login = React.lazy(() => import('../pages/Login'))
export const routes = [
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/',
        element: <Home />
    }
]