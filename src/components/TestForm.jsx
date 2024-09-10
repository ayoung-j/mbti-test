import { useState } from "react";
import { questions } from "../data/questions";

const TestForm = ({ onSubmit }) => {
    const [answers, setAnswers] = useState(Array(questions.length).fill(null));

    const handleChange = (index, answer) => {
        const newAnswers = [...answers];
        newAnswers[index] = answer;
        setAnswers(newAnswers);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(answers);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                {questions.map((q, index) => (
                    <div key={q.id} className="mb-4">
                        <p className="font-semibold">{q.question}</p>
                        {q.options.map((option, i) => (
                            <label key={i} className="block">
                                <input
                                    type="radio"
                                    name={`question-${index}`}
                                    value={option}
                                    checked={answers[index] === option}
                                    onChange={() => handleChange(index, option)}
                                    className="mr-2"
                                />
                                {option}
                            </label>
                        ))}
                    </div>
                ))}
                <button
                    type="submit"
                    className="w-full rounded-lg text-white bg-rose-500 hover:bg-rose-700 px-4 py-3 transition-colors duration-300">
                    제출하기
                </button>
            </form>
        </>
    );
};

export default TestForm;
