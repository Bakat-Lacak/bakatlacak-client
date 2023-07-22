import { useState, useEffect } from "react";
import {
  Box,
  Flex,
  Spacer,
  Button,
  Image,
  IconButton,
  Collapse,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import logo from "../assets/logo.png";

function Navbar() {
  const { isOpen, onToggle } = useDisclosure();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userLoggedIn = Boolean(token);
    setLoggedIn(userLoggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setLoggedIn(false);
    Swal.fire({
      title: "Logging out..",
      timer: 1000,
      showConfirmButton: false,
    });
    navigate("/");
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleCompany = () => {
    navigate("/companyprofile");
  };

  const handleClick = () => {
    onToggle();
  };

  return (
    <Box bg="white">
      <Flex maxW="7xl" px={4} align="center" h={16}>
        <Box>
          <a href="/">
            <Image src={logo} alt="LOGO" h={5} mb={1} mr={2} />
          </a>
        </Box>
        <Flex align="center" display={{ base: "none", md: "flex" }}>
          <Button
            variant="ghost"
            colorScheme="black"
            px={4}
            py={2}
            rounded="md"
            fontSize="sm"
            onClick={() => navigate("/job")}
          >
            Job
          </Button>
          {isLoggedIn && (
            <Button
              variant="ghost"
              colorScheme="black"
              px={4}
              py={2}
              rounded="md"
              fontSize="sm"
              onClick={handleCompany}
            >
              Company Profile
            </Button>
          )}
          {isLoggedIn && (
            <Button
              variant="ghost"
              colorScheme="black"
              px={4}
              py={2}
              rounded="md"
              fontSize="sm"
              onClick={handleProfile}
            >
              My Profile
            </Button>
          )}
        </Flex>
        <Spacer />
        <Button
          display={{ base: "none", md: "flex" }}
          bg="black"
          color="mint"
          fontWeight="bold"
          px={4}
          py={2}
          rounded="full"
          fontSize="sm"
          onClick={isLoggedIn ? handleLogout : handleLogin}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </Button>
        <Box display={{ base: "block", md: "none" }}>
          <IconButton
            variant="solid"
            bgColor="black"
            color="white"
            rounded="md"
            fontSize="xl"
            aria-label="Open mobile menu"
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            onClick={handleClick}
          />
        </Box>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Box bg="white" py={2} px={4}>
          <VStack align="flex-start" spacing={2}>
            <Button
              variant="ghost"
              colorScheme="white"
              w="full"
              px={4}
              py={2}
              rounded="md"
              fontSize={{ base: "md", md: "sm" }}
              onClick={() => navigate("/job")}
            >
              Job
            </Button>
            {isLoggedIn && (
              <Button
                variant="ghost"
                colorScheme="white"
                w="full"
                px={4}
                py={2}
                rounded="md"
                fontSize={{ base: "md", md: "sm" }}
                onClick={handleCompany}
              >
                Company Profile
              </Button>
            )}
            {isLoggedIn && (
              <Button
                variant="ghost"
                colorScheme="white"
                w="full"
                px={4}
                py={2}
                rounded="md"
                fontSize={{ base: "md", md: "sm" }}
                onClick={handleProfile}
              >
                My Profile
              </Button>
            )}
             <Button
             
          display={{ base: "md", md: "none" }}
          bg="black"
          color="mint"
          fontWeight="bold"
          px={4}
          py={2}
          mx={270}
          my={5}
          rounded="full"
          fontSize="sm"
          onClick={isLoggedIn ? handleLogout : handleLogin}
        >
          {isLoggedIn ? "Logout" : "Login"}
        </Button>
          </VStack>
        </Box>
      </Collapse>
    </Box>
  );
}

export default Navbar;
