import { Link } from "react-router-dom";
import AuthForm from "../components/AuthForm";

const SignUp = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <div className="max-w-md mx-auto rounded-lg bg-white px-6 py-10 shadow-lg">
                <h2 className="text-3xl font-extrabold text-center mb-6">회원가입</h2>

                <div className="rounded-lg bg-slate-100 p-6">
                    <AuthForm mode="signUp" />
                </div>

                <div className="mt-6 text-center">
                    이미 계정이 있으신가요?
                    <Link to="/sign-in" className="text-rose-500 ml-2">
                        로그인
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
