"use client";
import React, { useState } from "react";
import { docProfile_Details } from "@/data/doctorProfile";
import { patientQA } from "@/data/patientQA";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

const PatientRating = ({ className }) => {
  const [activeTab, setActiveTab] = useState("reviews");
  const [showFilter, setShowFilter] = useState(false);
  // Dummy filter logic (replace with real filter logic as needed)
  const [filteredReviews, setFilteredReviews] = useState(
    docProfile_Details.review,
  );

  const handleFilter = () => {
    setShowFilter(!showFilter);
    // Example: filter reviews with rating >= 4
    if (!showFilter) {
      setFilteredReviews(
        docProfile_Details.review.filter((r) => r.rating >= 4),
      );
    } else {
      setFilteredReviews(docProfile_Details.review);
    }
  };

  return (
    <div
      className={`mt-10 w-full rounded-lg bg-white p-10 min-lg:w-[700px] ${className}`}
    >
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <div className="mb-3 flex items-center justify-between">
          <div>
            {activeTab === "reviews" && (
              <>
                <h5 className="text-primary font-[700]">
                  Reviews & Ratings{" "}
                  <span className="font-[500]"> (35 reviews) </span>
                </h5>
                <p className="text-primary text-[14px]">
                  You rated total 10 doctors
                </p>
              </>
            )}
            {activeTab === "qa" && (
              <>
                <h5 className="text-primary mb-1 font-[700]">
                  Questions Asked
                </h5>
                <p className="text-primary mb-0 text-[14px]">
                  You asked total 10 questions
                </p>
              </>
            )}
          </div>
          <div className="flex flex-col items-start justify-start gap-4">
            <TabsList className="gap-2 rounded-none border-none bg-transparent p-0">
              <TabsTrigger
                value="reviews"
                className={`text-primary px-2 py-1 font-semibold ${activeTab === "reviews" ? "border-primary border-b-2" : ""}`}
              >
                Reviews
              </TabsTrigger>
              <TabsTrigger
                value="qa"
                className={`text-primary px-2 py-1 font-semibold ${activeTab === "qa" ? "border-primary border-b-2" : ""}`}
              >
                Q&amp;A
              </TabsTrigger>
            </TabsList>
            {activeTab === "reviews" && (
              <button
                className="text-primary flex cursor-pointer items-center gap-2 text-[14px] font-semibold"
                onClick={handleFilter}
              >
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0.181641L5.44443 6.40394V12.6259L7 13.4039L8.55557 14.1816V6.40394L14 0.181641H0Z"
                    fill="#2F797B"
                  />
                </svg>
                Filter reviews
              </button>
            )}
            {activeTab === "qa" && (
              <button className="text-primary flex items-center gap-2 text-[14px] font-semibold underline">
                <svg
                  width="14"
                  height="15"
                  viewBox="0 0 14 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 0.181641L5.44443 6.40394V12.6259L7 13.4039L8.55557 14.1816V6.40394L14 0.181641H0Z"
                    fill="#2F797B"
                  />
                </svg>
                Filter question
              </button>
            )}
          </div>
        </div>
        <TabsContent value="reviews">
          <div>
            {filteredReviews.map((data, key) => (
              <div key={key} className="mt-10 border-t-2 border-[#BDC6C6]">
                <div className="flex items-center gap-2 pt-5">
                  <Image
                    src={data.pic}
                    height={30}
                    width={30}
                    className="h-7 w-7 rounded-full border-[1px] border-[#737373]"
                    alt="user profile picture"
                    loading="lazy"
                  />
                  <p className="text-[14px] font-[600] text-[#737373]">
                    {data.name} - {data.date}
                  </p>
                  <button className="ml-auto text-[14px] font-semibold text-red-500">
                    Delete
                  </button>
                </div>
                <div className="flex items-start justify-between gap-2 max-md:mt-5 max-md:flex-col-reverse">
                  <div>
                    <p className="text-primary my-2 font-[600]">
                      Satisfied with the doctor
                    </p>
                    <p className="max-w-[425px] text-[14px] font-[500]">
                      {data.review}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-1 pt-2">
                      {/* Render stars based on rating */}
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.0765 6.84095C16.0312 6.7077 15.9479 6.59061 15.8369 6.50414C15.7259 6.41767 15.592 6.36561 15.4517 6.35438L11.3482 6.02832L9.57253 2.09761C9.51598 1.97101 9.42399 1.86348 9.30768 1.788C9.19137 1.71252 9.0557 1.67232 8.91704 1.67224C8.77838 1.67217 8.64267 1.71222 8.52627 1.78757C8.40988 1.86292 8.31778 1.97035 8.26109 2.09689L6.48539 6.02832L2.38193 6.35438C2.24406 6.36531 2.11226 6.41572 2.00229 6.49958C1.89232 6.58345 1.80884 6.69723 1.76183 6.8273C1.71483 6.95737 1.7063 7.09823 1.73726 7.23302C1.76821 7.36781 1.83735 7.49083 1.93639 7.58736L4.96882 10.5435L3.89635 15.1875C3.86378 15.3281 3.87422 15.4752 3.9263 15.6098C3.97839 15.7443 4.06971 15.8601 4.18843 15.9422C4.30715 16.0242 4.44778 16.0686 4.59207 16.0697C4.73636 16.0708 4.87765 16.0285 4.99761 15.9483L8.91681 13.3355L12.836 15.9483C12.9586 16.0297 13.1032 16.0716 13.2503 16.0684C13.3975 16.0652 13.5401 16.017 13.659 15.9303C13.7779 15.8436 13.8674 15.7225 13.9155 15.5834C13.9636 15.4444 13.9679 15.2939 13.9279 15.1522L12.6114 10.5457L15.8764 7.60752C16.0901 7.41462 16.1686 7.11375 16.0765 6.84095Z"
                            fill={
                              i < Math.round(data.rating)
                                ? "#F3CD03"
                                : "#E5E7EB"
                            }
                          />
                        </svg>
                      ))}
                      <p className="text-[14px] font-[600]">{data.rating}</p>
                    </div>
                    <ul className="text-primary">
                      <li>Professionalism:{data.professionalism}/5</li>
                      <li>Punctuality: {data.punctuality}/5</li>
                      <li>Helpfulness: {data.helpfulness}/5</li>
                      <li>Knowledge: {data.knowledge}/5</li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
            <button className="text-primary mt-6 font-semibold underline">
              Load More
            </button>
          </div>
        </TabsContent>
        <TabsContent value="qa">
          <div>
            {patientQA.map((q, idx) => (
              <div
                key={idx}
                className="mb-2 border-t-2 border-[#BDC6C6] pt-5 pb-2"
              >
                <p className="text-primary mb-1 max-w-[425px] text-[15px] font-semibold">
                  Q. {q.question}
                </p>
                <p className="mb-2 max-w-[425px] text-[14px] text-[#232323]">
                  {q.detail}
                </p>
                <div className="flex items-center gap-2">
                  <Image
                    src="/doctor-1.jpg"
                    alt="doctor"
                    width={24}
                    height={24}
                    className="h-6 w-6 rounded-full border border-[#737373] object-cover"
                  />
                  <span className="text-[13px] font-semibold text-[#2F797B]">
                    {q.answeredBy} answered
                  </span>
                </div>
              </div>
            ))}
            <button className="text-primary mt-2 font-semibold underline">
              Load More
            </button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PatientRating;
