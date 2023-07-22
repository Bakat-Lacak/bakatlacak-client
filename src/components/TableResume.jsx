import { useState, React } from "react";
import Swal from "sweetalert2";
import {
  Button,
  TableContainer,
  TableCaption,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Box,
  Input,
  Textarea
} from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { FaFileLines } from "react-icons/fa6";

export default function TableResume({ profile }) {

  const [aboutMe, setAboutMe] = useState(profile.about_me)
  const [salary, setSalary] = useState(profile.salary_expectation)
  const [resume, setResume] = useState(profile.resume)
  const [portofolio, setPortofolio] = useState(profile.portofolio)

  const formData = new FormData()
  formData.append("about_me", aboutMe)
  formData.append("salary_expectation", salary)
  formData.append("resume", resume)
  formData.append("portofolio", portofolio)
  

  return (
    <Box className="pr-20 pt-5 pb-20 w-full">
      <TableContainer className="border-2 border-solid rounded-xl bg-white shadow-xl" alt="basic info">
        <Table size="sm" mt={5}>
          <TableCaption>
            <Button variant="solid">Save</Button>
          </TableCaption>
          <Thead>
            <Tr>
              <Th fontSize="xl">Resume</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td fontSize="lg" width="25%">
                About Me
              </Td>
              <Td>
                <Textarea type="text" defaultValue={profile.about_me} onChange={(e) => setAboutMe(e.target.value)} />
              </Td>
            </Tr>
            <Tr>
              <Td fontSize="lg" width="25%">
                Salary Expectation
              </Td>
              <Td>
                <Input type="text" defaultValue={profile.salary_expectation} onChange={(e) => setSalary(e.target.value)} />
              </Td>
            </Tr>
            <Tr>
              <Td fontSize="lg" width="25%">
                Add resume
              </Td>
              <Td>
                <Input type="file"  onChange={(e) => setResume(e.target.files[0])}/>
              </Td>
            </Tr>
            <Tr>
              <Td fontSize="lg" width="25%">
                Current Resume
              </Td>
              <Td>
<<<<<<< HEAD
                <a href={profile.resume}>
                <IconButton boxSize={20} fontSize={30} icon={<FaFileLines />}></IconButton>
=======
                <a href={profile.resume}>
                  <IconButton
                    boxSize={20}
                    fontSize={30}
                    icon={<FaFileLines />}
                  ></IconButton>
>>>>>>> aef1005b10a8a5ae3a4437f3ebd67551c0470e74
                </a>
                <p>{profile.resume}</p>
              </Td>
            </Tr>
            <Tr>
              <Td fontSize="lg" width="25%">
                Portofolio
              </Td>
              <Td>
                <Input type="text" defaultValue={profile.portofolio} onChange={(e) => setPortofolio(e.target.files[0])} />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
