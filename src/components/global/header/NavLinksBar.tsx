import { useState, useEffect } from "react";

interface Props {
  title?: string;
}

const NavLinksBar = (props: Props) => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") ?? "light");

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <div className="sticky top-2 flex justify-center">
        <div className="inline w-fit pt-4 pb-2 shadow-md font-josefin font-bold px-4 md:px-8 rounded-md bg-white">
          <div
            className={`${
              props.title == "Gallery" ? "border-b-4" : ""
            } inline hover:border-b-4 border-gray-300 pb-2 px-2 md:px-4 mx-2 md:mx-4`}
          >
            <a href="/">Gallery</a>
          </div>
          <div
            className={`${
              props.title == "About" ? "border-b-4" : ""
            } inline hover:border-b-4 border-gray-300 pb-2 px-2 md:px-4 mx-2 md:mx-4`}
          >
            <a href="/about">About</a>
          </div>
          <div
            className={`${
              props.title == "Contact" ? "border-b-4" : ""
            } inline hover:border-b-4 border-gray-300 pb-2 px-2 md:px-4 mx-2 md:mx-4`}
          >
            <a href="/contact">Contact</a>
          </div>
          // TODO: not working with svg?
          {/* <button onClick={handleClick}>
            {theme === "light" ? (
              <Dark className="w-5 h-5 inline pb-1" />
            ) : (
              <Light className="w-5 h-5 inline pb-1" />
            )}
          </button> */}
          <button onClick={handleClick}>
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>
      </div>
    </>
  );
};

export default NavLinksBar;
