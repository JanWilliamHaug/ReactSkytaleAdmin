import React, { useState } from 'react';
import './AddMembersToGroupCard.css';
import usersData from '../Users/Data/userData'; // Ensure the correct import path

interface AddMembersToGroupCardProps {
  onClose: () => void;
}

const AddMembersToGroupCard: React.FC<AddMembersToGroupCardProps> = ({ onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMembers, setSelectedMembers] = useState<string[]>([]);

  const filteredUsers = usersData.filter((user) =>
    user.firstName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.lastName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddMember = (username: string) => {
    setSelectedMembers((prevSelectedMembers) => [...prevSelectedMembers, username]);
  };

  const handleRemoveMember = (username: string) => {
    setSelectedMembers((prevSelectedMembers) =>
      prevSelectedMembers.filter((member) => member !== username)
    );
  };

  return (
    <div className="add-members-card-custom">
      <div className="add-members-card-header-custom">
        <h2>Gruppenavn</h2>
        <button onClick={onClose} className="close-button-custom">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
            <path d="M26 14L14 26" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 14L26 26" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
      <div className="add-members-card-body-custom">
        <h3>LEGG TIL MEDLEM</h3>
        <input
          type="text"
          placeholder="Finn bruker"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <div className="users-list">
          {filteredUsers.map((user, index) => (
            <div key={index} className="user-item">
              <span>{`${user.firstName} ${user.lastName}`}</span>
              {selectedMembers.includes(user.username) ? (
                <button onClick={() => handleRemoveMember(user.username)} className="added-button">
                  Fjern
                </button>
              ) : (
                <button onClick={() => handleAddMember(user.username)} className="add-button">
                  Legg til
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="add-members-card-footer-custom">
        <button className="done-button" onClick={onClose}>
          Ferdig
        </button>
      </div>
    </div>
  );
};

export default AddMembersToGroupCard;
