// import { Switch, Route } from "react-router-dom";
import { Flex, Container, Text, useColorMode, Button } from "@chakra-ui/react";
import Layout from "./containers/Layout";

function App() {
  return (
    <Flex 
      h="100vh"
      flexDir="column"
      overflow="hidden"
      className="App"
    >
      
      <Layout />
      {/* <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/bridge">
          <Bridge />
        </Route>
      </Switch> */}
    </Flex>
  );
}

export default App;
