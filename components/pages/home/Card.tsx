import React from "react";

interface CardProps {
  rounded?: boolean;
  bgColor?: string;
  padding: string;
  children?: JSX.Element[];
  extraClassName?: string;
}
function Card({
  rounded,
  children,
  bgColor,
  padding,
  extraClassName,
}: CardProps) {
  const className =
    `${bgColor ? bgColor : "bg-white"} ${
      rounded ? "rounded-lg" : ""
    } flex flex-col gap-10  w-[60ch] ` +
    padding +
    extraClassName;
  return <div className={className}>{children}</div>;
}

export default Card;
