import React from "react";
import { Link } from "react-router-dom";

import { Button } from "components/Button";

/**
 * Button wrapped in a Link Element.
 * @param props
 * @param props.to - route the Link points to.
 */
export const LinkButton = (props) => {
  return (
    <Link to={props.to}>
      <Button>{props.children}</Button>
    </Link>
  );
};
