import { Box, Link } from "@chakra-ui/layout";
import { ListItem, UnorderedList, HStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";

const url =
    "https://media-exp1.licdn.com/dms/image/C560BAQGksnLv2Ak_yA/company-logo_200_200/0/1589738358766?e=1644451200&v=beta&t=zfuU6jJ9Enq00XugiWt_HgCQbAd8F08gqr-4pqnxW7I";

export default function Home() {
    return (
        <Box
            display="flex"
            flex-direction="row"
            width="98vw"
            justifyContent="space-between"
            padding="0.6rem"
        >
            <Box margin="10px">
                <Image src={url} alt="Cybruh Logo"></Image>
            </Box>
            <Box marginRight="10vw" marginLeft="10vw" fontSize="1.2rem">
                <UnorderedList margin="10px" listStyleType="none">
                    <HStack spacing="3.5vw">
                        <ListItem border="0px" padding="5px">
                            <Link href="/">Home</Link>
                        </ListItem>
                        <ListItem border="0px" padding="5px">
                            <Link href="/leaderboard">Leaderboard</Link>
                        </ListItem>
                        <ListItem border="0px" padding="5px">
                            <Link href="/problemset">Problemset</Link>
                        </ListItem>
                        <ListItem border="0px" padding="5px">
                            <Link href="/forum">Forum</Link>
                        </ListItem>
                    </HStack>
                </UnorderedList>
            </Box>
            <Box marginTop="0.85rem" fontSize="1.2rem" marginRight="0.5vw">
                <Link href="/login">Login</Link>
            </Box>
        </Box>
    );
}
