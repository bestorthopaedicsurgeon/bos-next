import { useState } from "react";

export default function QuestionReview({ className }) {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      title: "Robotic vs traditional knee replacement surgery",
      content:
        "I am having a knee replacement. I need some information regarding robotic surgery compared to traditional surgery in regards to recovery time, accuracy etc. Who performs robotic knee surgery and where can I get it done?",
      answered: false,
    },
    {
      id: 2,
      title: "Sample question 2",
      content:
        "This is a second sample question that would appear when clicking the arrow.",
      answered: true,
    },
    {
      id: 3,
      title: "Sample question 3",
      content:
        "This is a third sample question that would appear when clicking the arrow again.",
      answered: false,
    },
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const nextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex === questions.length - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevQuestion = () => {
    setCurrentQuestionIndex((prevIndex) =>
      prevIndex === 0 ? questions.length - 1 : prevIndex - 1,
    );
  };

  return (
    <div className={`h-full rounded-lg bg-white p-6 shadow-md ${className}`}>
      <p className="text-primary mb-6 text-2xl font-[700]">
        Recent Question and Review
      </p>

      <div className="mb-6">
        <div className="mb-2 flex items-center">
          <span className="font-semibold text-gray-700">
            Sarah asked you a question and is waiting for your answer!
          </span>
        </div>
      </div>

      <div className="border-t border-gray-200 pt-6">
        <div className="mb-4">
          <h2 className="text-primary text-lg font-semibold">
            Q. {questions[currentQuestionIndex].title}
          </h2>
          <p className="mt-2 text-gray-600">
            {questions[currentQuestionIndex].content}
          </p>
        </div>

        <div className="mt-6">
          <div className="mb-4">
            <div className="mb-4 flex items-center justify-between">
              <label className="font-[700]">Answer</label>
              <div className="flex justify-end space-x-2">
                <button
                  onClick={prevQuestion}
                  className="rounded-full transition duration-200 hover:cursor-pointer"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.84229 17.5173C4.21366 17.5171 0.461426 13.7642 0.461426 9.1355C0.461669 4.50702 4.21381 0.754881 8.84229 0.754639C13.471 0.754639 17.2239 4.50687 17.2241 9.1355C17.2241 13.7643 13.4711 17.5173 8.84229 17.5173Z"
                      stroke="#006D77"
                      stroke-width="0.728804"
                    />
                    <path
                      d="M10.2598 6.22083L7.38452 9.0467L10.2598 11.8726"
                      stroke="#006D77"
                      stroke-width="0.728804"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
                <p className="text-[14px]">
                  {" "}
                  {currentQuestionIndex + 1} of {questions.length}{" "}
                </p>
                <button
                  onClick={nextQuestion}
                  className="rounded-full transition duration-200 hover:cursor-pointer"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.01807 0.482666C13.6467 0.482909 17.3989 4.23582 17.3989 8.8645C17.3987 13.493 13.6465 17.2451 9.01807 17.2454C4.38938 17.2454 0.636474 13.4931 0.63623 8.8645C0.63623 4.23567 4.38923 0.482666 9.01807 0.482666Z"
                      stroke="#006D77"
                      stroke-width="0.728804"
                    />
                    <path
                      d="M7.60055 11.7792L10.4758 8.9533L7.60055 6.12742"
                      stroke="#006D77"
                      stroke-width="0.728804"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <textarea
              className="border-primary w-full rounded-lg border px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows="4"
              placeholder="Write an answer"
            ></textarea>
          </div>
          <button className="bg-primary rounded-lg px-10 py-3 font-medium text-white transition duration-200 hover:bg-blue-700">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
