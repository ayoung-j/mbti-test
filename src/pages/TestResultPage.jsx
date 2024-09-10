import TestResultList from "../components/TestResultList";

const TestResult = () => {
    return (
        <div className="container mx-auto px-4 py-10">
            <div className="rounded-lg bg-white px-6 py-10 shadow-lg">
                <h2 className="text-3xl font-extrabold text-center mb-6">모든 테스트 결과</h2>
                <TestResultList />
            </div>
        </div>
    );
};

export default TestResult;
