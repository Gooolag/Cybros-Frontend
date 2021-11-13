import { Box, ChakraProvider, extendTheme } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { createClient, Provider } from "urql";
import cors from "cors";
import { getAccessToken, setAccessToken } from "../accessToken";

const client = createClient({
  url: "http://localhost:4000/graphql",

  fetchOptions: () => {
    const token = getAccessToken();

    return token
      ? {
          credentials: "include",
          mode: "cors",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github.packages-preview+json",
          },
        }
      : {};
  },
});

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1D2D50",
    800: "#133B5C",
    700: "#1E5F74",
    600: "#FCDAB7",
  },
};

const theme = extendTheme({ colors });

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/refreash_token", {
      method: "POST",
      credentials: "include" 
    }).then(async x=> {
      const {accessToken} = await x.json();
      setAccessToken(accessToken);
      console.log(accessToken);
      setLoading(false);
    })
  }, []);
  if (loading){
    return <div>loading ...</div>
  }
  return (
    <Provider value={client}>
      <ChakraProvider theme={theme}>
        <Box>
          <Navbar />
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </Provider>
  );
}
export default MyApp;
