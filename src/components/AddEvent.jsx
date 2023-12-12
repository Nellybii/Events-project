import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
} from "@chakra-ui/react";
import React, { useState } from "react";

function AddEvent() {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    price: "",
    startDate: "",
    endDate: "",
  });

  const handleForm = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    // Add logic to handle form submission using formData
    console.log("Form Data:", formData);
  };

  return (
    <Flex align={"center"} justify={"center"}>
      <Stack>
        <Heading fontSize={"4xl"}>Add Event</Heading>
        <Box>
          <Stack>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input
                name="title"
                placeholder="Title"
                value={formData.title}
                onChange={handleForm}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Description</FormLabel>
              <Input
                type="text"
                name="description"
                placeholder="Description"
                value={formData.description}
                onChange={handleForm}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Location</FormLabel>
              <Input
                type="text"
                name="location"
                placeholder="Location"
                value={formData.location}
                onChange={handleForm}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Price</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  color="gray.300"
                  fontSize="1.2em"
                  children="Ksh"
                />
                <Input
                  type="number"
                  name="price"
                  placeholder="Price"
                  value={formData.price}
                  onChange={handleForm}
                />
              </InputGroup>
            </FormControl>
            <HStack>
              <FormControl>
                <FormLabel>Start Date</FormLabel>
                <Input
                  type="datetime-local"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleForm}
                />
              </FormControl>
              <FormControl>
                <FormLabel>End Date</FormLabel>
                <Input
                  type="datetime-local"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleForm}
                />
              </FormControl>
              <Stack p={3}>
                <Button onClick={handleSubmit}>Submit</Button>
              </Stack>
            </HStack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}

export default AddEvent;
