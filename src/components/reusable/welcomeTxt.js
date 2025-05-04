import React from "react";

const WelcomeTxt = (props) => {
  const { header, subTxt, cta, ctaLink, color } = props;
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className={color ? `text-(${color})` : `text-(--primary)`}>
        {header}
      </h1>
      <p>
        {subTxt}{" "}
        <a href={ctaLink} className="underline text-(--primary)">
          {cta}
        </a>
      </p>
    </div>
  );
};

export default WelcomeTxt;
