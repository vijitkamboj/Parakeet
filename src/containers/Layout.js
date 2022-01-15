import { Switch, Route, useHistory } from "react-router-dom";
import { Button, Flex, Image, Heading,HStack, useColorMode } from "@chakra-ui/react";
import Web3WalletConnectButton from "../components/Web3WalletConnectButton";
import Home from "./Home";
import Bridge from "./Bridge";
import logo from "../assets/icon.png";

function Layout () {
    const history = useHistory();
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Flex
            p="5%"
            pt="5vh"
            w="100vw"
            flexDir="column"
            // overflow="auto"
            minH="100vh"
            // backgroundColor="#f5f5f5"
        >
            <HStack 
                justifyContent="space-around"
            >
                <HStack>
                    <Image w="72px" src={logo} />
                    <Heading
                        _hover={{cursor: "pointer"}}
                        onClick={()=> {
                            history.push("/")
                        }}
                    >Parakeet</Heading>
                </HStack>
                <HStack
                    flexDir="row"
                    alignItems="flex-end"
                    justifyContent="flex-end"
                >
                    <Button 
                        // display={navSize === "small" ? "none" : "flex"}
                        onClick={()=>history.push("/bridge")}
                        cursor="pointer"
                    >
                        Bridge
                    </Button>
                    <Button 
                        // display={navSize === "small" ? "none" : "flex"}
                        onClick={toggleColorMode}
                        cursor="pointer"
                    >
                        {colorMode === "light" ? "dark mode" : "light mode"}
                    </Button>
                    <Web3WalletConnectButton />
                </HStack>
            </HStack>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/bridge">
                    <Bridge />
                </Route>
            </Switch>
        </Flex>
    );
}

export default Layout;