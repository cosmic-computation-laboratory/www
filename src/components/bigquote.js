import React from 'react';
import { Box, Text } from '@rebass/emotion'
import { propTypes } from 'styled-system';

export default ({ author, fontSize = 6, children }) =>
  <Box my={4}>
    <Text mb={3} fontSize={fontSize} fontFamily='stamp'>{children}</Text>
    {author && <Text fontSize={2} fontFamily='sans'>—{author}</Text>}
  </Box>