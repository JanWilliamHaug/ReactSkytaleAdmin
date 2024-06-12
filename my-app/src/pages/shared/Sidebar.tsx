// src/pages/shared/Sidebar.tsx
import React from 'react';
import { Box, VStack, Text, Image } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import groupIcon from '@/assets/scss/images/Group.svg';
import userIcon from '@/assets/scss/images/user.svg';
import slidersIcon from '@/assets/scss/images/Sliders.svg';
import licenseIcon from '@/assets/scss/images/Group57.svg';
import './Sidebar.css';

const Sidebar: React.FC = () => {
  const linkStyle = {
    display: 'flex',
    width: '100%',
    padding: '9px 0px 10px 20px',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexShrink: 0,
    borderBottom: '3px solid var(--Ocean-2, #1E2455)',
    background: 'var(--Ocean-3, #212D63)',
  };

  return (
    <Box className="sidebar-container">
      <VStack align="start" spacing={0}>
        <NavLink to="/groups" style={{ ...linkStyle, borderTop: '3px solid var(--Ocean-2, #1E2455)' }}>
          <Image src={groupIcon} alt="Group Icon" className="sidebar-icon" />
          <Text>Grupper</Text>
        </NavLink>
        <NavLink to="/users" style={linkStyle}>
          <Image src={userIcon} alt="User Icon" className="sidebar-icon" />
          <Text>Brukere</Text>
        </NavLink>
        <NavLink to="/configurations" style={linkStyle}>
          <Image src={slidersIcon} alt="Configurations Icon" className="sidebar-icon" />
          <Text>Konfigurasjoner</Text>
        </NavLink>
        <NavLink to="/licenses" style={linkStyle}>
          <Image src={licenseIcon} alt="License Icon" className="sidebar-icon" />
          <Text>Lisens</Text>
        </NavLink>
      </VStack>
    </Box>
  );
};

export default Sidebar;
