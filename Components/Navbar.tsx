import { Box } from "@chakra-ui/layout";
import { ListItem, UnorderedList, HStack } from "@chakra-ui/react";
import { Image } from "@chakra-ui/image";

export default function Home() {
    return (
        <Box display="flex" flex-direction="row" width="100vw" margin="auto">
            <Box margin="10px">
                <Image src="../images/cybruh.jpg" alt="Cybruh Logo"></Image>
            </Box>
            <UnorderedList margin="10px">
                <HStack spacing="30px">
                    <ListItem padding="5px">Home</ListItem>
                    <ListItem padding="5px">Leaderboard</ListItem>
                    <ListItem padding="5px">Problemset</ListItem>
                </HStack>
            </UnorderedList>
            <Box margin="10px">Login/Sign-In</Box>
        </Box>
    );
}
