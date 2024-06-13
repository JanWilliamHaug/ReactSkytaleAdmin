// src/pages/Users/UsersTable/SampleTable.tsx
import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Button, Icon, Flex } from '@chakra-ui/react';
import { FaPen, FaTextWidth } from 'react-icons/fa';
import { users } from '../Data/userData';
import './SampleTable.css';

const SampleTable: React.FC = () => {
  return (
    <Box className="table-container">
      <Table variant="simple" colorScheme="blue">
        <Thead>
          <Tr>
            <Th>Navn</Th>
            <Th>Ettenavn</Th>
            <Th>Brukernavn</Th>
            <Th>Gruppe</Th>
            <Th>Konfigurasjon</Th>
            <Th>Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user, index) => (
            <Tr key={index}>
              <Td>{user.firstName}</Td>
              <Td>{user.lastName}</Td>
              <Td>{user.username}</Td>
              <Td>
                <Button variant="link" colorScheme="white">
                  {user.group}
                </Button>
              </Td>
              <Td>
                <Button variant="link" colorScheme="white">
                  {user.config}
                </Button>
              </Td>
              <Td>
                <Flex>
                  <Button size="sm" className="table-buttons" mr="2">
                    Button
                  </Button>
                  <Button size="sm" className="table-buttons" mr="2" leftIcon={<Icon as={FaPen} />}>
                    Rediger
                  </Button>
                  <Button size="sm" className="table-buttons" leftIcon={<Icon as={FaTextWidth} />}>
                    Tekst
                  </Button>
                </Flex>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default SampleTable;
