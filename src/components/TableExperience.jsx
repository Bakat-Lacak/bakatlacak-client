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
    Box
  } from "@chakra-ui/react";


export default function TableExperience({experience}) {

    return (
        <Box width="100%" className="pr-20 pt-10">
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
                  <Td><Editable defaultValue={experience.company}>
                    <EditablePreview />
                    <EditableInput />
                    </Editable></Td>
                </Tr>
                <Tr>
                  <Td width="25%">Industry</Td>
                  <Td><Editable defaultValue={experience.industry}>
                    <EditablePreview />
                    <EditableInput />
                    </Editable></Td>
                </Tr>
                <Tr>
                  <Td width="25%">Department</Td>
                  <Td><Editable defaultValue={experience.department}>
                    <EditablePreview />
                    <EditableInput />
                    </Editable></Td>
                </Tr>
                <Tr>
                  <Td width="25%">Position</Td>
                  <Td><Editable defaultValue={experience.position}>
                    <EditablePreview />
                    <EditableInput />
                    </Editable></Td>
                </Tr>
                <Tr>
                  <Td width="25%">Salary</Td>
                  <Td><Editable defaultValue={experience.salary}>
                    <EditablePreview />
                    <EditableInput />
                    </Editable></Td>
                </Tr>
                <Tr>
                  <Td width="25%">end_date</Td>
                  <Td><Editable defaultValue={experience.end_date}>
                    <EditablePreview />
                    <EditableInput />
                    </Editable></Td>
                </Tr>
                <Tr>
                  <Td width="25%">Start Date</Td>
                  <Td><Editable defaultValue={experience.start_date}>
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