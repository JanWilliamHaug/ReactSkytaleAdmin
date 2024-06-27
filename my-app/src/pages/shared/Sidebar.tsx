// src/pages/shared/Sidebar.tsx
import React from 'react';
import { Box, VStack, Text, Image } from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';
import groupIcon from '@/assets/scss/images/Group.svg';
import userIcon from '@/assets/scss/images/user.svg';
import slidersIcon from '@/assets/scss/images/Sliders.svg';
import group57Icon from '@/assets/scss/images/Group57.svg';

const Sidebar: React.FC = () => {
  return (
    <Box width="250px" backgroundColor="var(--Ocean-3, #212D63)" color="white" height="100vh">
      <VStack align="start" spacing={0}>
        <NavLink
          to="/users"
          className={({ isActive }) => (isActive ? `${styles.link} ${styles.activeLink}` : styles.link)}
          style={{ borderTop: '3px solid var(--Ocean-2, #1E2455)' }}
        >
          <Image src={userIcon} alt="User Icon" boxSize="24px" mr="8px" />
          <Text>Brukere</Text>
        </NavLink>
        <NavLink
          to="/groups"
          className={({ isActive }) => (isActive ? `${styles.link} ${styles.activeLink}` : styles.link)}
        >
          <Image src={groupIcon} alt="Group Icon" boxSize="24px" mr="8px" />
          <Text>Grupper</Text>
        </NavLink>
        <NavLink
          to="/configurations"
          className={({ isActive }) => (isActive ? `${styles.link} ${styles.activeLink}` : styles.link)}
        >
          <Image src={slidersIcon} alt="Configurations Icon" boxSize="24px" mr="8px" />
          <Text>Konfigurasjoner</Text>
        </NavLink>
        <NavLink
          to="/licenses"
          className={({ isActive }) => (isActive ? `${styles.link} ${styles.activeLink}` : styles.link)}
        >
          <Image src={group57Icon} alt="Licenses Icon" boxSize="24px" mr="8px" />
          <Text>Lisens</Text>
        </NavLink>
      </VStack>
    </Box>
  );
};

export default Sidebar;
