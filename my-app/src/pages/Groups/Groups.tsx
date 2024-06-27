import React, { useState } from 'react';
import { Box, Flex, Text, Button, Input, InputGroup, InputLeftElement, Table, Thead, Tbody, Tr, Th, Td, Image, Icon, Checkbox } from '@chakra-ui/react';
import { SearchIcon } from '@chakra-ui/icons';
import { FaPen } from 'react-icons/fa';
import { IoIosRemoveCircle } from "react-icons/io";
import groupIcon from '@/assets/scss/images/Group.svg';
import './Groups.css';
import groupsData from './Data/groupsData'; // Ensure the correct import path
import { PlusCircleIcon } from '../shared/PlusCircleIcon';
import NewGroupCard from './NewGroupCard'; // Import NewGroupCard

const Groups: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showNewGroupCard, setShowNewGroupCard] = useState(false);
  const [markedGroups, setMarkedGroups] = useState<string[]>([]);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredGroups = groupsData.filter((group) =>
    group.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    group.config.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleMarkAll = () => {
    if (markedGroups.length === filteredGroups.length) {
      setMarkedGroups([]);
    } else {
      setMarkedGroups(filteredGroups.map(group => group.name));
    }
  };

  const handleDeleteMarkedGroups = () => {
    setShowConfirmation(true);
  };

  const handleConfirmationResponse = (response: boolean) => {
    if (response) {
      // Perform the delete action here
      console.log('Deleting groups:', markedGroups);
      setMarkedGroups([]); // Clear the marked groups after deletion
    }
    setShowConfirmation(false);
  };

  const handleNewGroupClick = () => {
    setShowNewGroupCard(true);
  };

  const handleCloseNewGroupCard = () => {
    setShowNewGroupCard(false);
  };

  return (
    <Box className="groups-page">
      <Flex justifyContent="space-between" alignItems="center" mb="20px">
        <Text className="page-title">Grupper</Text>
        <Button className="new-group-button" onClick={handleNewGroupClick}>
          <PlusCircleIcon />
          Ny gruppe
        </Button>
      </Flex>
      <Flex alignItems="center" mb="20px">
        <Image src={groupIcon} alt="Group Icon" className="icon" />
        <Text className="group-info">Antall grupper <span>{groupsData.length}</span></Text>
      </Flex>
      <Flex justifyContent="flex-start" mb="20px">
        <InputGroup className="search-bar">
          <InputLeftElement pointerEvents="none">
            <SearchIcon color="gray.300" />
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
          {markedGroups.length === filteredGroups.length ? 'Opphev merking' : 'Merk alle'}
        </Button>
        {markedGroups.length > 0 && (
          <Button
            className="delete-marked-groups-button"
            onClick={handleDeleteMarkedGroups}
            leftIcon={<Icon as={IoIosRemoveCircle} boxSize={5} />}
          >
            Slett grupper
          </Button>
        )}
      </Flex>
      {showConfirmation && (
        <div className="confirmation-popup">
          <p>Er du sikker på at du vil slette alle disse gruppene?</p>
          <button onClick={() => handleConfirmationResponse(true)}>Ja</button>
          <button onClick={() => handleConfirmationResponse(false)}>Nei</button>
        </div>
      )}
      <Box width="100%" mx="auto" mt="20px">
        <Table variant="simple" colorScheme="blue">
          <Thead>
            <Tr>
              <Th color="white"></Th> {/* Empty header for the checkbox column */}
              <Th color="white">Navn</Th>
              <Th color="white">Medlemmer</Th>
              <Th color="white">Konfigurasjon</Th>
              <Th color="white">Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {filteredGroups.map((group, index) => (
              <Tr key={index}>
                <Td>
                  <Checkbox
                    isChecked={markedGroups.includes(group.name)}
                    onChange={() => setMarkedGroups((prev) =>
                      prev.includes(group.name) ? prev.filter((name) => name !== group.name) : [...prev, group.name]
                    )}
                  />
                </Td>
                <Td>{group.name}</Td>
                <Td>{group.members}</Td>
                <Td>
                  <Button variant="link" colorScheme="white">
                    {group.config}
                  </Button>
                </Td>
                <Td>
                  <Flex>
                    <Button size="sm" bg="#294285" color="white" borderRadius="20px" mr="2" leftIcon={<FaPen />}>
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
      {showNewGroupCard && <NewGroupCard onClose={handleCloseNewGroupCard} configurations={["Standard", "Premium"]} />}
    </Box>
  );
};

export default Groups;
