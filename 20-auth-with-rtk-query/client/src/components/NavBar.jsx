import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import {useLogoutUserMutation} from '../app/services/userApi'

function NavBar({ refetch, reset }) {
  
  const [logoutUser] = useLogoutUserMutation()
  
  function handleLogoutClick() {
    logoutUser()
    // reset()
    // refetch()
    // fetch('/api/logout', {method: 'DELETE'})
  }

  return (
    <Wrapper>
      <Logo>
        <Link to="/">Reciplease</Link>
      </Logo>
      <Nav>
        <Button as={Link} to="/new">
          New Recipe
        </Button>
        <Button variant="outline" onClick={handleLogoutClick}>
          Logout
        </Button>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;

const Logo = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 3rem;
  color: deeppink;
  margin: 0;
  line-height: 1;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;
  position: absolute;
  right: 8px;
`;

export default NavBar;
