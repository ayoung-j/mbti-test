import { useNavigate } from "react-router-dom";
import useMbtiStore from "../zustand/mbtiStore";

const Home = () => {
    const { user } = useMbtiStore();
    const navigate = useNavigate();

    const goTest = () => {
        if (user) {
            navigate("/test");
        } else {
            alert("로그인이 필요합니다. 로그인 페이지로 이동합니다.");
            navigate("/sign-in");
        }
    };

    return (
        <div className="container mx-auto px-4 py-10">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-extrabold mb-3">무료 성격 테스트</h2>
                <p className="text-gray-600">자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.</p>
            </div>
            <div className="grid grid-cols-3 gap-3">
                <div className="rounded-lg bg-white p-6 shadow-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">성격 유형 검사</h3>
                    <p className="text-gray-600">
                        자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지 알아보세요.
                    </p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">성격 유형 이해</h3>
                    <p className="text-gray-600">다른 사람들이 어떻게 행동하는지 이해하는데 도움을 줄 수 있습니다.</p>
                </div>
                <div className="rounded-lg bg-white p-6 shadow-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">팀 평가</h3>
                    <p className="text-gray-600">
                        팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을 배워보세요.
                    </p>
                </div>
            </div>
            <div className="mt-16 flex justify-center">
                <button
                    onClick={goTest}
                    className="inline-block rounded-lg text-white bg-rose-500 hover:bg-rose-700 px-4 py-3 transition-colors duration-300">
                    내 성격 알아보러 가기
                </button>
            </div>
        </div>
    );
};

export default Home;
