import React from "react";

interface TextProps {
  content: string;
  type: "h1" | "h2" | "h3" | string;
}

function Text({ content, type }: TextProps) {
  switch (type) {
    case "h1":
      return (
        <h1 className="font-normal font-serifibm text-[56px] leading-[46px]">
          {content}
        </h1>
      );
    case "h2":
      return (
        <h2 className="font-normal font-serifibm text-4xl leading-[46px]">
          {content}
        </h2>
      );
    case "h3":
      return (
        <h3 className="text-[24px] leading-[32px] font-medium">{content}</h3>
      );
    default:
      return <p className="">{content}</p>;
  }
}

export default Text;
