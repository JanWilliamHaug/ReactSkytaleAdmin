import React from 'react';
import { Box, Text, Button, VStack, Icon } from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

interface LicenseCardProps {
  title: string;
  features: string[];
  isCurrentPlan?: boolean;
  onChangePlan?: () => void;
}

const LicenseCard: React.FC<LicenseCardProps> = ({ title, features, isCurrentPlan, onChangePlan }) => {
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      p="6"
      backgroundColor={isCurrentPlan ? "var(--Ocean-1, #0D123E)" : "#1E2455"}
      color="white"
      width="300px"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
    >
      <Box>
        <Text fontWeight="bold" fontSize="xl" mb="4">
          {title}
        </Text>
        <VStack align="start" spacing="2" mb="4">
          {features.map((feature, index) => (
            <Text key={index}>✓ {feature}</Text>
          ))}
          <Text as="u">Les mer</Text>
        </VStack>
      </Box>
      {isCurrentPlan ? (
        <Text mt="4" color="white" display="flex" alignItems="center" justifyContent="center">
          <Icon as={CheckIcon} mr="2" /> Din avtale
        </Text>
      ) : (
        <Button
          mt="4"
          borderRadius="24px"
          border="1px solid var(--Ocean-5, #3B76B0)"
          background="var(--Ocean-4, #294285)"
          color="white"
          _hover={{ background: "#3B76B0" }}
          onClick={onChangePlan}
          alignSelf="center"
        >
          Bytt avtale
        </Button>
      )}
    </Box>
  );
};

export default LicenseCard;
