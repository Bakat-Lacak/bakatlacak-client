import { useState, useEffect, React } from "react";
import { CardBody, Card } from "@chakra-ui/card";
import { Box, Heading, Stack, StackDivider } from "@chakra-ui/layout";
import { Button, Flex, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { getUserProfileById } from "../../fetching/userProfile";
import { useStore } from "../../modules/store";
import TableResume from "../../components/TableResume";

export default function ResumePage({}) {
    const navigate = useNavigate();
    const [profile, setProfile] = useState({});
    const [isLoading, setLoading] = useState(false);
    const loggedUser = useStore((state) => state.user);

    async function fetchProfile() {
    const dataProfile = await getUserProfileById(loggedUser.id);
    setProfile(dataProfile);
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
        <button>help</button>
        {/* <Flex>
          <Box width="20%" className="pl-20 pt-10" alt="side button"> 
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
                        Educations
                      </Heading>
                    </Box>
                  </Button>
                  <Button variant="ghost">
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        Experiences
                      </Heading>
                    </Box>
                  </Button>
                  <Button variant="ghost">
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        Resume
                      </Heading>
                    </Box>
                  </Button>
                  <Button variant="ghost">
                    <Box>
                      <Heading size="xs" textTransform="uppercase">
                        Skill
                      </Heading>
                    </Box>
                  </Button>
                </Stack>
              </CardBody>
            </Card>
          </Box>
          <VStack flex="1">
              <TableResume profile={profile} />
          </VStack>
        </Flex> */}
      </>
    )
}