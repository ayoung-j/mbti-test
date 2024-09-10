import { Navigate, Outlet, useLocation } from "react-router-dom";
import useMbtiStore from "../zustand/mbtiStore";

const ProtectedRoute = () => {
    const { user } = useMbtiStore();
    const { pathName } = useLocation();

    if (!user) {
        alert("로그인이 필요합니다. 로그인 페이지로 이동합니다.");
        return <Navigate to="/sign-in" state={{ redirectedFrom: pathName }} />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
