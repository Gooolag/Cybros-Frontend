import React from "react";
import Link from "next/link";
import { Box, Text } from "@chakra-ui/layout";

function Nav() {
  return (
    <Box
      height="70px"
      p="20px"
      display="flex"
      align-items="center"
      justify-content="flex-start"
      flexDirection="row"
      width="100%"
      bg="brand.700"
    >
      <Text color="white" d="flex" justifyContent="space-evenly" width="20%">
        <Link href="/">Home</Link>
        <Link href="/register">register</Link>
        <Link href="http://localhost:4000/google">login</Link>
        <Link href="/profile">Profile</Link>
      </Text>
    </Box>
  );
}

export default Nav;
