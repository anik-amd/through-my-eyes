// import NavLink from "./NavLink";

import Dark from "../../../icons/dark";

interface Props {
  title?: string;
}

// TODO: should use localStorage?

const NavLinksBar = (props: Props) => {
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
          <button className="inline">
            <Dark className="w-5 h-5 inline pb-1" />
          </button>
        </div>
      </div>
    </>
  );
};

export default NavLinksBar;
