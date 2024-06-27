import React, { useState } from 'react';
import './NewGroupCard.css';
import AddMembersToGroupCard from './AddMembersToGroupCard';
import userData from '../Users/Data/userData';

interface NewGroupCardProps {
  onClose: () => void;
  configurations: string[];
}

const NewGroupCard: React.FC<NewGroupCardProps> = ({ onClose, configurations }) => {
  const [groupName, setGroupName] = useState('');
  const [selectedConfig, setSelectedConfig] = useState(configurations[0]);
  const [showAddMembers, setShowAddMembers] = useState(false);

  const handleGroupNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGroupName(e.target.value);
  };

  const handleConfigChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedConfig(e.target.value);
  };

  const handleAddMembersClick = () => {
    setShowAddMembers(true);
  };

  const handleCloseAddMembers = () => {
    setShowAddMembers(false);
  };

  const handleDone = () => {
    onClose();
  };

  return (
    <div className="new-group-card-custom">
      <div className="new-group-card-header-custom">
        <h2>Ny gruppe</h2>
        <button onClick={onClose} className="close-button-custom">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M26 14L14 26" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 14L26 26" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className="new-group-card-body-custom">
        <span className="required-field-text">* Påkrevet felt</span>
        <span className="name-text">Navn</span>
        <div className="form-section-custom">
          <div className="input-field">
            <label>Gruppenavn*</label>
            <input type="text" placeholder="Gruppenavnet her" value={groupName} onChange={handleGroupNameChange} />
          </div>
          <div className="input-field">
            <label>Konfigurasjon*</label>
            <select value={selectedConfig} onChange={handleConfigChange}>
              {configurations.map((config, index) => (
                <option key={index} value={config}>{config}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="new-group-card-footer-custom">
        <button className="create-group-button" onClick={handleDone}>Opprett gruppe</button>
        <button className="create-group-button secondary" onClick={handleAddMembersClick}>Opprett og legg til medlemmer</button>
      </div>
      {showAddMembers && <AddMembersToGroupCard onClose={handleCloseAddMembers} />}
    </div>
  );
};

export default NewGroupCard;
