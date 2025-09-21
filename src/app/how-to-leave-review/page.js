import ProfileHeader from "@/components/reusable/profileHeader";
import { ReviewSteps } from "@/components/reviewPage/ReviewSteps";
import { WhyReviewMatters } from "@/components/reviewPage/WhyReviewMatters";
import React from "react";

const HowToLeaveReviewPage = () => {
  return (
 
      <div className="container">
        <ProfileHeader heading={"How to Leave a Review"} step1={"help"} step2={"review guide"} />
        <ReviewSteps />
      <WhyReviewMatters />
      </div>
 
  );
};

export default HowToLeaveReviewPage;
