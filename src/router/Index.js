import React, { Suspense } from 'react'
import { BrowserRouter, useRoutes } from 'react-router-dom'
import { routes } from './routes';

const MyRoutes = () => {
    const elements = useRoutes(routes);
    return elements;
}

const Index = () => {
    return (
        <BrowserRouter>
            <Suspense>
                <MyRoutes />
            </Suspense>
        </BrowserRouter>
    )
}

export default Index