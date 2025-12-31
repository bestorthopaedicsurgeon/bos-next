"use client";

import {
  getDoctorQuestions,
  submitAnswer,
  submitQuestion,
} from "@/lib/apiCalls/client/qa";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import { Lock, MessageSquare } from "lucide-react";

export default function QuestionsAndAnswers({
  className,
  doctData,
  ownProfile,
  questions: questionsFromProps,
}) {
  // console.log("qa", doctorId);
  const [expandedQuestions, setExpandedQuestions] = useState({});
  const [questions, setQuestions] = useState(questionsFromProps || []);
  const [answer, setAnswer] = useState("");
  const [helpfulCounts, setHelpfulCounts] = useState({
    1: { count: 20, clicked: false },
    2: { count: 15, clicked: false },
    3: { count: 8, clicked: false },
  });
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [newQuestion, setNewQuestion] = useState("");
  const [isConfidential, setIsConfidential] = useState(false);
  const [isGeneralInquiry, setIsGeneralInquiry] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { data: session } = useSession();
  const currentUserId = session?.user?.id;

  const replyTextareaRef = useRef(null);

  const fetchQuestions = async () => {
    try {
      setLoading(true);
      const data = await getDoctorQuestions(doctData.id);
      console.log("asdasd", data);

      if (data.success) {
        setQuestions(data.data);
        console.log("success", data);
      } else {
        setError(error || "Failed to load questions");
      }
    } catch (err) {
      setError("An error occurred while fetching questions");
      console.error("Error fetching questions:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Only fetch if we don't have questions from props and we have a doctData.id
    if (!questionsFromProps && doctData?.id) {
      fetchQuestions();
    }
  }, [doctData?.id, questionsFromProps]);

  // const questions = [
  //   {
  //     id: 1,
  //     question: "Robotic vs traditional knee replacement surgery",
  //     userQuestion:
  //       "I am having a knee replacement. I need some information regarding robotic surgery compared to traditional surgery in regards to recovery time, accuracy etc. Who performs robotic knee surgery and where can I get it done? What are the benefits compared to traditional surgery?",
  //     doctorAnswer:
  //       "Robotic-assisted surgery is a relatively new way of performing a knee replacement. Robotic-assisted surgery and traditional knee replacement surgery use the same implants i.e you end up with the same prosthesis however the way the operation is performed is slightly different. Personally I now use Robotic-assisted surgery for all my knee replacements as it allows for more precise bone cuts and better alignment of the implant. The recovery time is typically similar, but patients often report less pain in the immediate postoperative period with robotic surgery.",
  //     helpfulCount: 20,
  //     questionCount: "1 of 3",
  //   },
  //   {
  //     id: 2,
  //     question: "Recovery time after ACL reconstruction",
  //     userQuestion:
  //       "How long does it typically take to recover from ACL reconstruction surgery? When can I return to sports? What's the rehabilitation process like?",
  //     doctorAnswer:
  //       "The recovery from ACL reconstruction typically takes about 9-12 months for full return to sports. The first 2 weeks focus on reducing swelling and regaining range of motion. From 2-6 weeks, we work on strengthening and proprioception. Between 3-6 months, you can start light jogging and sport-specific drills. Full return to contact sports usually occurs between 9-12 months post-op, depending on your progress with strength and agility testing.",
  //     helpfulCount: 15,
  //     questionCount: "2 of 3",
  //   },
  //   {
  //     id: 3,
  //     question: "Non-surgical options for knee osteoarthritis",
  //     userQuestion:
  //       "What non-surgical options are available for managing knee osteoarthritis? I'd like to avoid surgery if possible.",
  //     doctorAnswer:
  //       "There are several non-surgical options we can try before considering knee replacement. These include: weight loss (if needed), physical therapy to strengthen the muscles around the knee, anti-inflammatory medications, corticosteroid injections, hyaluronic acid injections, and lifestyle modifications. We also now offer regenerative medicine options like platelet-rich plasma (PRP) injections which can help with pain relief and potentially slow progression in some patients.",
  //     helpfulCount: 8,
  //     questionCount: "3 of 3",
  //   },
  // ];

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

  const handleSubmitQuestion = async (e) => {
    e.preventDefault();
    // Handle question submission logic here
    // console.log({
    //   question: newQuestion,
    //   isConfidential,
    //   isGeneralInquiry,
    // });

    const questionData = {
      content: newQuestion,
      doctorId: doctData.id,
      isConfidential: isConfidential,
    };
    console.log("questionData", questionData);
    const { success, data, error } = await submitQuestion(questionData);
    if (success) {
      toast.success("Question submitted successfully");
      fetchQuestions();
    } else {
      toast.error(error || "Failed to submit question");
    }
    setNewQuestion("");
    setIsConfidential(false);
    setIsGeneralInquiry(false);
  };

  const handleSubmitAnswer = async (e) => {
    e.preventDefault();
    // Handle answer submission logic here
    console.log({
      answer,
    });
    const answerData = {
      content: answer,
      doctorId: doctData.id,
      questionId: currentQuestion.id,
    };
    console.log("answerData", answerData);
    const { success, data, error } = await submitAnswer(answerData);
    if (success) {
      toast.success("Answer submitted successfully");
      fetchQuestions();
    } else {
      toast.error(error || "Failed to submit answer");
    }
    setAnswer("");
  };

  const currentQuestion = questions?.[currentQuestionIndex];

  const canAnswer =
    currentUserId &&
    (ownProfile || // Current user is the doctor
      currentUserId === currentQuestion?.patient?.id); // Current user is the patient who asked

  return (
    <div className={`${className} rounded-lg bg-white p-6 shadow-md`}>
      <p className="text-primary mb-6 font-[700]">Questions & Answers</p>

      <p className="mb-6 text-[14px]">
        The following questions have been posted by the B.O.S users and answered
        by Dr Smith Brown.
        <br />
        Got any question? Ask below!
      </p>

      <div className="my-6 border-t border-gray-200"></div>

      {questions.length > 0 ? (
        <div className="space-y-6">
          {/* Current Question */}
          <div className="rounded-lg border border-gray-200 p-4">
            {/* Question Header */}
            <div className="flex items-start gap-3">
              <Image
                src={
                  currentQuestion?.patient?.image ||
                  "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                }
                alt="User"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
                unoptimized
              />
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-gray-900">
                    {currentQuestion?.patient?.name}
                  </span>
                  <span className="text-xs text-gray-500">
                    {new Date(currentQuestion?.createdAt).toLocaleDateString()}
                    {currentQuestion?.isConfidential && (
                      <span
                        className="ml-2 inline-flex items-center text-amber-600"
                        title="This question is confidential"
                      >
                        <Lock className="h-3 w-3" />
                        <span className="ml-1 text-xs">Confidential</span>
                      </span>
                    )}
                  </span>
                </div>
                <p className="mt-1 text-gray-800">{currentQuestion?.content}</p>

                {/* Question Actions */}
                <div className="mt-2 flex items-center gap-4 text-sm text-gray-500">
                  <button
                    onClick={() => {
                      replyTextareaRef.current?.focus();
                    }}
                    className="hover:text-primary flex cursor-pointer items-center gap-1"
                  >
                    <MessageSquare className="h-4 w-4" />
                    Reply
                  </button>
                </div>
              </div>
            </div>

            {/* Answers Section */}
            <div className="mt-4 space-y-4 border-t border-gray-100 pt-4">
              {currentQuestion?.answers?.map((answer) => (
                <div
                  key={answer.id}
                  className={`ml-12 flex gap-3 ${answer.author.role === "DOCTOR" ? "rounded-lg bg-blue-50 p-3" : ""}`}
                >
                  <Image
                    src={
                      answer.author.image ||
                      "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                    }
                    alt={answer.author.name}
                    width={32}
                    height={32}
                    className="mt-1 h-8 w-8 flex-shrink-0 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium text-gray-900">
                        {answer.author.name}
                        {answer.author.role === "DOCTOR" && (
                          <span className="ml-2 rounded-full bg-blue-100 px-2 py-0.5 text-xs text-blue-800">
                            Doctor
                          </span>
                        )}
                      </span>
                      <span className="text-xs text-gray-500">
                        {new Date(answer.createdAt).toLocaleString()}
                      </span>
                    </div>
                    <p className="mt-1 text-sm text-gray-800">
                      {answer.content}
                    </p>
                  </div>
                </div>
              ))}

              {/* Reply Form */}
              {(canAnswer || session?.user?.role === "DOCTOR") && (
                <div className="mt-4 ml-12">
                  <div className="flex items-start gap-3">
                    <Image
                      src={
                        session.user.image ||
                        "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                      }
                      alt="You"
                      width={32}
                      height={32}
                      className="mt-1 h-8 w-8 rounded-full"
                    />
                    <div className="flex-1">
                      <textarea
                        ref={replyTextareaRef}
                        value={answer}
                        onChange={(e) => setAnswer(e.target.value)}
                        placeholder="Write a reply..."
                        rows="2"
                        className="w-full resize-none rounded-lg border border-gray-300 p-2 text-sm focus:border-blue-500"
                      />
                      <div className="mt-2 flex justify-end">
                        <Button
                          onClick={handleSubmitAnswer}
                          disabled={!answer.trim()}
                          className="px-4 py-1.5 text-sm"
                        >
                          Reply
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigateQuestions("prev")}
              disabled={currentQuestionIndex === 0}
              className="flex items-center gap-1 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 disabled:opacity-50"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Previous
            </button>

            <span className="text-sm text-gray-500">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>

            <button
              onClick={() => navigateQuestions("next")}
              disabled={currentQuestionIndex === questions.length - 1}
              className="flex items-center gap-1 rounded-full bg-gray-100 px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 disabled:opacity-50"
            >
              Next
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      ) : (
        <div className="rounded-lg border-2 border-dashed border-gray-300 p-8 text-center">
          <p className="text-gray-500">
            No questions yet. Be the first to ask a question!
          </p>
        </div>
      )}

      {/* Ask a Question Form */}
      {!ownProfile && (
        <div>
          <p className="mb-4 text-[14px] font-bold">Ask a question</p>
          <form onSubmit={handleSubmitQuestion}>
            <textarea
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              placeholder="Type your question…"
              className="border-primary mb-4 h-32 w-full resize-none rounded-lg border p-3 focus:border-transparent"
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
            </div>

            <button
              type="submit"
              className="bg-primary cursor-pointer rounded-lg px-13 py-3 text-white transition focus:outline-none"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
