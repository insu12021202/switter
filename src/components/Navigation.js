import React from "react";
import { Link } from "react-router-dom";
import { NavContainer, NavItem } from "./Navigation_style";

const Navigation = ({ userObj }) => (
  <NavContainer>
    <NavItem>
      <Link to="/">Home</Link>
    </NavItem>
    <NavItem>
      <Link to="/profile">
        {userObj?.displayName?.length
          ? `${userObj.displayName}'s Profile`
          : "Profile"}
      </Link>
    </NavItem>
  </NavContainer>
);

export default Navigation;
