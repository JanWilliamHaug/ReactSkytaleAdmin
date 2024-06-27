import React, { useState } from 'react';
import { Box, Flex, Text, Button, Image, Input, InputGroup, InputLeftElement, Icon } from '@chakra-ui/react';
import userIcon from '@/assets/scss/images/user.svg';
import { FaSearch } from 'react-icons/fa';
import { IoIosRemoveCircle } from 'react-icons/io';
import SampleTable from '@/pages/Users/UsersTable/SampleTable';
import NewUserCard from './NewUserCard';
import groupsData from '@/pages/Groups/Data/groupsData';
import './Users.css';
import { PlusCircleIcon } from '../shared/PlusCircleIcon';

const Users: React.FC<{ users: { firstName: string; lastName: string; username: string; role: string; }[] }> = ({ users }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddUser, setShowAddUser] = useState(false);
  const [markedUsers, setMarkedUsers] = useState<string[]>([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleMarkAll = () => {
    if (markedUsers.length === filteredUsers.length) {
      setMarkedUsers([]);
    } else {
      setMarkedUsers(filteredUsers.map(user => user.username));
    }
  };

  const handleDeleteMarkedUsers = () => {
    setShowConfirmation(true);
  };

  const handleConfirmationResponse = (response: boolean) => {
    if (response) {
      // Perform the delete action here
      console.log('Deleting users:', markedUsers);
      setMarkedUsers([]); // Clear the marked users after deletion
    }
    setShowConfirmation(false);
  };

  const filteredUsers = users.filter((user) =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box className="users-page content-area" flex="1" display="flex" flexDirection="column">
      <Flex justifyContent="space-between" alignItems="center" mb="20px">
        <Text className="page-title">Brukere</Text>
        <Button className="new-user-button" onClick={() => setShowAddUser(true)}>
          <PlusCircleIcon />
          Ny bruker
        </Button>
      </Flex>
      <Flex alignItems="center" mb="20px">
        <Image src={userIcon} alt="User Icon" className="icon" />
        <Text className="user-info">Antall brukere <span>{users.length}</span></Text>
      </Flex>
      <Flex justifyContent="flex-start" mb="20px">
        <InputGroup className="search-bar">
          <InputLeftElement pointerEvents="none">
            <FaSearch color="gray.300" />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Søk i listen"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </InputGroup>
      </Flex>
      <Flex alignItems="center" mb="20px">
        <Button className="mark-all-button" onClick={handleMarkAll} width="160px">
          {markedUsers.length === filteredUsers.length ? 'Opphev merking' : 'Merk alle'}
        </Button>
        {markedUsers.length > 0 && (
          <Button
            className="delete-marked-users-button"
            onClick={handleDeleteMarkedUsers}
            leftIcon={<Icon as={IoIosRemoveCircle} boxSize={5} />}
          >
            Slett brukere
          </Button>
        )}
      </Flex>
      {showConfirmation && (
        <div className="confirmation-popup">
          <p>Er du sikker på at du vil slette alle disse brukerne?</p>
          <button onClick={() => handleConfirmationResponse(true)}>Ja</button>
          <button onClick={() => handleConfirmationResponse(false)}>Nei</button>
        </div>
      )}
      <SampleTable users={filteredUsers} markedUsers={markedUsers} setMarkedUsers={setMarkedUsers} />
      {showAddUser && (
        <NewUserCard onClose={() => setShowAddUser(false)} groups={groupsData} />
      )}
    </Box>
  );
};

export default Users;
