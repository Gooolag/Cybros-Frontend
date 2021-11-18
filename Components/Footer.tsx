import { Box, Link } from "@chakra-ui/layout";
import { ListItem, UnorderedList, HStack, Divider } from "@chakra-ui/react";
import {
    AiFillLinkedin,
    AiFillFacebook,
    AiOutlineCopyrightCircle,
} from "react-icons/ai";

export default function Home() {
    return (
        <Box
            backgroundColor="#1a1a2c"
            marginTop="2rem"
            padding="3rem"
            width="98.6vw"
            display="flex"
            flexDirection="column"
            justifyContent="center"
        >
            <Box
                fontSize="1rem"
                display="flex"
                justifyContent="center"
                marginBottom="0.4rem"
            >
                Cybros : The LNMIIT Coding Community
            </Box>
            <Box display="flex" justifyContent="center" fontSize="1.2rem">
                <UnorderedList margin="10px" listStyleType="none">
                    <HStack spacing="30px">
                        <ListItem padding="5px">
                            <Link href="https://www.linkedin.com/company/cybros-lnmiit/about/">
                                <AiFillLinkedin />
                            </Link>
                        </ListItem>
                        <ListItem padding="5px">
                            <Link href="https://www.facebook.com/Cybros.LNMIIT/">
                                <AiFillFacebook />
                            </Link>
                        </ListItem>
                    </HStack>
                </UnorderedList>
            </Box>
            <Divider />
            <Box
                marginTop="1.7rem"
                display="flex"
                justifyContent="center"
                alignContent="center"
            >
                <AiOutlineCopyrightCircle />
                <Box marginLeft="0.5rem" marginTop="-0.35rem">
                    2021 Cybros
                </Box>
            </Box>
        </Box>
    );
}
