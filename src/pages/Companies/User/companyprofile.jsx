import { useEffect, useState } from "react";
import { getAllCompanyProfile } from "../../../fetching/companyprofile";

import {
  Heading,
  Box,
  Text,
  ChakraProvider,
  Wrap,
  Stack,
  Card,
  CardBody,
  Spacer,
  CardHeader,
  HStack,
  IconButton,
} from "@chakra-ui/react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

import theme from "../../../../theme";

function CompanyProfileUser() {
  const [companyProfiles, setCompanyProfiles] = useState([]);
  const [currentProfileIndex, setCurrentProfileIndex] = useState(0);

  useEffect(() => {
    fetchCompanyProfiles();
  }, []);

  const fetchCompanyProfiles = async () => {
    try {
      const data = await getAllCompanyProfile();
      setCompanyProfiles(data);
    } catch (err) {
      console.error("Error fetching company data:");
    }
  };

  const handleNextProfile = () => {
    setCurrentProfileIndex(
      (prevIndex) => (prevIndex + 1) % companyProfiles.length
    );
  };

  const handlePreviousProfile = () => {
    setCurrentProfileIndex(
      (prevIndex) =>
        (prevIndex - 1 + companyProfiles.length) % companyProfiles.length
    );
  };

  const currentProfile = companyProfiles?.[currentProfileIndex];


  return (
    <ChakraProvider theme={theme}>
      <Box pb={8}>
        <Box pos="relative" bg="navy" height="250px" w="100%">
          <Wrap mx={2}>
            <IconButton
              onClick={handlePreviousProfile}
              mt={2}
              icon={<ArrowLeftIcon />}
            />
            <IconButton
              onClick={handleNextProfile}
              mt={2}
              alignSelf="right"
              icon={<ArrowRightIcon />}
            />
          </Wrap>
        </Box>

        <Box
          maxW="3xl"
          p={4}
          isolation="isolate"
          zIndex={3}
          mt="-5rem"
          marginInline="auto"
        >
          <Box
            boxShadow="0 4px 6px rgba(160, 174, 192, 0.6)"
            bg="white"
            p={{ base: 4, sm: 8 }}
            overflow="hidden"
            rounded="2xl"
          >
            <Box direction="column" spacing={5} textAlign="left">
              <Heading
                color="navy"
                fontSize="4xl"
                lineHeight={1.2}
                fontWeight="bold"
              >
                {currentProfile?.name || "No name available"}
              </Heading>
              <Spacer mt={2} />
            </Box>
          </Box>
          <HStack>
            <Box maxW="70%" p={5} mr={1} pos="left" h="400px">
              <Heading
                color="navy"
                fontSize="xl"
                lineHeight={1.2}
                fontWeight="bold"
              >
                Company Description
              </Heading>
              <Text color="black" fontSize="l" maxW="100%" lineHeight={1.2}>
                {currentProfile?.description || "No description available"}
              </Text>
            </Box>

            <Box maxW="100%" p={2} ml="520" h="400px" pos="absolute">
              <Card>
                <CardHeader>
                  <Heading as="h3" size="md" color="navy">
                    Company Details
                  </Heading>
                </CardHeader>
                <CardBody>
                  <Stack spacing={4}>
                    <Text>
                      Location: {currentProfile?.location || "Unknown"}
                    </Text>
                    <Text>Field: {currentProfile?.field || "Unknown"}</Text>
                    <Text>
                      Total Employees:{" "}
                      {currentProfile?.total_employee || "Unknown"}
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
            </Box>
          </HStack>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default CompanyProfileUser;