"use client";

import Image from "next/image";
import { useState } from "react";

export default function QuestionsAndAnswers({ className }) {
  const [expandedQuestions, setExpandedQuestions] = useState({});
  const [helpfulCounts, setHelpfulCounts] = useState({
    1: { count: 20, clicked: false },
    2: { count: 15, clicked: false },
    3: { count: 8, clicked: false },
  });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [newQuestion, setNewQuestion] = useState("");
  const [isConfidential, setIsConfidential] = useState(false);
  const [isGeneralInquiry, setIsGeneralInquiry] = useState(false);

  const questions = [
    {
      id: 1,
      question: "Robotic vs traditional knee replacement surgery",
      userQuestion:
        "I am having a knee replacement. I need some information regarding robotic surgery compared to traditional surgery in regards to recovery time, accuracy etc. Who performs robotic knee surgery and where can I get it done? What are the benefits compared to traditional surgery?",
      doctorAnswer:
        "Robotic-assisted surgery is a relatively new way of performing a knee replacement. Robotic-assisted surgery and traditional knee replacement surgery use the same implants i.e you end up with the same prosthesis however the way the operation is performed is slightly different. Personally I now use Robotic-assisted surgery for all my knee replacements as it allows for more precise bone cuts and better alignment of the implant. The recovery time is typically similar, but patients often report less pain in the immediate postoperative period with robotic surgery.",
      helpfulCount: 20,
      questionCount: "1 of 3",
    },
    {
      id: 2,
      question: "Recovery time after ACL reconstruction",
      userQuestion:
        "How long does it typically take to recover from ACL reconstruction surgery? When can I return to sports? What's the rehabilitation process like?",
      doctorAnswer:
        "The recovery from ACL reconstruction typically takes about 9-12 months for full return to sports. The first 2 weeks focus on reducing swelling and regaining range of motion. From 2-6 weeks, we work on strengthening and proprioception. Between 3-6 months, you can start light jogging and sport-specific drills. Full return to contact sports usually occurs between 9-12 months post-op, depending on your progress with strength and agility testing.",
      helpfulCount: 15,
      questionCount: "2 of 3",
    },
    {
      id: 3,
      question: "Non-surgical options for knee osteoarthritis",
      userQuestion:
        "What non-surgical options are available for managing knee osteoarthritis? I'd like to avoid surgery if possible.",
      doctorAnswer:
        "There are several non-surgical options we can try before considering knee replacement. These include: weight loss (if needed), physical therapy to strengthen the muscles around the knee, anti-inflammatory medications, corticosteroid injections, hyaluronic acid injections, and lifestyle modifications. We also now offer regenerative medicine options like platelet-rich plasma (PRP) injections which can help with pain relief and potentially slow progression in some patients.",
      helpfulCount: 8,
      questionCount: "3 of 3",
    },
  ];

  const toggleQuestionExpand = (id) => {
    setExpandedQuestions((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleHelpfulClick = (id) => {
    if (!helpfulCounts[id]?.clicked) {
      setHelpfulCounts((prev) => ({
        ...prev,
        [id]: {
          count: prev[id]?.count + 1 || 1,
          clicked: true,
        },
      }));
    }
  };

  const navigateQuestions = (direction) => {
    if (direction === "prev" && currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    } else if (
      direction === "next" &&
      currentQuestionIndex < questions.length - 1
    ) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handleSubmitQuestion = (e) => {
    e.preventDefault();
    // Handle question submission logic here
    console.log({
      question: newQuestion,
      isConfidential,
      isGeneralInquiry,
    });
    setNewQuestion("");
    setIsConfidential(false);
    setIsGeneralInquiry(false);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div
      className={`${className} mt-10 max-w-4xl rounded-lg bg-white p-6 shadow-md`}
    >
      <p className="text-primary mb-6 font-[700]">Questions & Answers</p>

      <p className="mb-6 text-[14px]">
        The following questions have been posted by the B.O.S users and answered
        by Dr Smith Brown.
        <br />
        Got any question? Ask below!
      </p>

      <div className="my-6 border-t border-gray-200"></div>

      {/* Current Question */}
      <div className="mb-8">
        <p className="text-primary mb-2 text-[14px] font-[700]">
          Q. {currentQuestion.question}
        </p>
        <p className="mb-4 text-[14px]">
          {expandedQuestions[currentQuestion.id]
            ? currentQuestion.userQuestion
            : `${currentQuestion.userQuestion.substring(0, 100)}...`}
          {currentQuestion.userQuestion.length > 100 && (
            <button
              onClick={() => toggleQuestionExpand(currentQuestion.id)}
              className="ml-1 text-blue-600 hover:underline"
            >
              {expandedQuestions[currentQuestion.id]
                ? "Show Less"
                : "Show More"}
            </button>
          )}
        </p>

        <div className="">
          <div className="my-5 flex items-center gap-2">
            <Image
              src="/surgeons/doctors.png"
              alt="doc"
              height={100}
              width={100}
              className="h-7 w-7 rounded-full"
            />
            <p className="text-primary text-[14px] font-[700]">
              Dr Smith answered
            </p>
          </div>
          <p className="text-[14px]">
            {expandedQuestions[currentQuestion.id]
              ? currentQuestion.doctorAnswer
              : `${currentQuestion.doctorAnswer.substring(0, 100)}...`}
            {currentQuestion.doctorAnswer.length > 100 && (
              <button
                onClick={() => toggleQuestionExpand(currentQuestion.id)}
                className="ml-1 text-blue-600 hover:underline"
              >
                {expandedQuestions[currentQuestion.id]
                  ? "Show Less"
                  : "Show More"}
              </button>
            )}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={() => handleHelpfulClick(currentQuestion.id)}
            disabled={helpfulCounts[currentQuestion.id]?.clicked}
            className={`flex items-center ${helpfulCounts[currentQuestion.id]?.clicked ? "cursor-default text-gray-400" : "cursor-pointer text-gray-600"}`}
          >
            <span className="mr-1">
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.84 1.04327L5.685 5.19827C5.4075 5.47577 5.25 5.85827 5.25 6.25577V13.7483C5.25 14.5733 5.925 15.2483 6.75 15.2483H13.5C14.1 15.2483 14.64 14.8883 14.88 14.3408L17.325 8.63327C17.955 7.14827 16.8675 5.49827 15.255 5.49827H11.0175L11.73 2.06327C11.805 1.68827 11.6925 1.30577 11.4225 1.03577C10.98 0.600768 10.275 0.600768 9.84 1.04327ZM2.25 15.2483C3.075 15.2483 3.75 14.5733 3.75 13.7483V7.74827C3.75 6.92327 3.075 6.24827 2.25 6.24827C1.425 6.24827 0.75 6.92327 0.75 7.74827V13.7483C0.75 14.5733 1.425 15.2483 2.25 15.2483Z"
                  fill="#83C5BE"
                />
              </svg>
            </span>
            <span>
              {helpfulCounts[currentQuestion.id]?.count || 0} people find this
              helpful
            </span>
          </button>
          <div className="flex items-center space-x-1">
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_427_5516)">
                <path
                  d="M9.84 2.04327L5.685 6.19827C5.4075 6.47577 5.25 6.85827 5.25 7.25577V14.7483C5.25 15.5733 5.925 16.2483 6.75 16.2483H13.5C14.1 16.2483 14.64 15.8883 14.88 15.3408L17.325 9.63327C17.955 8.14827 16.8675 6.49827 15.255 6.49827H11.0175L11.73 3.06327C11.805 2.68827 11.6925 2.30577 11.4225 2.03577C10.98 1.60077 10.275 1.60077 9.84 2.04327ZM2.25 16.2483C3.075 16.2483 3.75 15.5733 3.75 14.7483V8.74827C3.75 7.92327 3.075 7.24827 2.25 7.24827C1.425 7.24827 0.75 7.92327 0.75 8.74827V14.7483C0.75 15.5733 1.425 16.2483 2.25 16.2483Z"
                  fill="#737373"
                />
              </g>
              <defs>
                <clipPath id="clip0_427_5516">
                  <rect
                    width="18"
                    height="18"
                    fill="white"
                    transform="translate(0 0.498291)"
                  />
                </clipPath>
              </defs>
            </svg>

            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_427_5519)">
                <path
                  d="M8.16 15.9155L12.315 11.7605C12.5925 11.483 12.75 11.1005 12.75 10.703V3.21047C12.75 2.38547 12.075 1.71047 11.25 1.71047H4.5C3.9 1.71047 3.36 2.07047 3.12 2.61797L0.674999 8.32547C0.0450001 9.81047 1.1325 11.4605 2.745 11.4605H6.9825L6.27 14.8955C6.195 15.2705 6.3075 15.653 6.5775 15.923C7.02 16.358 7.725 16.358 8.16 15.9155ZM15.75 1.71047C14.925 1.71047 14.25 2.38547 14.25 3.21047V9.21047C14.25 10.0355 14.925 10.7105 15.75 10.7105C16.575 10.7105 17.25 10.0355 17.25 9.21047V3.21047C17.25 2.38547 16.575 1.71047 15.75 1.71047Z"
                  fill="#737373"
                />
              </g>
              <defs>
                <clipPath id="clip0_427_5519">
                  <rect
                    width="18"
                    height="18"
                    fill="white"
                    transform="matrix(-1 0 0 1 18 0.498291)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
      <div className="my-6 border-t border-gray-200"></div>
      {/* Question Navigation */}
      <div className="mb-4 flex items-center justify-center">
        <button
          onClick={() => navigateQuestions("prev")}
          disabled={currentQuestionIndex === 0}
          className={`rounded-full p-2 ${currentQuestionIndex === 0 ? "cursor-not-allowed text-gray-300" : "cursor-pointer text-gray-600 hover:bg-gray-100"}`}
          aria-label="Previous question"
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
              strokeWidth="0.728804"
            />
            <path
              d="M10.2598 6.22083L7.38452 9.0467L10.2598 11.8726"
              stroke="#006D77"
              strokeWidth="0.728804"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <span className="text-sm text-gray-500">
          {currentQuestion.questionCount} questions
        </span>

        <button
          onClick={() => navigateQuestions("next")}
          disabled={currentQuestionIndex === questions.length - 1}
          className={`rounded-full p-2 ${currentQuestionIndex === questions.length - 1 ? "cursor-not-allowed text-gray-300" : "cursor-pointer text-gray-600 hover:bg-gray-100"}`}
          aria-label="Next question"
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
              strokeWidth="0.728804"
            />
            <path
              d="M7.60055 11.7792L10.4758 8.9533L7.60055 6.12742"
              stroke="#006D77"
              strokeWidth="0.728804"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      {/* Ask a Question Form */}
      <div>
        <p className="mb-4 text-[14px] font-bold">Ask a question</p>
        <form onSubmit={handleSubmitQuestion}>
          <textarea
            value={newQuestion}
            onChange={(e) => setNewQuestion(e.target.value)}
            placeholder="Type your question…"
            className="border-primary mb-4 h-32 w-full rounded-lg border p-3 focus:border-transparent focus:ring-2 focus:ring-blue-500"
            required
          />

          <div className="mb-6 flex items-center space-x-5">
            <label className="flex cursor-pointer items-center space-x-2">
              <input
                type="checkbox"
                checked={isConfidential}
                onChange={() => setIsConfidential(!isConfidential)}
                className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500"
              />
              <span className="text-[14px]">Confidential question</span>
            </label>
            <label className="flex cursor-pointer items-center space-x-2">
              <input
                type="checkbox"
                checked={isGeneralInquiry}
                onChange={() => setIsGeneralInquiry(!isGeneralInquiry)}
                className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500"
              />
              <span className="text-[14px]">General Inquiry</span>
            </label>
          </div>

          <button
            type="submit"
            className="bg-primary rounded-lg px-13 py-3 text-white transition focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
