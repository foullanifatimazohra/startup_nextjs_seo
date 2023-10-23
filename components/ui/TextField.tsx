import React from "react";

export const TextField = ({
  label,
  subLabel,
  type,
  name,
  placeholder,
}: any) => {
  return (
    <div>
      <label>
        <span className="text-[15px] mb-4">{label} </span> <br />
        <span className="text-[#707070] text-[12px] ">{subLabel}</span>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          className="border border-[#000000] rounded mt-5 h-[48px] w-full"
        />
      </label>
    </div>
  );
};
