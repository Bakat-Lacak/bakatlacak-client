import { useState, useEffect, React } from "react";
import { getUserProfileById, getUser } from "../fetching/userProfile";
import { useStore } from "../modules/store";
import image from "../assets/example.jpg";
import { CardBody, Card } from "@chakra-ui/card";
import { Box, Heading, Stack, StackDivider } from "@chakra-ui/layout";
import {
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  Flex,
  Spacer,
  TableContainer,
  TableCaption,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td
} from "@chakra-ui/react";

export default function UserProfilePage() {
  const [profile, setProfile] = useState({});
  const [user, setUser] = useState({});
  const [isLoading, setLoading] = useState(false);
  const loggedUser = useStore((state) => state.user);

  async function fetchProfile() {
    const dataUser = await getUser(loggedUser.id);
    const dataProfile = await getUserProfileById(loggedUser.id);
    setProfile(dataProfile);
    setUser(dataUser);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    fetchProfile();
  }, []); // 1x render

  if (isLoading) {
    return (
      <span className="loading loading-infinity loading-lg flex mx-auto"></span>
    );
  }

  return (
    <>
      <Flex>
        <Box width="20%" className="pl-20 pt-10">
          <Card>
            <CardBody className="bg-mint bg-opacity-30">
              <Stack divider={<StackDivider />} spacing="1">
                <Button variant="ghost">
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Basic Info
                    </Heading>
                  </Box>
                </Button>
                <Button variant="ghost">
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Education
                    </Heading>
                  </Box>
                </Button>
                <Button variant="ghost">
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Experience
                    </Heading>
                  </Box>
                </Button>
              </Stack>
            </CardBody>
          </Card>
        </Box>
        <Box width="80%" className="pr-20 pt-10">
          <TableContainer>
            <Table>
              <TableCaption>
                <Button>Edit</Button>
              </TableCaption>
              <Tbody>
                <Tr>
                  <Td width="25%">First name</Td>
                  <Td>Variable user</Td>
                </Tr>
                <Tr>
                  <Td>Last name</Td>
                  <Td>Variable user</Td>
                </Tr>
                <Tr>
                  <Td>E-mail</Td>
                  <Td>Variable user</Td>
                </Tr>
                <Tr>
                  <Td>Phone Number</Td>
                  <Td>Variable user</Td>
                </Tr>
                <Tr>
                  <Td>Birth Date</Td>
                  <Td>Variable user</Td>
                </Tr>
                <Tr>
                  <Td>Gender</Td>
                  <Td>Variable user</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      </Flex>
    </>
  );
}
