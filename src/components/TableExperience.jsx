import { useState, useEffect, React } from "react";
import { getExperience } from "../fetching/userProfile";
import { useStore } from "../modules/store";
import {
    Button,
    ButtonGroup,
    Grid,
    GridItem,
    Flex,
    Spacer,
    TableContainer,
    TableCaption,
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    Editable,
    EditableInput,
    EditableTextarea,
    EditablePreview,
  } from "@chakra-ui/react";


export default function TableExperience() {
    const loggedUser = useStore((state) => state.user);
    const [experience, setExperience] = useState({})
    const [isLoading, setLoading] = useState(false);

    async function fetchData() {
        const dataExperience = await getExperience(loggedUser.id);
        setExperience(dataExperience);
    } 

    useEffect(() => {
        setLoading(true);
        fetchData();
      }, []); // 1x render

      if (isLoading) {
        return (
          <span className="loading loading-infinity loading-lg flex mx-auto"></span>
        );
      }

    return (
        <Box width="80%" className="pr-20 pt-10">
          <TableContainer className="border-4 border-dashed" alt="Education">
            <Table>
              <TableCaption>
                <Button variant="solid">Edit</Button>
              </TableCaption>
              <Thead>
                <Tr>
                  <Th>Experience</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td width="25%">Company</Td>
                  <Td><Editable defaultValue={experience[1].company}>
                    <EditablePreview />
                    <EditableInput />
                    </Editable></Td>
                </Tr>
                <Tr>
                  <Td width="25%">Industry</Td>
                  <Td><Editable defaultValue={experience[1].industry}>
                    <EditablePreview />
                    <EditableInput />
                    </Editable></Td>
                </Tr>
                <Tr>
                  <Td width="25%">Department</Td>
                  <Td><Editable defaultValue={experience[1].department}>
                    <EditablePreview />
                    <EditableInput />
                    </Editable></Td>
                </Tr>
                <Tr>
                  <Td width="25%">Position</Td>
                  <Td><Editable defaultValue={experience[1].position}>
                    <EditablePreview />
                    <EditableInput />
                    </Editable></Td>
                </Tr>
                <Tr>
                  <Td width="25%">Salary</Td>
                  <Td><Editable defaultValue={experience[1].salary}>
                    <EditablePreview />
                    <EditableInput />
                    </Editable></Td>
                </Tr>
                <Tr>
                  <Td width="25%">end_date</Td>
                  <Td><Editable defaultValue={experience[1].end_date}>
                    <EditablePreview />
                    <EditableInput />
                    </Editable></Td>
                </Tr>
                <Tr>
                  <Td width="25%">Start Date</Td>
                  <Td><Editable defaultValue={experience[1].start_date}>
                    <EditablePreview />
                    <EditableInput />
                    </Editable></Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
    )

}