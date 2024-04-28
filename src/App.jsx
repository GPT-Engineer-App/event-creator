import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Box, Flex, Link, Spacer } from "@chakra-ui/react";
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
      </Box>
    </Router>
  );
}

export default App;