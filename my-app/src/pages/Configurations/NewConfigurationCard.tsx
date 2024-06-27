import React, { useState } from 'react';
import './NewConfigurationCard.css';

interface NewConfigurationCardProps {
  onClose: () => void;
}

const NewConfigurationCard: React.FC<NewConfigurationCardProps> = ({ onClose }) => {
  const [configurationName, setConfigurationName] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfigurationName(e.target.value);
  };

  return (
    <div className="new-config-card">
      <div className="new-config-card-header">
        <h2>Legg til konfigurasjon</h2>
        <button onClick={onClose} className="close-button-config">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M26 14L14 26" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 14L26 26" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className="new-config-card-body">
        <label>Konfigurasjon*</label>
        <input 
          type="text" 
          placeholder="Konfigurasjon" 
          value={configurationName} 
          onChange={handleInputChange} 
        />
      </div>
      <div className="new-config-card-footer">
        <button className="create-config-button">Opprett konfigurasjon</button>
      </div>
    </div>
  );
};

export default NewConfigurationCard;
