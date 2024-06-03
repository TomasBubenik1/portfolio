export function ExpandedNavbar() {
  const items = ["Home", "About", "Projects", "Contact me"];
  return (
    <div className="w-64 h-72 bg-transparent rounded-[2rem] border-2 border-purple-600 border-opacity-50 flex flex-col justify-center items-center gap-5 ">
      {items.map((item, i) => (
        <button
          key={i}
          className="bg-purple-600 w-5/6 h-12 rounded-full bg-opacity-50 hover:bg-opacity-70 "
        >
          <p className="text-white text-start ml-5 text-2xl font-light ">
            {item}
          </p>
        </button>
      ))}
    </div>
  );
}
