import React from "react";

interface TextProps {
  content: string;
  type: "h1" | "h2" | "h3" | string;
  className?: string;
}

function Text({ content, type, className }: TextProps) {
  switch (type) {
    case "h1":
      return (
        <h1 className={`font-light text-[56px] leading-[50px] ` + className}>
          {content}
        </h1>
      );
    case "h2":
      return (
        <h2 className={`font-normal text-4xl leading-[46px] ` + className}>
          {content}
        </h2>
      );
    case "h3":
      return (
        <h3 className={`text-[24px] leading-[32px] font-light ` + className}>
          {content}
        </h3>
      );
    default:
      return <p className={className}>{content}</p>;
  }
}

export default Text;
