// src/pages/shared/Sidebar.tsx
import React from 'react';
import { Box, VStack, Text } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const linkStyle = {
    display: 'flex',
    width: '100%', // Ensure the link takes the full width of the sidebar
    padding: '9px 0px 10px 20px',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexShrink: 0,
    borderBottom: '3px solid var(--Ocean-2, #1E2455)',
    background: 'var(--Ocean-3, #212D63)',
  };

  return (
    <Box width="250px" backgroundColor="var(--Ocean-3, #212D63)" color="white" height="100vh">
      <VStack align="start" spacing={0}>
        <NavLink to="/groups" style={{ ...linkStyle, borderTop: '3px solid var(--Ocean-2, #1E2455)' }}>
          <Text>Grupper</Text>
        </NavLink>
        <NavLink to="/users" style={linkStyle}>
          <Text>Brukere</Text>
        </NavLink>
        <NavLink to="/configurations" style={linkStyle}>
          <Text>Konfigurasjoner</Text>
        </NavLink>
        <NavLink to="/licenses" style={linkStyle}>
          <Text>Lisens</Text>
        </NavLink>
      </VStack>
    </Box>
  );
};

export default Sidebar;
