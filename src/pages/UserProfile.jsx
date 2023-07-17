import { useState, useEffect, React } from "react";
import {
  getUserProfileById,
  getUser,
  getEducation,
} from "../fetching/userProfile";
import { getExperience } from "../fetching/userProfile";
import { useStore } from "../modules/store";
import { CardBody, Card } from "@chakra-ui/card";
import { Box, Heading, Stack, StackDivider } from "@chakra-ui/layout";
import TableExperience from "../components/TableExperience";
import TableEducation from "../components/TableEducation";
import TableProfile from "../components/TableProfile";
import { Button, Flex, VStack } from "@chakra-ui/react";

export default function UserProfilePage() {
  const [profile, setProfile] = useState({});
  const [user, setUser] = useState({});
  const [experience, setExperience] = useState({});
  const [education, setEducation] = useState({});
  const [isLoading, setLoading] = useState(false);
  const loggedUser = useStore((state) => state.user);
  const [showBasicInfo, setShowBasicInfo] = useState(true);
  const [showEducation, setShowEducation] = useState(false);
  const [showExperience, setShowExperience] = useState(false);

  async function fetchProfile() {
    const dataUser = await getUser(loggedUser.id);
    const dataProfile = await getUserProfileById(loggedUser.id);
    const dataExperience = await getExperience(loggedUser.id);
    const dataEducation = await getEducation(loggedUser.id);
    setProfile(dataProfile);
    setUser(dataUser);
    setExperience(dataExperience);
    setEducation(dataEducation);
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
        <Box width="20%" className="pl-20 pt-10" alt="side button"> 
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
        <VStack flex="1">
        {showBasicInfo && (
          <TableProfile user={user} profile={profile} />
        )}
        </VStack>
        <VStack flex="1">
          {showEducation &&
            education.map((educ, index) => {
              return (
                <TableEducation education={educ} key={index}></TableEducation>
              );
            })}
        </VStack>
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
