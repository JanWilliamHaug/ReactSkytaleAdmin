import React from 'react';
import { Box, Flex, Text, Button, Image, Icon } from '@chakra-ui/react';
import userIcon from '@/assets/scss/images/user.svg';
import groupIcon from '@/assets/scss/images/Group.svg';
import varselIcon from '@/assets/scss/images/Varsel.svg';
import { FaUserSlash, FaUserPlus } from 'react-icons/fa';
import './Users.css'; // Import the CSS file

const iconSize = "30px"; // Define a constant for icon size
const smallerIconSize = "26px"; // Smaller icon size for better consistency

const MainPage: React.FC = () => {
  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center" mb="20px" mx="10%">
        <Text color="white" fontSize="24px" fontWeight="bold">Brukere</Text>
        <Button className="new-user-button">Ny bruker</Button> {/* Apply the className */}
      </Flex>
      <Flex justifyContent="space-between" alignItems="center" mb="20px" mx="10%">
        <Flex alignItems="center">
          <Image src={userIcon} alt="User Icon" boxSize={iconSize} mr="8px" />
          <Text color="white">Antall brukere <span style={{ color: 'white' }}>14 596</span></Text>
        </Flex>
        <Flex alignItems="center">
          <Image src={groupIcon} alt="Group Icon" boxSize={iconSize} mr="8px" />
          <Text color="white">Fordelt i antall grupper <span style={{ color: 'white' }}>38</span></Text>
        </Flex>
        <Flex alignItems="center">
          <Icon as={FaUserSlash} color="white" boxSize={smallerIconSize} mr="8px" />
          <Text color="white">Brukere uten gruppe <span style={{ color: 'white' }}>10</span></Text>
        </Flex>
        <Flex alignItems="center">
          <Icon as={FaUserPlus} color="white" boxSize={smallerIconSize} mr="8px" />
          <Text color="white">Nye brukere <span style={{ color: 'white' }}>298</span></Text>
        </Flex>
        <Flex alignItems="center">
          <Image src={varselIcon} alt="Varsel Icon" boxSize={iconSize} mr="8px" />
          <Text color="white">Inaktive brukere <span style={{ color: 'white' }}>40</span></Text>
        </Flex>
      </Flex>
      {/* Add other components or content here */}
    </Box>
  );
};

export default MainPage;
