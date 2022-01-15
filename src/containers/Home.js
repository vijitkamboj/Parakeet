import { Flex, Heading } from "@chakra-ui/react";

function Dashboard () {
    return (
        <Flex
            ml="10"
            w="100%"
            p="3%"
            flexDir="column"
            overflow="auto"
            minH="100vh"
            // backgroundColor="#f5f5f5"
        >
            <Heading color="brand.primary">Parakeet</Heading>
        </Flex>
    );
}

export default Dashboard;