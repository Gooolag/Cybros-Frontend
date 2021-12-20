import { Box } from "@chakra-ui/layout";
import { Button, Input } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import Router from "next/router";

export default function Login() {
    const [loading, setLoading] = useState(false);
    const [redirect, setRedirect] = useState(false);
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
            e.target.value = "";
            setRedirect(true);
        } else {
            alert("Please fill all the fields");
        }
    };
    useEffect(() => {
        const { pathname } = Router;
        console.log(pathname);
        if (pathname == "/login" && redirect) Router.push("/");
    }, []);

    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            margin="1.5vw"
            width="97vw"
            height="82vh"
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
                margin="2.5vw"
                justifyContent="center"
            >
                <FormControl
                    isRequired
                    onSubmit={handleSubmit}
                    display="flex"
                    flexDirection="column"
                    justifyContent="center"
                >
                    <Box
                        marginBottom="3vh"
                        display="flex"
                        flexDirection="column"
                        marginLeft="36vw"
                    >
                        <FormLabel>Username:</FormLabel>
                        <Input
                            type="text"
                            id="username"
                            placeholder="Enter your Username"
                            autoComplete="off"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            width="40%"
                        />
                    </Box>
                    <Box
                        marginTop="1vh"
                        display="flex"
                        flexDirection="column"
                        marginLeft="36vw"
                    >
                        <FormLabel>Password: </FormLabel>
                        <Input
                            type="password"
                            id="password"
                            placeholder="Enter your Password"
                            autoComplete="off"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            width="40%"
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
