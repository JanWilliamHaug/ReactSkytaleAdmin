import React from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td, Button, Icon, Flex, Checkbox } from '@chakra-ui/react';
import { FaPen } from 'react-icons/fa';
import { IoIosRemoveCircle } from "react-icons/io";
import './SampleTable.css';

interface User {
  firstName: string;
  lastName: string;
  username: string;
  role: string;
}

interface SampleTableProps {
  users: User[];
  markedUsers: string[];
  setMarkedUsers: React.Dispatch<React.SetStateAction<string[]>>;
}

const SampleTable: React.FC<SampleTableProps> = ({ users, markedUsers, setMarkedUsers }) => {

  const handleMarkUser = (username: string) => {
    setMarkedUsers((prev) =>
      prev.includes(username) ? prev.filter((u) => u !== username) : [...prev, username]
    );
  };

  return (
    <Box className="table-container">
      <Table variant="simple" colorScheme="blue">
        <Thead>
          <Tr>
            <Th color="white"></Th> {/* Empty header for the checkbox column */}
            <Th color="white">Navn</Th>
            <Th color="white">Etternavn</Th>
            <Th color="white">Brukernavn</Th>
            <Th color="white">Rolle</Th>
            <Th color="white">Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user, index) => (
            <Tr key={index}>
              <Td>
                <Checkbox
                  isChecked={markedUsers.includes(user.username)}
                  onChange={() => handleMarkUser(user.username)}
                />
              </Td>
              <Td>{user.firstName}</Td>
              <Td>{user.lastName}</Td>
              <Td>{user.username}</Td>
              <Td>{user.role}</Td>
              <Td>
                <Flex>
                  <Button
                    size="sm"
                    bg="white"
                    color="#294285"
                    border="1px solid var(--Ocean-5, #3B76B0)"
                    borderRadius="20px"
                    mr="2"
                    _hover={{ backgroundColor: "var(--Ocean-4, #294285)", color: "white" }}
                  >
                    Profil
                  </Button>
                  <Button size="sm" bg="#294285" color="white" borderRadius="20px" mr="2" leftIcon={<Icon as={FaPen} />}>
                    Rediger
                  </Button>
                  <Button size="sm" bg="#FA0303" color="white" borderRadius="20px" leftIcon={<Icon as={IoIosRemoveCircle} boxSize={5} />}>
                    Slett
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
