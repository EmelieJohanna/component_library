function Cards({ href, imgAlt, imgSrc, children }) {
  return (
    <div className="rounded-xl border-slate-900 shadow-xl w-60 h-auto m-6">
      <img src={imgSrc} alt={imgAlt} className="w-full h-full rounded-t-xl" />
      <div className="m-4">
        <a href={href} className="hover:underline">
          <h2 className="pb-4">{href}</h2>
        </a>
        <p>{children}</p>
      </div>
    </div>
  );
}

export default Cards;
