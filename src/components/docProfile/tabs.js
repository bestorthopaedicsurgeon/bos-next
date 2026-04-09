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
        <TabsList className="text-muted-foreground inline-flex items-center justify-center p-[3px] border-primary w-full max-w-7xl mx-auto rounded-none border-t-[1px] border-b-[1px] bg-transparent py-5">
          <TabsTrigger
            value="reviews"
            className="inline-flex items-center justify-center gap-1.5 border border-transparent px-4 [@media(min-width:440px)]:px-8 py-4 text-base font-medium whitespace-nowrap transition-[color,box-shadow,background-color] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 text-black cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:font-bold data-[state=active]:shadow-md sm:px-12"
          >
            Reviews
          </TabsTrigger>
          <div className="h-5 w-[1px] bg-primary mx-1 [@media(min-width:440px)]:mx-4"></div>
          <TabsTrigger
            value="about"
            className="inline-flex items-center justify-center gap-1.5 border border-transparent px-4 [@media(min-width:440px)]:px-8 py-4 text-base font-medium whitespace-nowrap transition-[color,box-shadow,background-color] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 text-black cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:font-bold data-[state=active]:shadow-md sm:px-12"
          >
            About
          </TabsTrigger>
          <div className="h-5 w-[1px] bg-primary mx-1 [@media(min-width:440px)]:mx-4"></div>
          <TabsTrigger
            value="qa"
            className="inline-flex items-center justify-center gap-1.5 border border-transparent px-4 [@media(min-width:440px)]:px-8 py-4 text-base font-medium whitespace-nowrap transition-[color,box-shadow,background-color] focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 text-black cursor-pointer data-[state=active]:bg-primary data-[state=active]:text-white data-[state=active]:font-bold data-[state=active]:shadow-md sm:px-12"
          >
            Q&amp;A
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="reviews"
          className="mt-3 flex gap-10 max-lg:flex-wrap"
        >
          <Rating
            doctorId={doctData.id}
            className={` ${ownProfile ? "w-full" : "w-[60%] max-lg:w-full"}`}
          />
          {/* <QuestionReview className="w-[40%] max-lg:w-full" /> */}
          {!ownProfile &&
            (console.log("ownProfile"),
            (
              <ReviewForm
                doctorId={doctData.id}
                doctorName={doctData.name}
                /*  onReviewSubmit={handleReviewSubmit} */
              />
            ))}
        </TabsContent>
        <TabsContent
          value="about"
          className="mt-3 flex gap-10 max-lg:flex-wrap"
        >
          <About
            className={` ${ownProfile ? "w-full" : "w-[60%] max-lg:w-full"}`}
            doctData={doctData}
          />
          {!ownProfile && (
            <ReviewForm
              doctorId={doctData.id}
              doctorName={doctData.name}
              /*  onReviewSubmit={handleReviewSubmit} */
            />
          )}
        </TabsContent>
        <TabsContent value="qa" className="mt-3 flex gap-10 max-lg:flex-wrap">
          <QuestionsAndAnswers
            doctData={doctData}
            ownProfile={ownProfile}
            className={` ${ownProfile ? "w-full" : "w-[60%] max-w-4xl max-lg:w-full"}`}
          />
          {!ownProfile && (
            <ReviewForm
              doctorId={doctData.id}
              doctorName={doctData.name}
              /*  onReviewSubmit={handleReviewSubmit} */
            />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
