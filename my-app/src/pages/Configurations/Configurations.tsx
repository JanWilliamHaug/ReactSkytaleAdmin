// Configurations.tsx
import React, { useState } from 'react';
import { Box, Flex, Text, Button, Icon } from '@chakra-ui/react';
import { IoIosRemoveCircle } from 'react-icons/io';
import './Configurations.css';
import './NewConfigurationCard.css';
import NewConfigurationCard from './NewConfigurationCard';
import { PlusCircleIcon } from '../shared/PlusCircleIcon';
import configurations from './configurationsData'; // Import configurations
import ToggleComponent from './ToggleComponent'; // Import ToggleComponent

// List of configurations
const configList = ["Standard", "Premium"];

interface ToggleStates {
  groupChat: boolean;
  latestMessageTime: boolean;
  limitedMessageDuration: boolean;
  openRooms: boolean;
  createRooms: boolean;
  groupChatMultiple: boolean;
  createFeed: boolean;
}

const Configurations: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Chat og rom');
  const tabs = ['Chat og rom', 'Kart og fildeling', 'Profil og brukergrensesnitt', 'Autentisering og innlogging'];

  const [toggleStates, setToggleStates] = useState<ToggleStates>(configurations.standard);
  const [selectedConfig, setSelectedConfig] = useState<keyof typeof configurations>('standard');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showNewConfigurationCard, setShowNewConfigurationCard] = useState(false);

  const handleToggle = (key: keyof ToggleStates) => {
    if (selectedConfig === 'standard') return; // Prevent toggling in standard configuration
    setToggleStates((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const handleConfigurationChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedConfig = event.target.value as keyof typeof configurations;
    setSelectedConfig(selectedConfig);
    setToggleStates(configurations[selectedConfig]);
  };

  const handleDeleteClick = () => {
    setShowConfirmation(true);
  };

  const handleConfirmationResponse = (response: boolean) => {
    if (response) {
      // Perform the delete action here
      console.log("Configuration deleted");
    }
    setShowConfirmation(false);
  };

  const handleNewConfigurationClick = () => {
    setShowNewConfigurationCard(true);
  };

  const handleCloseNewConfigurationCard = () => {
    setShowNewConfigurationCard(false);
  };

  return (
    <Box className="page-container" padding="20px" color="white" backgroundColor="#1E2455" minHeight="100vh">
      <Flex className="page-header" style={{ justifyContent: 'space-between' }}>
        <Text className="page-title">Konfigurasjoner</Text>
        <div className="header-buttons">
          <Button className="new-config-button" onClick={handleNewConfigurationClick}>
            <PlusCircleIcon />
            Lag konfigurasjon
          </Button>
          <div className="dropdown-container">
            <select onChange={handleConfigurationChange} className="custom-dropdown">
              <option value="standard">Standard</option>
              <option value="premium">Premium</option>
            </select>
            <Button className="delete-button" onClick={handleDeleteClick}>
              <Icon as={IoIosRemoveCircle} boxSize={5} />
              Slett
            </Button>
          </div>
        </div>
      </Flex>
      {showConfirmation && (
        <div className="confirmation-popup">
          <p>Er du sikker på at du vil slette konfigurasjonen?</p>
          <button onClick={() => handleConfirmationResponse(true)}>Ja</button>
          <button onClick={() => handleConfirmationResponse(false)}>Nei</button>
        </div>
      )}
      {showNewConfigurationCard && <NewConfigurationCard onClose={handleCloseNewConfigurationCard} />}
      <Text mb="20px">
        Ved å sette opp konfigurasjoner kan du begrense eller gi tilgang til funksjonalitet som inngår i din lisens.
      </Text>
      <Flex className="config-tabs" mb="20px">
        {tabs.map(tab => (
          <div
            key={tab}
            className={`config-tab ${activeTab === tab ? 'active-tab' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </Flex>
      <div className="config-options">
        <div className="custom-line-above"></div>
        <Text fontWeight="bold" className="config-header">Funksjoner</Text>
        <div className="custom-line"></div>
        <ToggleComponent
          label="Gruppechat"
          state={toggleStates.groupChat}
          disabled={selectedConfig === 'standard'}
          onToggle={() => handleToggle('groupChat')}
        />
        <ToggleComponent
          label="Tidspunkt for senest melding"
          state={toggleStates.latestMessageTime}
          disabled={selectedConfig === 'standard'}
          onToggle={() => handleToggle('latestMessageTime')}
        />
        <ToggleComponent
          label="Tidsbegrenset meldingsvarighet"
          state={toggleStates.limitedMessageDuration}
          disabled={selectedConfig === 'standard'}
          onToggle={() => handleToggle('limitedMessageDuration')}
        />
        <ToggleComponent
          label="Åpne rom"
          state={toggleStates.openRooms}
          disabled={selectedConfig === 'standard'}
          onToggle={() => handleToggle('openRooms')}
        />
        <Flex className="flex-upgrade-button">
          <Text className={`config-label ${selectedConfig === 'standard' ? 'disabled' : ''}`}>Låste rom (ikke inkludert)</Text>
          <Button className="upgrade-license-button">Oppgrader lisens</Button>
        </Flex>
        <div className="custom-line-above"></div>
        <Text fontWeight="bold" className="config-header">Brukere kan</Text>
        <div className="custom-line"></div>
        <ToggleComponent
          label="Opprette rom"
          state={toggleStates.createRooms}
          disabled={selectedConfig === 'standard'}
          onToggle={() => handleToggle('createRooms')}
        />
        <ToggleComponent
          label="Opprette chat med flere mottakere"
          state={toggleStates.groupChatMultiple}
          disabled={selectedConfig === 'standard'}
          onToggle={() => handleToggle('groupChatMultiple')}
        />
        <ToggleComponent
          label="Opprette feed"
          state={toggleStates.createFeed}
          disabled={selectedConfig === 'standard'}
          onToggle={() => handleToggle('createFeed')}
        />
      </div>
    </Box>
  );
};

export default Configurations;
