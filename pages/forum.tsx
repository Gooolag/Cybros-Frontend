import { Box, Divider } from "@chakra-ui/layout";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Search2Icon } from "@chakra-ui/icons";
import { BiComment } from "react-icons/bi";

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
                <Box
                    margin="1.1rem"
                    display="flex"
                    flexDirection="column"
                    border="2px"
                    borderRadius="2rem"
                    padding="1.1rem"
                >
                    <Box margin="0.4rem" fontSize="1.8rem">
                        Question
                    </Box>
                    <Box margin="0.4rem">Answer</Box>
                    <Divider />
                    <Box
                        margin="0.6rem"
                        display="flex"
                        alignContent="center"
                        justifyContent="space-between"
                    >
                        <Box>Posted by : User</Box>
                        <Box
                            marginTop="6.5px"
                            display="flex"
                            justifyContent="space-around"
                            alignContent="center"
                        >
                            <Box marginTop="5px">
                                <BiComment />
                            </Box>
                            <Box marginLeft="6px">2.5k</Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Forum;
