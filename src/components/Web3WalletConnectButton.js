// import { Switch, Route } from "react-router-dom";
import { Button, Flex, Text } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "../connectors";

function Web3WalletConnectButton() {
  const { 
    active, 
    account, 
    // library, 
    // connector, 
    activate, 
    // deactivate 
  } = useWeb3React();

  // console.log(connector);
  // console.log(library);

  const connect = async () => {
    try {
      await activate(injected);
    } catch(err) {
      console.log(err);
    }
  }


  return (
    <Flex
      // w="100%"
      flexDir="column"
      alignItems="flex-end"
    >
      {!active ?
        <Button onClick={connect}>Connect to a Wallet</Button>
        :
        <Text
          borderRadius="12"
          fontWeight="500"
          border="1px solif black"
          // backgroundColor="#f5f5f5"
          padding="0.5rem"
          // color="white"
        >
          {account.substr(0, 6) + "..." + account.substr(account.length - 5, 5)}
        </Text>
      }
    </Flex>
  );
}

export default Web3WalletConnectButton;
