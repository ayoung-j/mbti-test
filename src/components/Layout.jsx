import { Link, Outlet, useNavigate } from "react-router-dom";
import useAuthStore from "../zustand/authStore";

const Layout = () => {
    const { signOut, user } = useAuthStore();
    const navigate = useNavigate();

    const hanbleSignOut = () => {
        const confirmSignOut = confirm("정말로 로그아웃 하시겠습니까?");
        if (confirmSignOut) {
            signOut();
            navigate("/");
        }
    };

    return (
        <>
            <header className="sticky top-0 z-40 py-4 border-b backdrop-blur bg-white transition-colors duration-500">
                <div className="container mx-auto px-4">
                    <div className="flex items-center font-semibold text-slate-600">
                        <Link to="/" className="hover:text-sky-500">
                            Home
                        </Link>
                        <div className="relative flex items-center ml-auto">
                            <nav>
                                <ul className="flex space-x-8">
                                    {user ? (
                                        <>
                                            <li>
                                                <Link to="/test" className="hover:text-sky-500">
                                                    테스트
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/results" className="hover:text-sky-500">
                                                    결과보기
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/profile" className="hover:text-sky-500">
                                                    프로필
                                                </Link>
                                            </li>
                                            <li>
                                                <button onClick={hanbleSignOut} className="hover:text-sky-500">
                                                    로그아웃
                                                </button>
                                            </li>
                                        </>
                                    ) : (
                                        <>
                                            <li>
                                                <Link to="/sign-up" className="hover:text-sky-500">
                                                    회원가입
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/sign-in" className="hover:text-sky-500">
                                                    로그인
                                                </Link>
                                            </li>
                                        </>
                                    )}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <main id="contents">
                <Outlet />
            </main>
            <footer className="py-4 bg-slate-300">
                <div className="container mx-auto px-4">
                    <p className="text-xs text-center">ⓒ 2024. JoAyoung All rights reserved.</p>
                </div>
            </footer>
        </>
    );
};

export default Layout;
