import { Box, Container, Flex, Heading, HStack, Link, Text, VStack } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" bg="#FFF1E5">
      {/* Header */}
      <Flex as="header" py={4} justifyContent="space-between" alignItems="center" borderBottom="1px" borderColor="gray.200">
        <Heading as="h1" size="lg">Financial Times</Heading>
        <HStack spacing={4}>
          <Link href="#">Home</Link>
          <Link href="#">World</Link>
          <Link href="#">Business</Link>
          <Link href="#">Markets</Link>
          <Link href="#">Opinion</Link>
        </HStack>
      </Flex>

      {/* Main Content */}
      <Flex as="main" py={8} direction={{ base: "column", md: "row" }} spacing={8}>
        {/* Featured Article */}
        <Box flex="3" pr={{ md: 8 }}>
          <Heading as="h2" size="md" mb={4}>Featured Article</Heading>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Heading as="h3" size="sm">Breaking News: Market Hits Record Highs</Heading>
            <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.</Text>
          </Box>
        </Box>

        {/* Recent Articles */}
        <Box flex="2">
          <Heading as="h2" size="md" mb={4}>Recent Articles</Heading>
          <VStack spacing={4} align="stretch">
            <Box bg="gray.100" p={4} borderRadius="md">
              <Heading as="h3" size="sm">Economy: Inflation Rates on the Rise</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
            <Box bg="gray.100" p={4} borderRadius="md">
              <Heading as="h3" size="sm">Tech: New Innovations in AI</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
            <Box bg="gray.100" p={4} borderRadius="md">
              <Heading as="h3" size="sm">Health: Advances in Medical Research</Heading>
              <Text mt={2}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
          </VStack>
        </Box>

        {/* Sidebar */}
        <Box flex="1" pl={{ md: 8 }} mt={{ base: 8, md: 0 }}>
          <Heading as="h2" size="md" mb={4}>Sidebar</Heading>
          <Box bg="gray.100" p={4} borderRadius="md">
            <Text>Advertisement</Text>
          </Box>
        </Box>
      </Flex>

      {/* Footer */}
      <Flex as="footer" py={4} justifyContent="space-between" alignItems="center" borderTop="1px" borderColor="gray.200">
        <Text>&copy; 2023 Financial Times</Text>
        <HStack spacing={4}>
          <Link href="#"><FaFacebook /></Link>
          <Link href="#"><FaTwitter /></Link>
          <Link href="#"><FaLinkedin /></Link>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Index;