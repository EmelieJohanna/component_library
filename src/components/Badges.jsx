function Badges({ color, size, icon: IconComponent, children }) {
  const badgeSize = {
    sm: "w-max px-2",
    m: "w-max py-4 px-8",
    lg: "w-maxpy-6 px-12",
    xl: "w-max py-12 px-24",
  };

  const colorBack = {
    red: "bg-red-100",
    gray: "bg-slate-100",
    green: "bg-green-100",
    blue: "bg-blue-100",
    yellow: "bg-yellow-100",
    orange: "bg-orange-100",
    pink: "bg-pink-100",
    purple: "bg-purple-100",
  };

  const colorText = {
    red: "text-red-900",
    gray: "text-slate-900",
    green: "text-green-900",
    blue: "text-blue-900",
    yellow: "text-yellow-900",
    orange: "text-orange-900",
    pink: "text-pink-900",
    purple: "text-purple-900",
  };

  return (
    <div
      className={`${colorBack[color]}  ${badgeSize[size]} rounded-lg ${colorText[color]} m-6 flex justify-center items-center font-semibold`}
    >
      {IconComponent && <IconComponent />}
      {children}
    </div>
  );
}

export default Badges;
