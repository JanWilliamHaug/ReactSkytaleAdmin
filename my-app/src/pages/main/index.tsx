// src/pages/main/index.tsx
import React from 'react';
import { Box, Flex, Text, Button } from '@chakra-ui/react';

const MainPage: React.FC = () => {
  return (
    <Box>
      <Flex justifyContent="space-between" alignItems="center" mb="20px">
        <Text color="white" fontSize="24px" fontWeight="bold">Brukere</Text>
        <Button backgroundColor="#FFF" color="#212D63" fontWeight="bold">Ny bruker</Button>
      </Flex>
      <Flex justifyContent="space-between" mb="20px">
        <Text color="white">Antall brukere <span style={{ color: 'white' }}>14 596</span></Text>
        <Text color="white">Fordelt i antall grupper <span style={{ color: 'white' }}>38</span></Text>
        <Text color="white">Brukere uten gruppe <span style={{ color: 'white' }}>10</span></Text>
        <Text color="white">Nye brukere <span style={{ color: 'white' }}>298</span></Text>
        <Text color="white">Inaktive brukere <span style={{ color: 'white' }}>40</span></Text>
      </Flex>
    </Box>
  );
};

export default MainPage;
