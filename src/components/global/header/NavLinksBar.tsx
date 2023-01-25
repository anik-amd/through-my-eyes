import NavLink from "./NavLink";

interface Props {
  title?: string;
}

const NavLinkBar = (props: Props) => {
  return (
    <div className="font-josefin font-bold flex justify-between mx-96">
      <div className={`${props.title == "Home" ? "border-b-2" : ""} inline`}>
        <NavLink href="/">Home</NavLink>
      </div>
      <div className={`${props.title == "About" ? "border-b-2" : ""} inline`}>
        <NavLink href="/about">About</NavLink>
      </div>
      <div className={`${props.title == "Contact" ? "border-b-2" : ""} inline`}>
        <NavLink href="/contact">Contact</NavLink>
      </div>
    </div>
  );
};

export default NavLinkBar;
