import { Container, Heading, Text } from '@chakra-ui/layout';

const HomePage = () => {
    return (
      <Container maxW="container.xl">
        <Heading
          mt={6}
          as="h1"
          colorScheme="orange"
          fontSize={{ base: 'sm', md: 'md', lg: 'xl' }}
        >
          Hey, welcome to the best phonebook SPA ever!
        </Heading>
        <Text fontSize={{ base: 'sm', md: 'md', lg: 'x;' }}>
          To navigate, use navigation links in the header menu
        </Text>
      </Container>
    );
}

export default HomePage;