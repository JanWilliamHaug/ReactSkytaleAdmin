// src/pages/main/index.tsx
import React from 'react';
import { Flex, Text, Button } from '@chakra-ui/react';

const MainPage: React.FC = () => {
  return (
    <Flex direction="column" height="100vh">
      <Flex justifyContent="space-between" alignItems="center" marginBottom="20px">
        <Text fontSize="30px" fontWeight="700" color="white">Brukere</Text>
        <Button backgroundColor="var(--White, #FFF)" color="var(--Ocean-3, #212D63)" fontWeight="bold">
          Ny bruker
        </Button>
      </Flex>
      <Flex justifyContent="space-between" marginBottom="20px">
        <Text color="white">Antall brukere <span style={{ color: '#14F596' }}>14 596</span></Text>
        <Text color="white">Fordelt i antall grupper <span style={{ color: '#14F596' }}>38</span></Text>
        <Text color="white">Brukere uten gruppe <span style={{ color: '#14F596' }}>10</span></Text>
        <Text color="white">Nye brukere <span style={{ color: '#14F596' }}>298</span></Text>
        <Text color="white">Inaktive brukere <span style={{ color: '#14F596' }}>40</span></Text>
      </Flex>
    </Flex>
  );
};

export default MainPage;
