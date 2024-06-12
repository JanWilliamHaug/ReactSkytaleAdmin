// src/pages/layout/index.tsx
import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from '@/pages/shared/Sidebar';
import Header from '@/pages/shared/Header';

const Layout: React.FC = () => {
  return (
    <Flex direction="column" height="100vh" width="100vw">
      <Header />
      <Flex flex="1" overflow="hidden">
        <Sidebar />
        <Box flex="1" padding="20px" backgroundColor="#1E2455" color="white" overflow="auto">
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Layout;
