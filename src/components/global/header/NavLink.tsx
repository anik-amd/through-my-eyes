import React, { useState } from "react";

export interface Props {
  href: string;
  children?: React.ReactNode;
}

const NavLink = (props: Props) => {
  const [isActive, setIsActive] = useState(false);

  // const handleClick = (event: React.MouseEvent) => {
  //   setIsActive((current) => !current);
  //   // event.preventDefault();
  // };

  return (
    <a
      // className={`hover:border-b-2 border-gray-300`}
      // onClick={handleClick}
      href={props.href}
    >
      {props.children}
    </a>
  );
};

export default NavLink;
