import React from "react";
import { Link } from "react-router-dom";
import route from "../../router/routes";

const Nav: React.FC = () => {
  return (
    <React.Fragment>
      {route.map((item) => {
        return (
          <>
            <Link className="link-back" to={item.url}>
              {item.label}
            </Link>
          </>
        );
      })}
    </React.Fragment>
  );
};

export default Nav;
