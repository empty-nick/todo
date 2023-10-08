import { Navigate, RouteObject } from "react-router-dom";
import { Home } from "./Home/Home.tsx";
import { Error } from "./Error/Error.tsx";
import Weather from "./Weather/Weather.tsx";

export const routes: RouteObject[] = [
	{ path: '/', element: <Navigate to='/home' /> },
	{ path: '/home', element: <Home /> },
	{ path: '/weather', element: <Weather /> },
	{ path: '*', element: <Error /> }
]