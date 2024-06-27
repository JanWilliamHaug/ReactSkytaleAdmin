import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import LicenseCard from './LicenseCard';
import './Licenses.css';
import '/src/components/PageHeadlines.css'; // Import the new CSS file

const Licenses: React.FC = () => {
  const handlePlanChange = (plan: string) => {
    console.log(`Change to ${plan}`);
  };

  return (
    <Box padding="20px" color="white" backgroundColor="#1E2455" minHeight="100vh">
      <Flex className="page-header">
        <Text className="page-title">Lisens</Text>
      </Flex>
      <Text mb="20px" className="license-content">
        Du kan styre hvilke avtaler ditt firma skal ha og hvem i ditt firma som skal være del av hvilke avtale.
      </Text>
      <Flex gap="10px" className="license-flex-container" flexWrap="wrap">
        <LicenseCard
          title="Skytale Standard"
          features={[
            'Du får denne funksjonen',
            'Denne funksjonen',
            'En annen',
            'Og enda mere til'
          ]}
          isCurrentPlan={true}
        />
        <LicenseCard
          title="Skytale Basic"
          features={[
            'Denne funksjonen',
            'En annen',
            'Men ikke dette',
            'Eller dette'
          ]}
          onChangePlan={() => handlePlanChange('Basic')}
        />
        <LicenseCard
          title="Skytale Premium"
          features={[
            'Alt fra standard',
            'Og enda mere til',
            'Denne funksjonen',
            'En annen',
            'Og enda mere til',
            'Og til sist denne og!'
          ]}
          onChangePlan={() => handlePlanChange('Premium')}
        />
      </Flex>
    </Box>
  );
};

export default Licenses;