import { Container, VStack, Heading, Text, Button, Image, Box, SimpleGrid, Icon } from "@chakra-ui/react";
import { FaRobot, FaUniversity, FaBusinessTime, FaChartLine } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="black" color="white" textAlign="center" py={10}>
        <Heading as="h1" size="2xl" mb={3}>
          sentAIent
        </Heading>
        <Text fontSize="xl" mb={5}>
          AI for All: People, Decisions, Tasks
        </Text>
        <Button colorScheme="blue" variant="outline">
          Get Started
        </Button>
      </Box>

      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} py={10}>
        <VStack spacing={4} align="start">
          <Heading as="h2" size="lg">
            Who We Are
          </Heading>
          <Text fontSize="md">SentAIent is a leading AI consulting firm specializing in education, consulting, integration, and data analytics. We empower organizations to leverage artificial intelligence to enhance efficiency, decision-making, and innovation.</Text>
          <Button colorScheme="blue">Learn More</Button>
        </VStack>
        <Image src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxBSSUyMGNvbnN1bHRpbmd8ZW58MHx8fHwxNzE1NDY0MzQ2fDA&ixlib=rb-4.0.3&q=80&w=1080" />
      </SimpleGrid>

      <Box py={10}>
        <Heading as="h2" size="lg" textAlign="center" mb={5}>
          Our Services
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 4 }} spacing={10}>
          <ServiceBox icon={FaUniversity} title="Education" description="Empowering individuals and teams with the knowledge to utilize AI effectively." />
          <ServiceBox icon={FaBusinessTime} title="Consulting" description="Tailored AI strategies that fit your business needs and growth objectives." />
          <ServiceBox icon={FaRobot} title="Integration" description="Seamless integration of AI technologies into your existing processes." />
          <ServiceBox icon={FaChartLine} title="Data Analytics" description="Advanced analytics to turn your data into actionable insights." />
        </SimpleGrid>
      </Box>

      <Box bg="gray.800" color="white" py={10}>
        <VStack spacing={4}>
          <Heading as="h2" size="lg">
            Ready to transform your business with AI?
          </Heading>
          <Text fontSize="md">Contact us today to discuss your AI journey.</Text>
          <Button colorScheme="blue" variant="solid">
            Contact Us
          </Button>
        </VStack>
      </Box>
    </Container>
  );
};

const ServiceBox = ({ icon, title, description }) => {
  return (
    <VStack bg="white" p={5} borderRadius="md" boxShadow="md" align="start">
      <Icon as={icon} w={10} h={10} color="blue.500" />
      <Text fontWeight="bold" fontSize="lg">
        {title}
      </Text>
      <Text fontSize="md">{description}</Text>
    </VStack>
  );
};

export default Index;
