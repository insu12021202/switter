import styled from "styled-components";

const NavContainer = styled.div`
  display: flex;
  width: 100%;
  height: 30%;
  justify-content: center;
  align-items: end;
`;

const NavItem = styled.li`
  list-style: none;
  color: whitesmoke;
  margin: 20px;
  font-size: 20px;
  &:hover {
    font-size: 21px;
  }
`;

export { NavContainer, NavItem };
