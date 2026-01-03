"use client";
import React, { useState } from "react";
import Image from "next/image";

const PatientRating = ({ className, reviews = [], questions = [] }) => {
  const [activeTab, setActiveTab] = useState("qa");
  const [showFilter, setShowFilter] = useState(false);
  const [filteredReviews, setFilteredReviews] = useState(reviews);

  React.useEffect(() => {
    setFilteredReviews(reviews);
  }, [reviews]);

  const handleFilter = () => {
    setShowFilter(!showFilter);
    if (!showFilter) {
      setFilteredReviews(reviews.filter((r) => r.averageRating >= 4));
    } else {
      setFilteredReviews(reviews);
    }
  };

  return (
    <div className={`w-full bg-white rounded-2xl border border-gray-100 p-8 shadow-sm ${className}`}>
      <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
        <div>
          <h2 className="text-xl font-bold text-[#232323] font-syne">
            {activeTab === "qa" ? "Questions Asked" : "Reviews & Ratings"}
          </h2>
          <p className="text-gray-400 text-xs mt-1">
            {activeTab === "qa"
              ? `You asked total ${questions.length} questions`
              : `You rated total ${reviews.length} doctors`}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-4 text-sm font-bold uppercase tracking-wider">
            <button
              onClick={() => setActiveTab("reviews")}
              className={`${activeTab === "reviews" ? "text-primary border-b-2 border-primary" : "text-gray-300"} pb-1 transition-all`}
            >
              Reviews
            </button>
            <span className="text-gray-200">|</span>
            <button
              onClick={() => setActiveTab("qa")}
              className={`${activeTab === "qa" ? "text-primary border-b-2 border-primary" : "text-gray-300"} pb-1 transition-all`}
            >
              Q&A
            </button>
          </div>

          <button className="text-primary flex items-center gap-2 text-xs font-bold uppercase tracking-wide">
            <svg width="14" height="15" viewBox="0 0 14 15" fill="none">
              <path d="M0 0.181641L5.44443 6.40394V12.6259L7 13.4039L8.55557 14.1816V6.40394L14 0.181641H0Z" fill="currentColor" />
            </svg>
            Filter {activeTab === "qa" ? "Question" : "Reviews"}
          </button>
        </div>
      </div>

      <div className="space-y-8">
        {activeTab === "reviews" ? (
          filteredReviews.length === 0 ? (
            <p className="text-center text-gray-400 py-12 italic">No reviews yet</p>
          ) : (
            filteredReviews.map((data, key) => (
              <div key={key} className="group">
                <div className="flex items-center gap-3 mb-3">
                  <Image
                    src={data.doctor?.image || "/doctor-1.jpg"}
                    height={32}
                    width={32}
                    className="h-8 w-8 rounded-full object-cover border border-gray-100 shadow-sm"
                    alt="doctor"
                  />
                  <p className="text-xs font-bold text-gray-500">
                    {data.doctor?.name || "Doctor"} <span className="text-gray-300 font-normal mx-2">•</span> {new Date(data.createdAt).toLocaleDateString('en-GB')}
                  </p>
                </div>
                <h3 className="text-[#232323] font-bold text-base mb-2 group-hover:text-primary transition-colors">Satisfied with the doctor</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mb-4">{data.review}</p>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 18 18" fill={i < Math.round(data.averageRating) ? "#F3CD03" : "#E5E7EB"}>
                        <path d="M8.91704 1.67224L11.3482 6.02832L15.4517 6.35438L12.6114 10.5457L13.9279 15.1522L8.91681 13.3355L3.89635 15.1875L4.96882 10.5435L1.93639 7.58736L6.48539 6.02832L8.91704 1.67224Z" />
                      </svg>
                    ))}
                    <span className="text-xs font-bold text-gray-700 ml-1">{data.averageRating}</span>
                  </div>
                  <button className="text-xs font-bold text-red-400 hover:text-red-500 transition-colors uppercase tracking-tight">Delete</button>
                </div>
              </div>
            ))
          )
        ) : (
          questions.length === 0 ? (
            <p className="text-center text-gray-400 py-12 italic">No questions asked yet</p>
          ) : (
            questions.map((q, idx) => (
              <div key={idx} className="group border-b border-gray-50 last:border-0 pb-6 last:pb-0">
                <h3 className="text-[#232323] font-bold text-base mb-2 group-hover:text-primary transition-colors">Q. {q.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mb-4">{q.content}</p>

                {q.answers && q.answers.length > 0 ? (
                  q.answers.map((ans, aIdx) => (
                    <div key={aIdx} className="flex items-center gap-3">
                      <Image
                        src={ans.author?.image || "/doctor-1.jpg"}
                        alt="author"
                        width={24}
                        height={24}
                        className="h-6 w-6 rounded-full object-cover border border-gray-100"
                      />
                      <span className="text-xs font-bold text-primary">
                        {ans.author?.name} answered
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-xs text-gray-300 italic">No answers yet</p>
                )}
              </div>
            ))
          )
        )}
      </div>

      {(activeTab === "reviews" ? reviews.length > 0 : questions.length > 0) && (
        <button className="text-primary mt-10 font-bold text-sm underline decoration-2 underline-offset-4 hover:text-[#2a6d70] transition-colors">
          Load More
        </button>
      )}
    </div>
  );
};

export default PatientRating;
