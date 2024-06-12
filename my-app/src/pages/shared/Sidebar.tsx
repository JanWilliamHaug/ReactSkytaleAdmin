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
  return (
    <Box className="sidebar-container">
      <VStack align="start" spacing={0}>
        <NavLink to="/groups" className="sidebar-link sidebar-link-top">
          <Image src={groupIcon} alt="Group Icon" className="sidebar-icon" />
          <Text>Grupper</Text>
        </NavLink>
        <NavLink to="/users" className="sidebar-link">
          <Image src={userIcon} alt="User Icon" className="sidebar-icon" />
          <Text>Brukere</Text>
        </NavLink>
        <NavLink to="/configurations" className="sidebar-link">
          <Image src={slidersIcon} alt="Sliders Icon" className="sidebar-icon" />
          <Text>Konfigurasjoner</Text>
        </NavLink>
        <NavLink to="/licenses" className="sidebar-link">
          <Image src={licenseIcon} alt="License Icon" className="sidebar-icon" />
          <Text>Lisens</Text>
        </NavLink>
      </VStack>
    </Box>
  );
};

export default Sidebar;
