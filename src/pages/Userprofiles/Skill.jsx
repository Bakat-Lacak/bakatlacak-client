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
  Input,
  Select,
} from "@chakra-ui/react";
import { getSkills, addUserSkill } from "../../fetching/skills";
import { useStore } from "../../modules/store";
import TableSkill from "../../components/TableSkill";
import SideButton from "../../components/SideButton";
import Swal from "sweetalert2";
import Loading from "../../components/Loading";

export default function SkillPage() {
  const [userSkill, setUserSkill] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const loggedUser = useStore((state) => state.user);
  const skillRef = useRef('')
  const levelRef = useRef('')

  async function fetchProfile() {
    const dataUserSkills = await getSkills(loggedUser.id);
    setUserSkill(dataUserSkills);
    setLoading(false);
  }

  useEffect(() => {
    setLoading(true);
    fetchProfile();
  }, []); // 1x render

  if (isLoading) {
    return (
      <Loading />
    );
  }

  const handleSaveSkill = async () => {

      const textSkill = skillRef.current.value
      const textLevel = levelRef.current.value

      if(!skillRef.current.value) {
        Swal.fire({
          icon: 'error',
          title: 'Oops! please insert skill',
          showConfirmButton: false,
          timer: 1500
        })
      } else {
        const data = await addUserSkill({
          name: textSkill,
          level: textLevel
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
  }

  function ButtonAddSkill() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    
    const combinedClick = () => {
      if(!skillRef.current.value) {
        handleSaveSkill()
      } else {
        handleSaveSkill()
        onClose()
      }
      
    }

    return (
      <>
        <Button colorScheme="green" onClick={onOpen} w={200}>
          Add new skill
        </Button>

        <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose}>
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
      <div className="flex flex-row-reverse pr-[80px] pt-5 bg-mint">
        <ButtonAddSkill></ButtonAddSkill>
      </div>
      <Flex bgColor="mint" pb={100} shadow="md">
        <SideButton />
          <div className="ml-5 grid grid-cols-3 gap-1 container place-items-start py-3">
            {userSkill.map((userSkill, index) => {
              return <TableSkill fetchProfile={fetchProfile} userSkill={userSkill} key={index}></TableSkill>;
            })}
          </div>
      </Flex>
    </>
  );
}
