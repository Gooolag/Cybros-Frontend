import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useRegisterMutation } from "../generated/graphql";

const signup = () => {
  const [email, setemail] = useState("");
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [pic, setPic] = useState("");
  const [password, setPassword] = useState("");
  const [, register] = useRegisterMutation();
  const router = useRouter();

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
        paddingTop="50px"
      >
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const response = await register({
              details: {
                email: email,
                password: password,
                first_name: first,
                last_name: last,
                picture: pic,
              },
            });
            console.log(response);
            router.push("/");
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
              bgColor="brand.600"
              height="50px"
              fontSize="24"
              type="password"
              name="Phone"
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
          >
            <Box
              htmlFor="first_name"
              color="white"
              m="10px"
              fontSize="24px"
              width="170px"
            >
              FirstName :{" "}
            </Box>
            <Input
              m="10px"
              bgColor="brand.600"
              height="50px"
              fontSize="24"
              type="text"
              name="first_name"
              id="first_name"
              autoComplete="off"
              value={first}
              onChange={(e) => setFirst(e.target.value)}
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
              htmlFor="last_name"
              color="white"
              m="10px"
              fontSize="24px"
              width="170px"
            >
              LastName :{" "}
            </Box>
            <Input
              m="10px"
              bgColor="brand.600"
              height="50px"
              fontSize="24"
              type="text"
              name="last_name"
              id="last_name"
              autoComplete="off"
              value={last}
              onChange={(e) => setLast(e.target.value)}
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
              htmlFor="last_name"
              color="white"
              m="10px"
              fontSize="24px"
              width="170px"
            >
              Pic :{" "}
            </Box>
            <Input
              m="10px"
              bgColor="brand.600"
              height="50px"
              fontSize="24"
              type="text"
              name="last_name"
              id="last_name"
              autoComplete="off"
              value={pic}
              onChange={(e) => setPic(e.target.value)}
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
              height="50px"
              type="submit"
              bgColor="red.500"
              fontSize="24"
            >
              Register
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  );
};
export default signup;
