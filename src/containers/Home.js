import { Flex, Heading } from "@chakra-ui/react";

function Dashboard () {
    return (
        <Flex
            p="30"
            mt="15"
            flexDir="column"
            overflow="auto"
            boxShadow="lg"
            borderRadius="18"
            flex ="1"
        >
            <Heading color="brand.primary" as="h1" size="lg">Home</Heading>
        </Flex>
    );
}

export default Dashboard;