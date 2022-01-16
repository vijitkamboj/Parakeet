import { useEffect, useState } from "react";
import { Heading, HStack, Button, VStack, Box, useColorMode } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
import Moralis from 'moralis/node';
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'
import axios from "axios";

function Bridge () {
    const [ nftImages , setNftImages] = useState([])
    const {colorMode, setColormode} = useColorMode()
    const { account, library, chainId } = useWeb3React();
    const data = useWeb3React();
    Moralis.start({appId: "1oUCsVB7OaaoCl2IP6Y6tejwbrndhCVBsaLNMRjb", serverUrl: "https://vfy1shsqdr4r.usemoralis.com:2053/server"})

    // const [nfts, setnfts] = useState([]);
    // const ckey = "ckey_9e3e88c3bc2949e19ba169dc7ae";

    const fetchNFTs = async (acc, chainId) => {
        // const url = "https://api.covalenthq.com/v1/" + chainId + "/address/" + acc + "/balances_v2/?nft=true&key="+ckey;
        // let assets = await axios.get(url);
        // console.log(assets);
        // assets = assets.data.items.filter(x => x.type == "nfts");
        // setnfts(assets);
        // console.log(assets);

        // const options = {
        //     address: "0x0DBcCB2F2B16926dD60770ff72C6bF6E5cAb3CBE"
        // };
        // const allNFTS = await Moralis.Web3API.account.getNFTs(options);
        // console.log(allNFTS)

        // const nfts_filtered = allNFTS.result.filter( nft => (nft.metadata !== null) )
        // const ipfsNftImages = nfts_filtered.map( nft => ("https://ipfs.io/ipfs/" + JSON.parse(nft.metadata).image.split("//")[1]) ) 
        // setNftImages(nftImageLinks);

    }

    useEffect(()=>{
        if(account && chainId) fetchNFTs(account, chainId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [account, chainId]);

    return (
        <VStack
            p="30"
            mt="15"
            alignItems="stretch"
            boxShadow="lg"
            borderRadius="18"
            flex = "1"
            spacing = "5vh"
        >
            
            <Heading color="brand.primary" as="h1" size="lg">Bridge</Heading>

            <HStack flex= "1" alignItems="stretch" spacing="2rem">

                <VStack
                    p = "2rem"
                    boxShadow="base"
                    borderRadius="20px"
                    justifyContent="space-between"
                    flex = "1"
                    border = "1px solid white"
                >
                    <Box>
                        <Menu >
                        <MenuButton as={Button} >
                            Select Destination chain
                        </MenuButton>
                        <MenuList>
                            <MenuItem>Polygon Mumbai</MenuItem>
                            <MenuItem>BSC testnet</MenuItem>
                            <MenuItem>Fuji testnet</MenuItem>
                        </MenuList>
                        </Menu>
                    </Box>

                    <HStack
                        borderBottomRadius={"15px"} 
                        p="1rem" 
                        alignSelf="stretch" 
                        justifyContent = "space-between"
                        fontWeight = "700"
                        backgroundColor = { colorMode === "dark" ? "white" : "whitesmoke"}
                        color = { colorMode === "dark" && "gray.800"}
                        
                    >
                        <Box>Value:</Box>
                        <Box>0.000</Box>
                    </HStack>

                </VStack>

                <Box  
                    flex= "1.5" 
                    boxShadow="base" 
                    borderRadius="20px"
                    p = "2rem"
                    border = "1px solid white"
                 >
                    <Heading size="sm">Available NFTs</Heading>
                    
                </Box>

            </HStack>         

        </VStack>
    );
}

export default Bridge;