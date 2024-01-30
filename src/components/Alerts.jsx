function Alerts({ color, icon: IconComponent, children }) {
  return (
    <div
      className={`${color} w-1/2 m-6 p-5 text-slate-50 rounded-lg flex items-center place-content-center`}
    >
      {IconComponent && <IconComponent />}
      {children}
    </div>
  );
}

export default Alerts;
