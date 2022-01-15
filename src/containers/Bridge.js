import { useEffect, useState } from "react";
import { Flex, Heading } from "@chakra-ui/react";
import { useWeb3React } from "@web3-react/core";
// In a node environment
import Moralis from 'moralis/node';
import axios from "axios";

function Bridge () {
    const { account, library, chainId } = useWeb3React();
    const data = useWeb3React();
    console.log(data);
    Moralis.start({appId: "1oUCsVB7OaaoCl2IP6Y6tejwbrndhCVBsaLNMRjb", serverUrl: "https://vfy1shsqdr4r.usemoralis.com:2053/server"})

    const [nfts, setnfts] = useState([]);
    const ckey = "ckey_9e3e88c3bc2949e19ba169dc7ae";

    const fetchNFTs = async (acc, chainId) => {
        // const url = "https://api.covalenthq.com/v1/" + chainId + "/address/" + acc + "/balances_v2/?nft=true&key="+ckey;
        // let assets = await axios.get(url);
        // console.log(assets);
        // assets = assets.data.items.filter(x => x.type == "nfts");
        // setnfts(assets);
        // console.log(assets);

        const options = { address: account };
        const polygonNFTs = await Moralis.Web3API.account.getNFTs(options);
        console.log(polygonNFTs);
    }

    useEffect(()=>{
        if(account && chainId) fetchNFTs(account, chainId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [account, chainId]);

    return (
        <Flex
            p="30"
            mt="15"
            flexDir="column"
            overflow="auto"
            boxShadow="base"
            borderRadius="18"
            h="90vh"
        >
            <Heading color="brand.primary">Bridge</Heading>
        </Flex>
    );
}

export default Bridge;