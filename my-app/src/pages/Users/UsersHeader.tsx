// src/pages/Users/UsersOverview.tsx
import React from 'react';
import { Box, Flex, Text, Button, Image, Icon } from '@chakra-ui/react';
import userIcon from '@/assets/scss/images/user.svg';
import groupIcon from '@/assets/scss/images/Group.svg';
import varselIcon from '@/assets/scss/images/Varsel.svg';
import { FaUserSlash, FaUserPlus } from 'react-icons/fa';
import './Users.css';

const iconSize = "30px"; // Define a constant for icon size
const smallerIconSize = "26px"; // Smaller icon size for better consistency

const UsersOverview: React.FC = () => {
  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center" mb="20px">
        <Text className="page-title">Brukere</Text>
        <Button className="new-user-button">Ny bruker</Button>
      </Flex>
      
    </Box>
  );
};

export default UsersOverview;
