import { create } from "zustand";
import { register, signIn, updateNickname, getUser } from "../api/auth";

const useAuthStore = create((set) => ({
    user: null,
    userInfo: null,
    token: localStorage.getItem("token") || null,

    // 로그인 상태 유지
    initializeAuth: async () => {
        // 토큰 유효성 검사
        const token = localStorage.getItem("token");

        if (token) {
            try {
                const userData = await getUser(token);
                set({ user: userData });
                console.log(userData);
            } catch (error) {
                console.error("토큰 검증 실패:", error);
                localStorage.removeItem("token"); // 토큰이 유효하지 않으면 삭제
                set({ token: null, user: null }); // 상태 초기화
            }
        }
    },

    // 회원가입
    signUp: async (userData) => {
        try {
            const data = await register(userData);
            set({ user: { userId: data.userId, nickname: data.nickname } });
        } catch (error) {
            console.error("회원가입 오류:", error.response?.data || error.message);
        }
    },

    // 로그인
    signIn: async (userData) => {
        try {
            const data = await signIn(userData);
            localStorage.setItem("token", data.accessToken);
            set({ user: { userId: data.userId, password: data.password }, token: data.accessToken });
        } catch (error) {
            console.error("로그인 오류:", error.response?.data || error.message);
        }
    },

    // 로그아웃
    signOut: () => {
        localStorage.removeItem("token");
        set({ user: null, token: null });
    },

    // 회원정보 확인
    getUser: async () => {
        const token = localStorage.getItem("token");
        try {
            const userData = await getUser(token);
            set({ userInfo: userData });
        } catch (error) {
            console.error("회원정보 확인 오류: ", error.response?.data || error.message);
        }
    },

    // 닉네임 업데이트
    updateNickname: async (nickname) => {
        const token = localStorage.getItem("token");
        try {
            const updateNicknameData = await updateNickname(token, nickname);

            set((state) => ({
                user: {
                    ...state.user,
                    nickname: updateNicknameData.nickname,
                },
            }));
        } catch (error) {
            console.error("닉네임 업데이트 오류: ", error.response?.data || error.message);
        }
    },
}));

export default useAuthStore;
