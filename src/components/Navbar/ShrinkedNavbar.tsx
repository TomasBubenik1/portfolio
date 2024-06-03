export function ShrinkedNavbar() {
  const items = ["Home", "About", "Projects", "Contact me"];

  return (
    <div className="w-20 h-60 bg-transparent rounded-full border-2 border-purple-600 border-opacity-50 flex flex-col justify-center items-center gap-5 ">
      {items.map((item, i) => (
        <div
          key={i}
          className="w-8 h-8 bg-purple-600 rounded-full bg-opacity-50 "
        ></div>
      ))}
    </div>
  );
}
