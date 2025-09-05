import { AppWindowIcon, CodeIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Rating from "./Rating";
import QuestionReview from "./ReviewQuestion";
import ReviewForm from "./ReviewForm";
import About from "./About";
import QuestionsAndAnswers from "./QA";

export function DocTabs({ doctData, ownProfile }) {

  const handleReviewSubmit = () => {
    console.log("Review submitted");
    // This will be called after a successful review submission
    // You can use it to refresh the reviews list if needed
    // if (fetchReviews) {
    //   fetchReviews();
    // }
  };

  const line = "h-5 w-[1px] bg-primary";
  return (
    <div className="mt-7 flex w-full flex-col gap-6">
      <Tabs defaultValue="reviews">
        <TabsList className="border-primary w-full rounded-none border-t-2 border-b-2 bg-transparent py-5">
          <TabsTrigger
            value="reviews"
            className="data-[state=active]:text-primary cursor-pointer data-[state=active]:font-bold data-[state=active]:shadow-none"
          >
            Reviews
          </TabsTrigger>
          <div className={`${line}`}></div>
          <TabsTrigger
            value="about"
            className="data-[state=active]:text-primary cursor-pointer data-[state=active]:font-bold data-[state=active]:shadow-none"
          >
            About
          </TabsTrigger>
          <div className={`${line}`}></div>
          <TabsTrigger
            value="qa"
            className="data-[state=active]:text-primary cursor-pointer data-[state=active]:font-bold data-[state=active]:shadow-none"
          >
            Q&amp;A
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="reviews"
          className="mt-3 flex gap-10 max-lg:flex-wrap"
        >
          <Rating doctorId={doctData.id} className={` ${ownProfile ? "w-full" : "w-[60%] max-lg:w-full"}`} />
          {/* <QuestionReview className="w-[40%] max-lg:w-full" /> */}
          {!ownProfile && (
            console.log("ownProfile"),
            <ReviewForm doctorId={doctData.id}
             /*  onReviewSubmit={handleReviewSubmit} */ />
          )}
        </TabsContent>
        <TabsContent
          value="about"
          className="mt-3 flex gap-10 max-lg:flex-wrap"
        >
          <About className={` ${ownProfile ? "w-full" : "w-[60%] max-lg:w-full"}`} doctData={doctData} />
          {!ownProfile && (
            <ReviewForm doctorId={doctData.id}
             /*  onReviewSubmit={handleReviewSubmit} */ />
          )}
        </TabsContent>
        <TabsContent value="qa" className="mt-3 flex gap-10 max-lg:flex-wrap">
          <QuestionsAndAnswers className={` ${ownProfile ? "w-full" : "w-[60%] max-w-4xl max-lg:w-full"}`} />
          {!ownProfile && (
            <ReviewForm doctorId={doctData.id}
             /*  onReviewSubmit={handleReviewSubmit} */ />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
