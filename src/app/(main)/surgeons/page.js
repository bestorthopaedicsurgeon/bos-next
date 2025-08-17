import { SearchableSurgeonsWrapper } from "@/components/surgeonsPage/SearchableSurgeonsWrapper";
import InfoSectionLeft from "@/components/surgeonsPage/InfoSectionLeft";
import InfoSectionRight from "@/components/surgeonsPage/InfoSectionRight";
import Types from "@/components/surgeonsPage/Types";
import React from "react";
import InfoSectionLefta from "@/components/surgeonsPage/infoSectionLefta";
import InfoSectionRightb from "@/components/surgeonsPage/infoSectionRightb";

const SurgeonsPage = () => {
  return (
    <div className="container">
      <SearchableSurgeonsWrapper />
      <InfoSectionLeft image={"/surgeons/info1.png"} />
      <InfoSectionRight image={"/surgeons/info2.png"} />
      <Types />
      <InfoSectionLefta image={"/surgeons/info3.png"} />
      <InfoSectionRightb image={"/surgeons/info4.png"} />
    </div>
  );
};

export default SurgeonsPage;
