import React from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';
import Sidebar from '@/pages/shared/Sidebar';
import Header from '@/pages/shared/Header';
import './Layout.css'; // Import the CSS file

const Layout: React.FC = () => {
  return (
    <Flex direction="column" minHeight="100vh" width="100vw">
      <Header />
      <Flex flex="1" overflow="hidden">
        <Sidebar />
        <Box className="sidebar-separation"></Box>
        <Box className="content-area">
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Layout;
