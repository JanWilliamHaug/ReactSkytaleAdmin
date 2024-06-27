import React from 'react';
import { Flex, Text } from '@chakra-ui/react';

interface ToggleComponentProps {
  label: string;
  state: boolean;
  disabled: boolean;
  onToggle: () => void;
}

const ToggleComponent: React.FC<ToggleComponentProps> = ({ label, state, disabled, onToggle }) => {
  return (
    <Flex className={`config-option ${disabled && !state ? 'disabled' : ''}`}>
      <Text className={`config-label ${disabled && !state ? 'disabled' : ''}`}>{label}</Text>
      <div className={`toggle-button ${state ? 'on' : 'off'} ${disabled ? 'disabled' : ''}`} onClick={onToggle}>
        <div className="toggle-circle"></div>
        <Text className={`toggle-text ${state ? 'on' : 'off'}`}>{state ? 'På' : 'Av'}</Text>
      </div>
    </Flex>
  );
};

export default ToggleComponent;
