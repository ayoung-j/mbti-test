import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import ProtectedRoute from "./ProtectedRoute";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Profile from "../pages/Profile";
import TestPage from "../pages/TestPage";
import TestResultPage from "../pages/TestResultPage";

const Routes = () => {
    const isSignIn = true;

    // 공용 라우트
    const publicRoutes = [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/test",
            element: <TestPage />,
        },
        {
            path: "/result",
            element: <TestResultPage />,
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
                ...routesForNotAuthenticatedOnly,
                notFound,
            ],
        },
    ]);

    return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;
