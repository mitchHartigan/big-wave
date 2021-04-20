import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { Button } from "components/Button";

export const ScrollButton = (props) => {
  const { children } = props;

  return (
    <Link
      to={"scrollTarget"}
      spy={true}
      offset={-150}
      delay={0}
      duration={1300}
      smooth={true}
    >
      <Button>{children}</Button>
    </Link>
  );
};
