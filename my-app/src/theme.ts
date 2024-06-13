// src/theme.ts
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    ocean: {
      3: '#212D63',
      4: '#294285',
      400: '#294285', // Add this line to define a usable shade
    },
    white: '#FFFFFF',
    customLightBlue: '#CAF0F8',
  },
});

export default theme;
