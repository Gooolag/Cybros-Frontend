import { Box } from "@chakra-ui/layout";
import { Button, Input } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Router from "next/router";

export default function Login() {
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    // const [name, setName] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        // const res = await login({
        //     details: { username: username, password: password },
        // });
        // console.log(res.data);
        // setName(res.data.login.username);
    };

    const handleClick = (e) => {
        e.preventDefault();
        if (username && password) {
            console.log("submitted the form");
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 500);
            alert(`Logged in as ${username}`);
        } else {
            alert("Please fill all the fields");
        }
    };

    useEffect(() => {
        const { pathname } = Router;
        console.log(pathname);
        if (pathname == "/login" && username && password) Router.push("/");
    }, []);

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            margin="1.5vw"
            width="98vw"
            height="100%"
        >
            <Box
                display="flex"
                fontSize="2.5rem"
                margin="1.5vw"
                justifyContent="center"
            >
                Login
            </Box>
            <Box
                display="flex"
                flexDirection="column"
                margin="1.5vw"
                justifyContent="center"
            >
                <FormControl
                    isRequired
                    margin="1vw"
                    marginLeft="33vw"
                    onSubmit={handleSubmit}
                >
                    <Box marginBottom="4vh">
                        <FormLabel>Username:</FormLabel>
                        <Input
                            type="text"
                            id="username"
                            placeholder="Enter your Username"
                            autoComplete="off"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            width="33%"
                        />
                    </Box>
                    <Box marginTop="2vh">
                        <FormLabel>Password: </FormLabel>
                        <Input
                            type="password"
                            id="password"
                            placeholder="Enter your Password"
                            autoComplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            width="33%"
                        />
                    </Box>
                </FormControl>
            </Box>
            <Box display="flex" justifyContent="center">
                <Button
                    isLoading={loading}
                    loadingText="Submitting"
                    colorScheme="teal"
                    variant="outline"
                    onClick={handleClick}
                >
                    Login
                </Button>
            </Box>
        </Box>
    );
}
