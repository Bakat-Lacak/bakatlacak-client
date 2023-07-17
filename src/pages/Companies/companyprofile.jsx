import { useEffect, useState } from "react";
import { getAllCompanyProfile } from "../../fetching/companyprofile";
import { useNavigate } from "react-router-dom";

import {
  Heading,
  Box,
  Text,
  ChakraProvider,
  SimpleGrid,
  HStack,
  Button,
  Spinner,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

import theme from "../../../theme";

function CompanyProfileUser() {
  const [companyProfiles, setCompanyProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  

  useEffect(() => {
    fetchCompanyProfiles();
  }, []);

  const fetchCompanyProfiles = async () => {
    try {
      setIsLoading(true);
      const data = await getAllCompanyProfile();
      setCompanyProfiles(data);
      setIsLoading(false);
    } catch (err) {
      console.error("Error fetching company data:", err);
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <Box h="100vh" display="flex" alignItems="center" justifyContent="center">
        <Spinner size="4xl" color="navy" />
      </Box>
    );
  }

  return (
    <ChakraProvider theme={theme}>
      <Box pb={8} maxWidth="1000px" margin="0 auto" mt={5}>
        <Button
          onClick={() => navigate(`/companycreate`)}
          leftIcon={<AddIcon />}
          size="sm"
          bg="white"
          variant="outline"
          mb={5}
        >
          Create New
        </Button>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {companyProfiles.length > 0 ? (
            companyProfiles.map((profile) => (
              
              <Box
                key={profile.id}
                boxShadow="2px 4px 6px rgba(0, 0, 0, 0.5)"
                bg="white"
                p={4}
                rounded="xl"
              >
                <Box mt={4}>
                  <Heading
                    color="navy"
                    fontSize="lg"
                    lineHeight={1.2}
                    fontWeight="bold"
                    transition="opacity 1s ease-in-out"
                  >
                    {profile.name || "No name available"}
                  </Heading>
                  <Text color="black" fontSize="sm" mt={2}>
                    {profile.description || "No description available"}
                  </Text>
                  <HStack mt={3}>
                    <Button
                      size="sm"
                      color="navy"
                      variant="outline"
                      onClick={() => navigate(`/companydetail/${profile.id}`)}
                    >
                      View Details
                    </Button>
                  </HStack>
                </Box>
              </Box>
              
            ))
          ) : (
            <Text color="black" textAlign="center">
              No company profiles available.
            </Text>
          )}
        </SimpleGrid>
      </Box>
    </ChakraProvider>
  );
}

export default CompanyProfileUser;
