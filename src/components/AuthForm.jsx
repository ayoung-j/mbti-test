import { useState } from "react";
import useMbtiStore from "../zustand/mbtiStore";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const INITIAL_STATE = {
    id: "",
    password: "",
    nickname: "",
};

const AuthForm = ({ mode, nickname: initialNickname }) => {
    const [formData, setFormData] = useState(INITIAL_STATE);
    const { signUp, signIn, updateNickname } = useMbtiStore();
    const navigate = useNavigate();

    useEffect(() => {
        // 프로필 모드일 때만 초기값 설정
        if (mode === "profile") {
            setFormData((prev) => ({ ...prev, nickname: initialNickname }));
        }
    }, [mode, initialNickname]);

    // input 입력
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // 제출
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (mode === "signUp") {
            // 회원가입
            if (!formData.id || !formData.password || !formData.nickname) {
                alert("아이디, 비밀번호, 닉네임을 모두 입력해 주세요.");
                return;
            }

            await signUp(formData);
            alert("회원가입이 완료되었습니다.");
            navigate("/sign-in");
        } else if (mode === "profile") {
            // 닉네임
            if (!formData.nickname) {
                alert("닉네임을 입력해 주세요.");
                return;
            }
            await updateNickname(formData.nickname);
            alert("닉네임이 변경되었습니다.");
        } else {
            // 로그인
            if (!formData.id || !formData.password) {
                alert("아이디, 비밀번호를 모두 입력해 주세요.");
                return;
            }
            await signIn(formData);
            navigate("/");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="grid gap-3">
            {mode !== "profile" && (
                <>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="id"
                        value={formData.id}
                        placeholder="아이디"
                        required
                        className="w-full border rounded-lg px-4 py-3"
                    />
                    <input
                        onChange={handleChange}
                        type="password"
                        name="password"
                        value={formData.password}
                        placeholder="비밀번호"
                        required
                        className="w-full border rounded-lg px-4 py-3"
                    />
                </>
            )}

            {mode === "signUp" && (
                <input
                    onChange={handleChange}
                    type="text"
                    name="nickname"
                    value={formData.nickname}
                    placeholder="닉네임"
                    required
                    className="w-full border rounded-lg px-4 py-3"
                />
            )}

            {mode === "profile" && (
                <div>
                    <div className="text-sm font-semibold mb-1">닉네임</div>
                    <input
                        onChange={handleChange}
                        type="text"
                        name="nickname"
                        value={formData.nickname}
                        placeholder="닉네임"
                        required
                        className="w-full border rounded-lg px-4 py-3"
                    />
                </div>
            )}

            <button
                type="submit"
                className="inline-block rounded-lg text-white bg-rose-500 hover:bg-rose-700 px-4 py-3 transition-colors duration-300">
                {mode === "signUp" ? "회원가입" : mode === "profile" ? "수정" : "로그인"}
            </button>
        </form>
    );
};

export default AuthForm;
