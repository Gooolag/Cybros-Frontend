import { Box } from "@chakra-ui/layout";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";

const Forum = () => {
    return (
        <Box display="flex" flexDirection="column">
            <Box display="flex">
                <Box fontSize="2.6rem" margin="1.1rem">
                    FORUM
                </Box>
                <FormControl
                    display="flex"
                    marginTop="1.2rem"
                    marginLeft="20vw"
                >
                    <FormLabel fontSize="1.2rem" margin="1rem">
                        Search
                    </FormLabel>
                    <Search2Icon marginTop="1.55rem" />
                    <Input
                        variant="filled"
                        type="text"
                        width="35%"
                        marginLeft="40vw"
                        margin="1rem"
                        borderRadius="3rem"
                    />
                </FormControl>
            </Box>
            <Box display="flex" flexDirection="column" margin="1.1rem">
                <Box margin="1.1rem">This is a FAQ</Box>
                <Box margin="1.1rem">This is a FAQ</Box>
                <Box margin="1.1rem">This is a FAQ</Box>
                <Box margin="1.1rem">This is a FAQ</Box>
                <Box margin="1.1rem">This is a FAQ</Box>
                <Box margin="1.1rem">This is a FAQ</Box>
            </Box>
        </Box>
    );
};

export default Forum;
