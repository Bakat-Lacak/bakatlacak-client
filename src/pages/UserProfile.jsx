import { useState, useEffect, React } from "react";
import { getUserProfileById, getUser } from "../fetching/userProfile";
import { getExperience } from "../fetching/userProfile";
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
  Td,
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
} from "@chakra-ui/react";

export default function UserProfilePage() {
  const [profile, setProfile] = useState({});
  const [user, setUser] = useState({});
  const [experience, setExperience] = useState({})
  const [isLoading, setLoading] = useState(false);
  const loggedUser = useStore((state) => state.user);
  const [showBasicInfo, setShowBasicInfo] = useState(true);
  const [showEducation, setShowEducation] = useState(false);
  const [showExperience, setShowExperience] = useState(false);

  async function fetchProfile() {
    const dataUser = await getUser(loggedUser.id);
    const dataProfile = await getUserProfileById(loggedUser.id);
    const dataExperience = await getExperience(loggedUser.id);
    setProfile(dataProfile);
    setUser(dataUser);
    setExperience(dataExperience);
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
                    <Th>Basic Information</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td width="25%">First name</Td>
                    <Td>
                      <Editable defaultValue={user.first_name}>
                        <EditablePreview />
                        <EditableInput />
                      </Editable>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">Last name</Td>
                    <Td>
                      <Editable defaultValue={user.last_name}>
                        <EditablePreview />
                        <EditableInput />
                      </Editable>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">E-mail</Td>
                    <Td>
                      <Editable defaultValue={user.email}>
                        <EditablePreview />
                        <EditableInput />
                      </Editable>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">Phone Number</Td>
                    <Td>
                      <Editable defaultValue={user.phone_number}>
                        <EditablePreview />
                        <EditableInput />
                      </Editable>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">Birth date</Td>
                    <Td>
                      <Editable defaultValue={user.birth_date}>
                        <EditablePreview />
                        <EditableInput />
                      </Editable>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">Gender</Td>
                    <Td>
                      <Editable defaultValue={user.gender}>
                        <EditablePreview />
                        <EditableInput />
                      </Editable>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">About Me</Td>
                    <Td>
                      <Editable defaultValue={profile.about_me}>
                        <EditablePreview />
                        <EditableInput />
                      </Editable>
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
          <Box width="80%" className="pr-20 pt-10">
            <TableContainer className="border-4 border-dashed" alt="Education">
              <Table>
                <TableCaption>
                  <Button variant="solid">Edit</Button>
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>Education</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td width="25%">School</Td>
                    <Td>
                      <Editable defaultValue="School variable">
                        <EditablePreview />
                        <EditableInput />
                      </Editable>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">Description</Td>
                    <Td>
                      <Editable defaultValue={user.last_name}>
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
        {showExperience && (
          <Box width="80%" className="pr-20 pt-10">
            <TableContainer className="border-4 border-dashed" alt="Education">
              <Table>
                <TableCaption>
                  <Button variant="solid">Edit</Button>
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>Experience</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td width="25%">Company</Td>
                    <Td>
                      <Editable defaultValue={experience[1].company}>
                        <EditablePreview />
                        <EditableInput />
                      </Editable>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">Industry</Td>
                    <Td>
                      <Editable defaultValue={experience[1].industry}>
                        <EditablePreview />
                        <EditableInput />
                      </Editable>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">Department</Td>
                    <Td>
                      <Editable defaultValue={experience[1].department}>
                        <EditablePreview />
                        <EditableInput />
                      </Editable>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">Position</Td>
                    <Td>
                      <Editable defaultValue={experience[1].position}>
                        <EditablePreview />
                        <EditableInput />
                      </Editable>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">Salary</Td>
                    <Td>
                      <Editable defaultValue={experience[1].salary}>
                        <EditablePreview />
                        <EditableInput />
                      </Editable>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">end_date</Td>
                    <Td>
                      <Editable defaultValue={experience[1].end_date}>
                        <EditablePreview />
                        <EditableInput />
                      </Editable>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">Start Date</Td>
                    <Td>
                      <Editable defaultValue={experience[1].start_date}>
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
      </Flex>
    </>
  );
}
