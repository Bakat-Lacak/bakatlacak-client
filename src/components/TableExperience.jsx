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
    Editable,
    EditableInput,
    EditablePreview,
    Box,
    Input
  } from "@chakra-ui/react";


export default function TableExperience({experience}) {

    return (
        <Box className="pr-20 pt-10">
          <TableContainer className="border-4 border-dashed" alt="Education">
            <Table>
              <TableCaption>
                <Button variant="solid">Edit</Button>
              </TableCaption>
              <Thead>
                <Tr>
                  <Th fontSize="xl">Experience</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td width="25%">Company</Td>
                  <Td><Input type="text" defaultValue={experience.company} /></Td>
                </Tr>
                <Tr>
                  <Td width="25%">Industry</Td>
                  <Td><Input type="text" defaultValue={experience.industry} /></Td>
                </Tr>
                <Tr>
                  <Td width="25%">Department</Td>
                  <Td><Input type="text" defaultValue={experience.department} /></Td>
                </Tr>
                <Tr>
                  <Td width="25%">Position</Td>
                  <Td><Input type="text" defaultValue={experience.position} /></Td>
                </Tr>
                <Tr>
                  <Td width="25%">Salary</Td>
                  <Td><Input type="text" defaultValue={experience.salary} /></Td>
                </Tr>
                <Tr>
                  <Td width="25%">end_date</Td>
                  <Td><Input type="text" defaultValue={experience.end_date} /></Td>
                </Tr>
                <Tr>
                  <Td width="25%">Start Date</Td>
                  <Td><Input type="text" defaultValue={experience.start_date} /></Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
    )

}