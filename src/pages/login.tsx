import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import React, { useState } from "react";
import { setAccessToken } from "../accessToken";
import { useLoginMutation } from "../generated/graphql";

const signin = () => {
  const [, login] = useLoginMutation();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box height="100%" display="flex" justifyContent="center" padding="100px">
      <Box
        display="flex"
        minHeight="500px"
        justifyContent="center"
        bgColor="brand.800"
        width="40%"
        borderRadius="30px"
        padding="20px"
        paddingTop="100px"
      >
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const response = await login({
              details: { email: email, password: password },
            });
            console.log(response.data);
            if(response && response.data) {
              setAccessToken(response.data.login.accessToken);
            }
          }}
        >
          <Box
            width="600px"
            height="100px"
            padding="10px"
            display="flex"
            justifyContent="center"
          >
            <Box
              htmlFor="email"
              color="white"
              m="10px"
              fontSize="24px"
              width="170px"
            >
              email :{" "}
            </Box>
            <Input
              m="10px"
              bgColor="brand.600"
              height="50px"
              fontSize="24"
              type="text"
              name="email"
              id="email"
              autoComplete="off"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </Box>

          <Box
            width="600px"
            height="100px"
            padding="10px"
            display="flex"
            justifyContent="center"
          >
            <Box
              htmlFor="password"
              color="white"
              m="10px"
              fontSize="24px"
              width="170px"
            >
              Password :{" "}
            </Box>
            <Input
              m="10px"
              height="50px"
              fontSize="24"
              bgColor="brand.600"
              type="password"
              name="password"
              id="password"
              autoComplete="off"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Box
            width="600px"
            height="100px"
            padding="10px"
            display="flex"
            justifyContent="center"
            marginTop="50px"
          >
            <Button
              width="200px"
              height="70px"
              type="submit"
              bgColor="red.500"
              fontSize="24"
            >
              Login
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
export default signin;
