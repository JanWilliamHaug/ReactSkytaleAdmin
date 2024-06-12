import React from 'react';
import { Box, Flex, Text, Button, Image } from '@chakra-ui/react';
import userIcon from '@/assets/scss/images/user.svg';
import groupIcon from '@/assets/scss/images/Group.svg';
import varselIcon from '@/assets/scss/images/Varsel.svg';
import { FaUserSlash, FaUserPlus } from 'react-icons/fa';
import './Users.css';

const Users: React.FC = () => {
  return (
    <Box className="users-page">
      <Flex justifyContent="space-between" alignItems="center" mb="20px">
        <Text className="page-title">Brukere</Text>
        <Button className="new-user-button">Ny bruker</Button>
      </Flex>
      <Flex justifyContent="space-between" mb="20px" alignItems="center">
        <Flex alignItems="center" justifyContent="center" flex="1">
          <Image src={userIcon} alt="User Icon" className="icon" />
          <Text className="user-info">Antall brukere <span>14 596</span></Text>
        </Flex>
        <Flex alignItems="center" justifyContent="center" flex="1">
          <Image src={groupIcon} alt="Group Icon" className="icon" />
          <Text className="user-info">Fordelt i antall grupper <span>38</span></Text>
        </Flex>
        <Flex alignItems="center" justifyContent="center" flex="1">
          <FaUserSlash className="icon" />
          <Text className="user-info">Brukere uten gruppe <span>10</span></Text>
        </Flex>
        <Flex alignItems="center" justifyContent="center" flex="1">
          <FaUserPlus className="icon" />
          <Text className="user-info">Nye brukere <span>298</span></Text>
        </Flex>
        <Flex alignItems="center" justifyContent="center" flex="1">
          <Image src={varselIcon} alt="Varsel Icon" className="icon" />
          <Text className="user-info">Inaktive brukere <span>40</span></Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Users;
