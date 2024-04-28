import { Box, Button, Flex, FormControl, FormLabel, Input, Textarea, VStack, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { FaPlus, FaEdit, FaTrash } from "react-icons/fa";

const Index = () => {
  const [events, setEvents] = useState([]);
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const toast = useToast();

  const handleAddEvent = () => {
    if (!eventName || !eventDate || !eventDescription) {
      toast({
        title: "Error",
        description: "Please fill all fields",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      return;
    }
    const newEvent = {
      id: events.length + 1,
      name: eventName,
      date: eventDate,
      description: eventDescription,
    };
    setEvents([...events, newEvent]);
    setEventName("");
    setEventDate("");
    setEventDescription("");
    toast({
      title: "Success",
      description: "Event added successfully",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  const handleDeleteEvent = (id) => {
    setEvents(events.filter(event => event.id !== id));
    toast({
      title: "Deleted",
      description: "Event deleted successfully",
      status: "info",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Flex direction="column" p={5}>
      <VStack spacing={4}>
        <FormControl>
          <FormLabel>Event Name</FormLabel>
          <Input value={eventName} onChange={(e) => setEventName(e.target.value)} placeholder="Enter event name" />
        </FormControl>
        <FormControl>
          <FormLabel>Event Date</FormLabel>
          <Input type="date" value={eventDate} onChange={(e) => setEventDate(e.target.value)} />
        </FormControl>
        <FormControl>
          <FormLabel>Event Description</FormLabel>
          <Textarea value={eventDescription} onChange={(e) => setEventDescription(e.target.value)} placeholder="Enter event description" />
        </FormControl>
        <Button leftIcon={<FaPlus />} colorScheme="blue" onClick={handleAddEvent}>Add Event</Button>
      </VStack>
      <Box mt={10}>
        {events.map((event) => (
          <Flex key={event.id} align="center" justify="space-between" p={3} borderWidth="1px" borderRadius="lg" mb={2}>
            <VStack align="start">
              <Text fontWeight="bold">{event.name}</Text>
              <Text fontSize="sm">{event.date}</Text>
              <Text fontSize="sm">{event.description}</Text>
            </VStack>
            <Button leftIcon={<FaTrash />} colorScheme="red" onClick={() => handleDeleteEvent(event.id)}>Delete</Button>
          </Flex>
        ))}
      </Box>
    </Flex>
  );
};

export default Index;