import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const SignIn = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <div className="max-w-md mx-auto rounded-lg bg-white p-6 shadow-lg">
                <h2 className="text-3xl font-extrabold text-center mb-6">로그인</h2>

                <div className="rounded-lg bg-slate-100 p-6">
                    <AuthForm />
                </div>

                <div className="mt-6 text-center">
                    계정이 없으신가요?
                    <Link to="/sign-up" className="text-rose-500 ml-2">
                        회원가입
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
