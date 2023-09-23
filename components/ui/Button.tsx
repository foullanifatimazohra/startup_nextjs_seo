interface ButtonProps {
  type: "primary" | "secondary";
  title: string;
  disabled?: boolean;
}

function Button({ type, title, disabled }: ButtonProps) {
  const styleButton = `  ${
    type == "primary" ? "text-white bg-green" : "text-gray bg-green_200"
  } w-auto text-center font-outfit rounded-md py-4 px-8`;
  return (
    <button className={styleButton} disabled={disabled}>
      {title}
    </button>
  );
}

export default Button;
