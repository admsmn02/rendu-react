import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 20px;
 background-color: #f8f9fa;
 box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.img`
 height: 40px;
`;

const Nav = styled.nav`
 margin-left: 20px;
`;

const NavItem = styled.a`
 margin-right: 20px;
 color: #333;
 text-decoration: none;

 &:hover {
    color: #007bff;
 }
`;

export default function Header () {
 return (
    <StyledHeader>
      <Logo src="/path/to/your/logo.png" alt="Your logo" />
      <Nav>
        <NavItem href="#">Home</NavItem>
        <NavItem href="#">About</NavItem>
        <NavItem href="#">Contact</NavItem>
      </Nav>
    </StyledHeader>
 );
};
