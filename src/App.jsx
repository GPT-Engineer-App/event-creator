import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Flex, Link, Spacer, Text, Container } from "@chakra-ui/react";
import Index from "./pages/Index.jsx";

function App() {
  return (
    <Router>
      <Box bg="brand.900" p={4} color="white">
        <Flex align="center">
          <Link href="/" p={2}>Home</Link>
          <Spacer />
        </Flex>
      </Box>
      <Box pt="60px">
        <Routes>
          <Route exact path="/" element={<Index />} />
        </Routes>
        <Container as="footer" maxW="container.xl" py={4} mt={10} centerContent>
          <Text fontSize="sm" color="gray.600">© 2023 Event Management App. All rights reserved.</Text>
        </Container>
      </Box>
    </Router>
  );
}

export default App;