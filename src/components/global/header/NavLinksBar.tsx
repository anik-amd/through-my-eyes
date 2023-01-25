// import NavLink from "./NavLink";

interface Props {
  title?: string;
}

const NavLinkBar = (props: Props) => {
  return (
    <div className="font-josefin font-bold flex justify-between mx-96">
      <div
        className={`${
          props.title == "Home" ? "border-b-2" : ""
        } inline hover:border-b-2 border-gray-300 pb-1 px-2`}
      >
        <a href="/">Home</a>
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
  );
};

export default NavLinkBar;
