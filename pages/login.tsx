import { Box } from "@chakra-ui/layout";

export default function Login() {
    return (
        <Box>
            <h1>Login</h1>
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
    );
}
