import { useEffect } from "react";
import AuthForm from "../components/AuthForm";
import useAuthStore from "../zustand/authStore";

const Profile = () => {
    const { userInfo, getUser } = useAuthStore();
    const nickname = userInfo?.nickname || "";

    useEffect(() => {
        getUser();
    }, [getUser]);

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="max-w-md mx-auto rounded-lg bg-white px-6 py-10 shadow-lg">
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-extrabold mb-3">프로필 수정</h2>
                </div>

                <div className="rounded-lg bg-slate-100 p-6">
                    <AuthForm mode="profile" nickname={nickname} />
                </div>

                <div className="mt-6 text-center">
                    <p className="text-rose-500"></p>
                </div>
            </div>
        </div>
    );
};

export default Profile;
