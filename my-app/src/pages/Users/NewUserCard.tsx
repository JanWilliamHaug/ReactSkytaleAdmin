import React, { useState } from 'react';
import './NewUserCard.css';

// Define types for the props
interface Group {
  name: string;
  members: string;
  config: string;
}

interface NewUserCardProps {
  onClose: () => void;
  groups: Group[];
}

const NewUserCard: React.FC<NewUserCardProps> = ({ onClose, groups }) => {
  const [selectedGroups, setSelectedGroups] = useState<Group[]>([]);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    displayName: '',
    phoneNumber: '',
    email: '',
    isAdmin: 'Nei',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAddGroup = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const groupName = e.target.value;
    const groupToAdd = groups.find(group => group.name === groupName);
    if (groupToAdd && !selectedGroups.includes(groupToAdd)) {
      setSelectedGroups([...selectedGroups, groupToAdd]);
    }
  };

  const handleRemoveGroup = (groupToRemove: Group) => {
    setSelectedGroups(selectedGroups.filter(group => group !== groupToRemove));
  };

  return (
    <div className="new-user-card-custom">
      <div className="new-user-card-header-custom">
        <h2>Ny bruker</h2>
        <button onClick={onClose} className="close-button-custom">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M26 14L14 26" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M14 14L26 26" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
      <div className="new-user-card-body-custom">
        <div className="form-section-custom">
          <label>Fornavn*</label>
          <input type="text" placeholder="Fornavn" name="firstName" value={formData.firstName} onChange={handleInputChange} />
          <label>Etternavn*</label>
          <input type="text" placeholder="Etternavn" name="lastName" value={formData.lastName} onChange={handleInputChange} />
          <label>Visningsnavn (valgfritt)</label>
          <input type="text" placeholder="Visningsnavn (valgfritt)" name="displayName" value={formData.displayName} onChange={handleInputChange} />
          <label>Telefonnummer*</label>
          <input type="text" placeholder="Telefonnummer" name="phoneNumber" value={formData.phoneNumber} onChange={handleInputChange} />
          <label>E-post*</label>
          <input type="text" placeholder="E-post" name="email" value={formData.email} onChange={handleInputChange} />
        </div>
        <div className="form-section-custom">
          <label>Admin</label>
          <select name="isAdmin" value={formData.isAdmin} onChange={handleInputChange}>
            <option>Ja</option>
            <option>Nei</option>
          </select>
        </div>
        <div className="form-section-custom">
          <label>Grupper</label>
          <select onChange={handleAddGroup}>
            <option>Legg til gruppe</option>
            {groups.map((group, index) => (
              <option key={index}>{group.name}</option>
            ))}
          </select>
          <div className="group-list-custom">
            {selectedGroups.map((group, index) => (
              <div key={index} className="group-item-custom">
                {group.name} <button className="remove-button-custom" onClick={() => handleRemoveGroup(group)}>Fjern</button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="new-user-card-footer-custom">
        <button className="create-button-custom">Opprett bruker</button>
      </div>
    </div>
  );
};

export default NewUserCard;
