import { Box } from "@chakra-ui/layout";

export default function Login() {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignContent="center"
        >
            <Box fontSize="2.5rem">Login</Box>
            <Box display="flex" flexDirection="column">
                <form>
                    <label>
                        Username:
                        <input type="text" />
                    </label>
                    <label>
                        Password:
                        <input type="password" />
                    </label>
                    <button type="submit">Login</button>
                </form>
            </Box>
        </Box>
    );
}
