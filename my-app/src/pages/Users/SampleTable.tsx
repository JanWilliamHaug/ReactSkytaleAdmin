// SampleTable.tsx
import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Button, Icon, Flex } from '@chakra-ui/react';
import { FaPen, FaTextWidth } from 'react-icons/fa';

const SampleTable: React.FC = () => {
  const users = [
    { firstName: 'Andrea', lastName: 'Astevoll', username: 'Bruker', group: '21', config: 'Konfigurasjon 2' },
    { firstName: 'Ahmed', lastName: 'Omar', username: 'AHAR', group: 'Gruppe 13', config: 'Konfigurasjon 2' },
    { firstName: 'Amadeus', lastName: 'Frank', username: 'AMNK', group: '21', config: 'Konfigurasjon 2' },
    { firstName: 'Birger Sebastian', lastName: 'Jørgensen', username: 'BISN', group: 'Gruppe 4', config: 'Konfigurasjon 2' },
    { firstName: 'Bjarne', lastName: 'Mollebeck', username: 'AHAR', group: '21', config: 'Konfigurasjon 2' },
    { firstName: 'Beate', lastName: 'Arntsen', username: 'BJEN', group: 'Gruppe 7', config: 'Konfigurasjon 2' },
    { firstName: 'Clara', lastName: 'Aukrust', username: 'CLAN', group: 'Gruppe 23', config: 'Konfigurasjon 2' },
    { firstName: 'Christian', lastName: 'Børge Beck', username: 'CHCK', group: '21', config: 'Konfigurasjon 2' },
    { firstName: 'Daniel', lastName: 'Jørgensen', username: 'DAEN', group: 'Gruppe 3', config: 'Konfigurasjon 2' },
    { firstName: 'Ingvil', lastName: 'Arntsen', username: 'INEN', group: 'Gruppe 2', config: 'Konfigurasjon 2' },
    { firstName: 'Jenny', lastName: 'Aste Hansenvoll', username: 'JELL', group: 'Gruppe 8', config: 'Konfigurasjon 2' },
    { firstName: 'Knut', lastName: 'Steinberg', username: 'KNRG', group: 'Gruppe 2', config: 'Konfigurasjon 2' },
    { firstName: 'Solveig', lastName: 'Villeback', username: 'SOCK', group: 'Gruppe 1', config: 'Konfigurasjon 2' },
    { firstName: 'Øystein', lastName: 'Kvinge Jensen', username: 'ØYEN', group: 'Gruppe 7', config: 'Konfigurasjon 2' },
  ];

  return (
    <Box width="90%" mx="auto" mt="20px">
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
                <Button variant="link" colorScheme="blue">
                  {user.group}
                </Button>
              </Td>
              <Td>
                <Button variant="link" colorScheme="blue">
                  {user.config}
                </Button>
              </Td>
              <Td>
                <Flex>
                  <Button size="sm" colorScheme="blue" mr="2">
                    Button
                  </Button>
                  <Button size="sm" colorScheme="blue" mr="2" leftIcon={<Icon as={FaPen} />}>
                    Rediger
                  </Button>
                  <Button size="sm" colorScheme="blue" leftIcon={<Icon as={FaTextWidth} />}>
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
