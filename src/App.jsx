import { useEffect } from "react";
import Routes from "./routes/Routes";
import useAuthStore from "./zustand/authStore";

function App() {
    const initializeAuth = useAuthStore((state) => state.initializeAuth);

    useEffect(() => {
        initializeAuth();
    }, [initializeAuth]);

    return <Routes />;
}

export default App;
