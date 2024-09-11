import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import useAuthStore from "../zustand/authStore";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import TestPage from "../pages/TestPage";
import TestResultPage from "../pages/TestResultPage";

const Routes = () => {
    const { user } = useAuthStore();
    const isSignIn = user ? true : false;

    // 공용 라우트
    const publicRoutes = [
        {
            path: "/",
            element: <Home />,
        },
    ];

    // 로그인하지 않은 사용자
    const routesForNotAuthenticatedOnly = [
        {
            path: "/sign-in",
            element: <SignIn />,
        },
        {
            path: "/sign-up",
            element: <SignUp />,
        },
    ];

    // 로그인한 사용자
    const routesForAuthenticatedOnly = [
        {
            path: "",
            element: <ProtectedRoute />,
            children: [
                {
                    path: "/profile",
                    element: <Profile />,
                },
                {
                    path: "/test",
                    element: <TestPage />,
                },
                {
                    path: "/results",
                    element: <TestResultPage />,
                },
            ],
        },
    ];

    const notFound = {
        path: "*",
        element: <Navigate to="/" />,
    };

    const router = createBrowserRouter([
        {
            path: "",
            element: <Layout />,
            children: [
                ...publicRoutes,
                ...(isSignIn ? routesForAuthenticatedOnly : []),
                ...(!isSignIn ? routesForNotAuthenticatedOnly : []),
                notFound,
            ],
        },
    ]);

    return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
