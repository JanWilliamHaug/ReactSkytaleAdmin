// src/pages/shared/Header.tsx
import React from 'react';
import { Flex, Text, Image } from '@chakra-ui/react';
import logo from '@/assets/scss/images/logo.svg';
import userIcon from '@/assets/scss/images/user-icon.svg';
import './Header.css';

const Header: React.FC = () => {
  return (
    <Flex className="header">
      <Flex className="logo">
        <Image src={logo} alt="Logo" />
        <Text className="title">Admin</Text>
      </Flex>
      <Flex className="user-info">
        <Image src={userIcon} alt="User Icon" />
        <Text className="email">wh@skytale.no</Text>
        <Text className="logout">Logg ut</Text>
      </Flex>
    </Flex>
  );
};

export default Header;
