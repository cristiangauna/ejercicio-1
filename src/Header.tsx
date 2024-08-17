import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #000;
`;

const Logo = styled.div`
  font-size: 24px;
  color: #fff;
`;

const SearchBar = styled.input`
  width: 300px;
  padding: 10px;
  border-radius: 20px;
  border: none;
`;

const ProfilePicture = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #888;
`;

function Header() {
  return (
    <HeaderWrapper>
      <Logo>Music</Logo>
      <SearchBar type="text" placeholder="Search..." />
      <ProfilePicture />
    </HeaderWrapper>
  );
}

export default Header;