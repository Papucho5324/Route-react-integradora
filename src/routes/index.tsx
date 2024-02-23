import { lazy } from "react";
import { Route } from "react-router-dom";



export const renderRoutes = ()=>{
    return routes.map((route) => {
        const Component = route.element;
        return <Route path={route.path} element={<Component/>}/>;
    });
};

export const routes = [
    {
        path: "/",
        element: lazy(async ()=> await import("../pages/Home")),
    },
    {
        path: "/paquetes",
        element: lazy(async ()=> await import("../pages/Paquetes"))
    },
    {
        path: "/registrarse",
        element: lazy(async ()=> await import("../pages/Register"))
    },
]