// src/pages/shared/Header.tsx
import React from 'react';
import { Flex, Text, Image } from '@chakra-ui/react';
import logo from '@/assets/scss/images/logo.svg';
import userIcon from '@/assets/scss/images/user-icon.svg';

const Header: React.FC = () => {
  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      backgroundColor="var(--Ocean-3, #212D63)"
      padding="10px 20px"
      height="150px" // Adjusted height
    >
      <Flex alignItems="center">
        <Image src={logo} alt="Logo" height="44px" />
        <Text
          color="var(--White, #FFF)"
          fontFamily="Inter"
          fontSize="21px"
          fontWeight="400"
          textTransform="uppercase"
          ml="10px"
        >
          Admin
        </Text>
      </Flex>
      <Flex alignItems="center">
        <Image src={userIcon} alt="User Icon" height="39px" />
        <Text color="var(--White, #FFF)" ml="10px">
          wh@skytale.no
        </Text>
        <Text color="var(--White, #FFF)" ml="10px">
          Logg ut
        </Text>
      </Flex>
    </Flex>
  );
};

export default Header;
