import { useState, useEffect, React, useRef  } from "react";
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
  FormErrorMessage,
  FormHelperText,
  Input,
  Select,
} from "@chakra-ui/react";
import { getSkills, addUserSkill } from "../../fetching/userProfile";
import { useStore } from "../../modules/store";
import TableSkill from "../../components/TableSkill";
import SideButton from "../../components/SideButton";
import Swal from "sweetalert2";

export default function SkillPage() {
  const [userSkill, setUserSkill] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const loggedUser = useStore((state) => state.user);
  const skillRef = useRef('')
  const levelRef = useRef('')

  async function fetchProfile() {
    const dataUserSkills = await getSkills(loggedUser.id);
    setUserSkill(dataUserSkills);
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

  const handleSaveSkill = async () => {

      const data = await addUserSkill({
        name: skillRef.current.value,
        level: levelRef.current.value
      })
      console.log(data)
      Swal.fire({
        icon: 'success',
        title: 'Skill added!',
        showConfirmButton: false,
        timer: 1500
      })
      fetchProfile()
  }

  function BasicUsage() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const combinedClick = () => {
      onClose()
      handleSaveSkill()
    }

    return (
      <>
        <Button colorScheme="green" onClick={onOpen} w={200}>
          Add new skill
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add new skill!</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <FormControl>
                <FormLabel>Skill name</FormLabel>
                <Input placeholder="Example: Crowd Control" ref={skillRef} />
              </FormControl>
              <FormControl className="pt-5">
                <FormLabel>Level</FormLabel>
                <Select placeholder="" ref={levelRef}>
                  <option value="beginner">Beginner</option>
                  <option value="advance">Advance</option>
                  <option value="expert">Expert</option>
                </Select>
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button variant="ghost" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue" onClick={combinedClick}>Save</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }

  

  return (
    <>
      <div className="flex flex-row-reverse pr-20">
        <BasicUsage></BasicUsage>
      </div>
      <Flex>
        <SideButton />
        <VStack flex="1">
          {userSkill.map((userSkill, index) => {
            return <TableSkill userSkill={userSkill} key={index}></TableSkill>;
          })}
        </VStack>
      </Flex>
    </>
  );
}
