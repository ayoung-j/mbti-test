import { useState } from "react";
import { Link } from "react-router-dom";
import { calculateMBTI } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import useAuthStore from "../zustand/authStore";
import { mbtiDescriptions } from "../zustand/mbtiStore";
import TestForm from "../components/TestForm";
import { useEffect } from "react";

const TestPage = () => {
    const { userInfo, getUser } = useAuthStore();
    const [result, setResult] = useState(null);
    const description = result ? mbtiDescriptions[result.result] : "MBTI 유형 설명을 찾을 수 없습니다.";

    useEffect(() => {
        getUser();
    }, [getUser]);

    const handleTestSubmit = async (answers) => {
        const result = calculateMBTI(answers);
        const resultData = {
            userId: userInfo.id,
            nickname: userInfo.nickname,
            result,
            answers,
            date: new Date().toISOString(),
            visibility: true,
        };
        await createTestResult(resultData);
        setResult(resultData);
    };

    return (
        <div className="container mx-auto px-4 py-10">
            {result ? (
                <div className="max-w-md mx-auto rounded-lg bg-white px-6 py-10 shadow-lg">
                    <h2 className="text-3xl font-extrabold text-center mb-6">{result.result}</h2>

                    <div className="rounded-lg bg-slate-100 p-6">
                        <p className="text-center">{description}</p>
                        <div className="mt-6">
                            <Link
                                to="/results"
                                className="block w-full rounded-lg text-center text-white bg-rose-500 hover:bg-rose-700 px-4 py-3 transition-colors duration-300">
                                모든 결과 페이지로 이동
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="max-w-md mx-auto rounded-lg bg-white px-6 py-10 shadow-lg">
                    <h2 className="text-3xl font-extrabold text-center mb-6">MBTI 테스트</h2>

                    <div className="rounded-lg bg-slate-100 p-6">
                        <TestForm onSubmit={handleTestSubmit} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default TestPage;
