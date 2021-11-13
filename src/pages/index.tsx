import Head from "next/head";
import { Box } from "@chakra-ui/layout";

export default function Home() {
  return (
    <Box>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box display="flex" alignItems="center" justifyContent="center"></Box>
    </Box>
  );
}
