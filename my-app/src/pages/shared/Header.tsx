import React from 'react';
import { Flex, Text, Image } from '@chakra-ui/react';
import logo from '@/assets/scss/images/logo.svg';
import userIcon from '@/assets/scss/images/user-icon.svg';
import './Header.css';

const Header: React.FC = () => {
  return (
    <Flex
      className="header"
    >
      <Flex alignItems="center">
        <Image src={logo} alt="Logo" height="44px" />
        <Text
          className="header-title"
        >
          Admin
        </Text>
      </Flex>
      <Flex alignItems="center">
        <Image src={userIcon} alt="User Icon" height="39px" />
        <Text className="header-email">
          wh@skytale.no
        </Text>
        <Text className="header-logout">
          Logg ut
        </Text>
      </Flex>
    </Flex>
  );
};

export default Header;
