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
      showConfirmButton: false
    });
    navigate("/")
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

  const handleApply = () => {
    navigate("/job-apply/${id}")
  };

  return (

      <Box bg="white">
        <Flex maxW="7xl" px={4} align="center" h={16}>
          <Box>
            <a href="/">
              <Image src={logo} alt="LOGO" h={6} mb={1} mr={2}/>
            </a>
          </Box>
          <Flex align="center">
          {isLoggedIn && (
            <Button
              variant="ghost"
              colorScheme="black"
              fontWeight="regular"
              px={4}
              py={2}
              rounded="md"
              fontSize="md"
              onClick={() => navigate("/job")}
            >
              Jobs
            </Button>
          )}
            {isLoggedIn && (
              <Button
                variant="ghost"
                colorScheme="black"
                fontWeight="regular"
                px={4}
                py={2}
                rounded="md"
                fontSize="md"
                onClick={handleCompany}
              >
                Company Profile
              </Button>
            )}
            {isLoggedIn && (
              <Button
                variant="ghost"
                colorScheme="black"
                fontWeight="regular"
                px={4}
                py={2}
                rounded="md"
                fontSize="md"
                onClick={handleProfile}
              >
                My Profile
              </Button>
            )}
            {isLoggedIn && (
            <Button
              variant="ghost"
              colorScheme="black"
              fontWeight="regular"
              px={4}
              py={2}
              rounded="md"
              fontSize="md"
              onClick={handleApply}
            >
              Apply Job
            </Button>
          )}
          </Flex>
          <Spacer />
          <Button
            bg="black"
            color="white"
            fontWeight="semibold"
            px={4}
            py={2}
            rounded="xl"
            fontSize="md"
            onClick={isLoggedIn ? handleLogout : handleLogin}
          >
            {isLoggedIn ? "Logout" : "Login"}
          </Button>
          <Box display={{ base: "block", md: "none" }}>
            <IconButton
              variant="ghost"
              colorScheme="black"
              rounded="md"
              fontSize="sm"
              aria-label="Open mobile menu"
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              onClick={handleClick}
            />
          </Box>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <Box bg="black" py={2} px={4}>
            <Flex direction="column">
              <Button
                variant="ghost"
                colorScheme="white"
                w="full"
                px={4}
                py={2}
                rounded="md"
                fontSize="sm"
                onClick={() => navigate("/job")}
              >
                Jobs
              </Button>
              {isLoggedIn && (
                <Button
                  variant="ghost"
                  colorScheme="white"
                  w="full"
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
                  colorScheme="white"
                  w="full"
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
          </Box>
        </Collapse>
      </Box>
    
  );
}

export default Navbar;
