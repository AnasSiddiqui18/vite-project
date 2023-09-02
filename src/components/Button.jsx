const Button = ({
  label,
  iconUrl,
  textColor,
  backgroundColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <div
      className={`flex gap-2 justify-center items-center bg-coral-red text-white rounded-full px-7 py-4 font-montserrat leading-none text-lg 
      ${
        backgroundColor
          ? ` ${backgroundColor} ${textColor} ${borderColor} `
          : "bg-coral-red text-white border-coral-red"
      } rounded-full  ${fullWidth && "w-full"}`}
    >
      {label}

      {iconUrl && <img src={iconUrl} alt="#" />}
    </div>
  );
};

export default Button;
