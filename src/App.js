// import { Switch, Route } from "react-router-dom";
import { Flex, Container, Text, useColorMode, Button } from "@chakra-ui/react";
import Layout from "./containers/Layout";

function App() {
  return (
    <Flex 
      flexDir="column"
      className="App"
      height = "auto"
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
