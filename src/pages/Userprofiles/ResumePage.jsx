import { useState, useEffect, React, useRef } from "react";
import { getUserProfileById } from "../../fetching/userProfile";
import { useStore } from "../../modules/store";
import TableResume from "../../components/TableResume";
import SideButton from "../../components/SideButton";
import {
  Button,
  Flex,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Select,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Textarea
} from "@chakra-ui/react";

export default function ResumePage() {
    const [profile, setProfile] = useState({});
    const [isLoading, setLoading] = useState(false);
    const loggedUser = useStore((state) => state.user);

    async function fetchProfile() {
    const dataProfile = await getUserProfileById(loggedUser.id);
    setProfile(dataProfile);
    }

    useEffect(() => {
        fetchProfile();
        setLoading(false);
      }, []); // 1x render
    
      if (isLoading) {
        return (
          <span className="loading loading-infinity loading-lg flex mx-auto"></span>
        );
      }

    return (
        <>
                <Button colorScheme="green" onClick={onOpen} w={200}>
          Add new experience
        </Button>

        <Flex className="pt-10 bg-mint shadow-md">
        <SideButton />
          <VStack flex="1" pb={50} pl={5}>
              <TableResume profile={profile} />
          </VStack>
        </Flex>
      </>
    )
}