import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCompanyProfileById } from "../../fetching/companyprofile";
import {
  Heading,
  Box,
  Text,
  ChakraProvider,
  Stack,
  Card,
  CardBody,
  Spacer,
  CardHeader,
  HStack,
  IconButton,
  Wrap,
  Spinner,
} from "@chakra-ui/react";
import { EditIcon, ArrowLeftIcon } from "@chakra-ui/icons";
import theme from "../../../theme";

export default function CompanyDetail() {
  const { id } = useParams();
  const [company, setCompany] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const fetchCompany = async () => {
    const data = await getCompanyProfileById(id);
    setCompany(data);
    setIsLoading(false);
  };

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      navigate(`/companyprofile`);
    }, 500);
  };

  useEffect(() => {
    setIsLoading(true);
    fetchCompany();
  }, []);

  if (isLoading) {
    return (
      <Box h="100vh" display="flex" alignItems="center" justifyContent="center">
        <Spinner size="xl" color="navy" />
      </Box>
    );
  }

  return (
    <ChakraProvider theme={theme}>
      <Box pb={8}>
        <Box pos="relative" bg="navy" height="250px" w="100%">
          <Wrap mx={2}>
            <IconButton onClick={handleClick} mt={2} icon={<ArrowLeftIcon />} />
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
              <HStack>
                <Heading
                  color="navy"
                  fontSize="4xl"
                  lineHeight={1.2}
                  fontWeight="bold"
                >
                  {company.name}
                </Heading>
                <IconButton onClick={() =>
                navigate(`/companyedit/${id}`)} size="xs" color="navy" icon={<EditIcon />} />
              </HStack>
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
                {company.description}
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
                    <Text>Location: {company.location}</Text>
                    <Text>Field: {company.field}</Text>
                    <Text>Total Employees: {company.total_employee}</Text>
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
