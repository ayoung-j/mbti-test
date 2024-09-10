import { useEffect } from "react";
import useAuthStore from "../zustand/authStore";
import useMbtiStore from "../zustand/mbtiStore";
import TestResultItem from "./TestResultItem";

const TestResultList = () => {
    const { user } = useAuthStore();
    const { results, getTestResults } = useMbtiStore();

    useEffect(() => {
        getTestResults();
    }, [getTestResults]);

    return (
        <div className="space-y-4">
            {results
                .filter((result) => result.visibility || result.userId === user.id)
                .map((result) => (
                    <TestResultItem
                        key={result.id}
                        result={result}
                        user={user}
                        onUpdate={getTestResults}
                        onDelete={getTestResults}
                    />
                ))}
        </div>
    );
};

export default TestResultList;
