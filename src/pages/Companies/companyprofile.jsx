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
import { useStore } from "../../modules/store";

function CompanyProfileUser() {
  const [companyProfiles, setCompanyProfiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Set initial loading state to true
  const navigate = useNavigate();
  const user = useStore((state) => state.user);

  useEffect(() => {
    fetchCompanyProfiles();
  }, []);

  const fetchCompanyProfiles = async () => {
    try {
      const data = await getAllCompanyProfile();
      setCompanyProfiles(data);
      setIsLoading(false); // Set loading state to false when data is fetched
    } catch (err) {
      console.error("Error fetching company data:", err);
      setIsLoading(false); // Set loading state to false in case of an error
    }
  };

  if (isLoading) {
    return (
      <Box h="100vh" display="flex" alignItems="center" justifyContent="center">
        <Spinner size="4xl" color="black" />
      </Box>
    );
  }

  return (
    <ChakraProvider theme={theme}>
      <Box pb={8} maxWidth="1000px" margin="0 auto" mt={5}>
        {user.role === "recruiter" && (
          <Button
            onClick={() => navigate(`/companycreate`)}
            leftIcon={<AddIcon />}
            size="sm"
            bg="white"
            variant="outline"
            mb={5}
            borderRadius="xl"
          >
            Create New
          </Button>
        )}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={3}>
          {companyProfiles.length > 0 ? (
            companyProfiles.map((profile) => (
              <Box
                key={profile.id}
                boxShadow="2px 4px 6px rgba(0, 0, 0, 0.5)"
                bg="white"
                p={4}
                rounded="xl"
              >
                <Box mt={2}>
                  <Heading
                    color="black"
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
                      color="white"
                      bg="black"
                      borderRadius="xl"
                      onClick={() =>
                        navigate(`/companydetail/${profile.id}`)
                      }
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
