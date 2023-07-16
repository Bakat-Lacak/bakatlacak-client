import { useState, useEffect, React } from "react";
import { getUserProfileById, getUser, getEducation } from "../fetching/userProfile";
import { getExperience } from "../fetching/userProfile";
import { useStore } from "../modules/store";
import image from "../assets/example.jpg";
import { CardBody, Card } from "@chakra-ui/card";
import { Box, Heading, Stack, StackDivider } from "@chakra-ui/layout";
import TableExperience from "../components/TableExperience";
import TableEducation from "../components/TableEducation";
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
  Td,
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  VStack,
  Input
} from "@chakra-ui/react";

export default function UserProfilePage() {
  const [profile, setProfile] = useState({});
  const [user, setUser] = useState({});
  const [experience, setExperience] = useState({});
  const [education, setEducation] = useState({})
  const [isLoading, setLoading] = useState(false);
  const loggedUser = useStore((state) => state.user);
  const [showBasicInfo, setShowBasicInfo] = useState(true);
  const [showEducation, setShowEducation] = useState(false);
  const [showExperience, setShowExperience] = useState(false);

  async function fetchProfile() {
    const dataUser = await getUser(loggedUser.id);
    const dataProfile = await getUserProfileById(loggedUser.id);
    const dataExperience = await getExperience(loggedUser.id);
    const dataEducation = await getEducation(loggedUser.id)
    setProfile(dataProfile);
    setUser(dataUser);
    setExperience(dataExperience);
    setEducation(dataEducation)
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

  const handleBasicInfoClick = () => {
    setShowBasicInfo(true);
    setShowEducation(false);
    setShowExperience(false);
  };
  const handleEducationClick = () => {
    setShowBasicInfo(false);
    setShowEducation(true);
    setShowExperience(false);
  };
  const handleExperienceClick = () => {
    setShowBasicInfo(false);
    setShowEducation(false);
    setShowExperience(true);
  };

  return (
    <>
      <Flex>
        <Box width="20%" className="pl-20 pt-10">
          <Card>
            <CardBody className="bg-mint bg-opacity-30">
              <Stack divider={<StackDivider />} spacing="1">
                <Button variant="ghost" onClick={handleBasicInfoClick}>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Basic Info
                    </Heading>
                  </Box>
                </Button>
                <Button variant="ghost" onClick={handleEducationClick}>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Education
                    </Heading>
                  </Box>
                </Button>
                <Button variant="ghost" onClick={handleExperienceClick}>
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
        {showBasicInfo && (
          <Box width="80%" className="pr-20 pt-10">
            <TableContainer className="border-4 border-dashed" alt="basic info">
              <Table>
                <TableCaption>
                  <Button variant="solid">Edit</Button>
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th fontSize="xl">Basic Information</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td width="25%">First name</Td>
                    <Td>
                    <Input type="text" defaultValue={user.first_name} />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">Last name</Td>
                    <Td>
                    <Input type="text" defaultValue={user.last_name} />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">E-mail</Td>
                    <Td>
                    <Input type="email" defaultValue={user.email} />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">Phone Number</Td>
                    <Td>
                    <Input type="text" defaultValue={user.phone_number} />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">Birth date</Td>
                    <Td>
                    <Input type="text" defaultValue={user.birth_date} />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">Gender</Td>
                    <Td>
                    <Input type="text" defaultValue={user.gender} />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">About Me</Td>
                    <Td>
                    <Input type="text" defaultValue={profile.about_me} />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">Resume</Td>
                    <Td>
                      <Editable defaultValue={profile.resume}>
                        <EditablePreview />
                        <EditableInput />
                      </Editable>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        )}
        {showEducation && (
          education.map((educ, index) => {
            return(
            <TableEducation education={educ} key={index}></TableEducation>
            )
          })
        )}
        <VStack flex="1">
          {showExperience &&
            experience.map((exp, index) => {
              return (
                <TableExperience experience={exp} key={index}></TableExperience>
              );
            })}
        </VStack>
      </Flex>
    </>
  );
}
