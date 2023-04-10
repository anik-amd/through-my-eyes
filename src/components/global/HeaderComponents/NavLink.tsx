import React from "react";

export interface Props {
  href: string;
  children?: React.ReactNode;
}

const NavLink = (props: Props) => {
  return <a href={props.href}>{props.children}</a>;
};

export default NavLink;
