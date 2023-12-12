import React from 'react';
import { Link } from 'react-router-dom';
import { Box, HStack, Flex } from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';

function NavBar() {
  return (
    <Box px={4}>
      <Flex justifyContent="space-between">
        <HStack>
          <CalendarIcon w={8} h={8} />
          <HStack spacing={8}>
            <Link to="/">Home</Link>
            <Link to="/addevent">Add Event</Link>
          </HStack>
        </HStack>
        <Flex>User</Flex>
      </Flex>
    </Box>
  );
}

export default NavBar;
