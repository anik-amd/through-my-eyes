// import NavLink from "./NavLink";

interface Props {
  title?: string;
}

// TODO: should use localStorage?

const NavLinkBar = (props: Props) => {
  return (
    <>
      <div className="sticky top-2 pt-4 shadow-md font-josefin font-bold px-10 rounded-md mx-10 md:mx-96 bg-white">
        <div className="flex justify-around">
          <div
            className={`${
              props.title == "Gallery" ? "border-b-2" : ""
            } inline hover:border-b-2 border-gray-300 pb-1 px-2`}
          >
            <a href="/">Gallery</a>
          </div>
          <div
            className={`${
              props.title == "About" ? "border-b-2" : ""
            } inline hover:border-b-2 border-gray-300 pb-1 px-2`}
          >
            <a href="/about">About</a>
          </div>
          <div
            className={`${
              props.title == "Contact" ? "border-b-2" : ""
            } inline hover:border-b-2 border-gray-300 pb-1 px-2`}
          >
            <a href="/contact">Contact</a>
          </div>
        </div>
        {/* // TODO: fix position */}
        {/* <div className="inline border-gray-300 pb-1 w-1/5">
          <span>🌙</span>
        </div> */}
      </div>
    </>
  );
};

export default NavLinkBar;
