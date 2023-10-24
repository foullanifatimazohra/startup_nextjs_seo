interface ButtonProps {
  type: "primary" | "secondary";
  title: string;
  disabled?: boolean;
}

function Button({ type, title, disabled }: ButtonProps) {
  const styleButton = `${
    type == "primary" ? "text-gray_100 bg-[#22C96A]" : "text-gray bg-green_200"
  } w-fit text-center font-outfit rounded-md py-4 px-8`;
  return (
    <button className={styleButton} disabled={disabled}>
      {title}
    </button>
  );
}

export default Button;
