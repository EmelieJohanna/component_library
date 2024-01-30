function Buttons({ size, color = "bg-slate-500", disabled, children }) {
  const buttonSize = {
    sm: "py-2 px-4",
    m: "py-4 px-8",
    lg: "py-6 px-12",
    xl: "py-12 px-24",
  };

  return (
    <div className="">
      <button
        className={`${buttonSize[size]} ${color} rounded-lg m-6 text-slate-50`}
        disabled={disabled}
      >
        {children}
      </button>
    </div>
  );
}

export default Buttons;
