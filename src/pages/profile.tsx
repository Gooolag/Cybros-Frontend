import { Image } from "@chakra-ui/image";
import { Box } from "@chakra-ui/layout";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useGetAllUsersQuery, usePayloadQuery } from "../generated/graphql";

interface Props {}

const profile: React.FC<Props> = () => {
  const [{ data: id, error }] = usePayloadQuery({});
  const [{ data }] = useGetAllUsersQuery();
  const [user, setUser] = useState({});

  useEffect(() => {
    if (data) {
      const us = data.getAllUsers.filter((user) => user.id === id.payload);
      setUser(() => us[0]);
      console.log(us[0]);
    }
  }, [data]);
  if (error) {
    console.log(error);
    return (
      <div>
        please login saar
        <Link href="/login">login</Link>
      </div>
    );
  }

  if (!data) {
    return <div>no data</div>;
  }

  return (
    <Box
      bg="brand.600"
      m="150px"
      width="85%"
      display="flex"
      flexDirection="row"
      padding="20px"
      minHeight="1000px"
      borderRadius="20px"
      boxShadow="5px 5px 15px black"
    >
      <Box
        display="flex"
        flexDirection="column" /* border: 2px solid red; */
        width="1200px"
        marginLeft="50px"
        backgroundColor="brand.800"
        color="wheat"
        padding="50px"
        borderRadius="20px"
        boxShadow="1px 1px 15px black"
        fontSize="24px"
      >
        Id: {user.id}
        <br/><br/>
        Welcome {user.first_name} {user.last_name}
        <br/>
        email :{user.email}
        <br/>
        <Image src={user.picture}
        width="1000px"
        margin="50px"
        backgroundColor="brand.800"
        padding="50px"
        borderRadius="20px"
        boxShadow="1px 1px 15px black"
        />
      </Box>
    </Box>
  );
};
export default profile;
