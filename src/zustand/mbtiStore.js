import { create } from "zustand";
import { register, signIn, updateNickname, getUser } from "../api/auth";

const useMbtiStore = create((set) => ({
    user: null,
    userInfo: null,
    token: localStorage.getItem("token") || null,

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
            const data = await getUser(token);
            set({ userInfo: data });
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

export default useMbtiStore;
