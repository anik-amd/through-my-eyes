// import NavLink from "./NavLink";

import { useStore } from "@nanostores/react";
import { isDarkStore } from "../../../store";

import Dark from "../../../icons/Dark";
import Light from "../../../icons/Light";

interface Props {
  title?: string;
}

// TODO: not persistant

const NavLinksBar = (props: Props) => {
  const isDark = useStore(isDarkStore);
  console.log(isDark);

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
          <button
            className="inline"
            onClick={() => {
              if (isDark === true) {
                isDarkStore.set(false);
              } else {
                isDarkStore.set(true);
              }
            }}
          >
            {!isDark ? (
              <Dark className="w-5 h-5 inline pb-1" />
            ) : (
              <Light className="w-5 h-5 inline pb-1" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default NavLinksBar;
