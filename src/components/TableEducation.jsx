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

  export default function TableEducation({education}) {
    return (
        <Box width="80%" className="pr-20 pt-10">
            <TableContainer className="border-4 border-dashed" alt="Education">
              <Table>
                <TableCaption>
                  <Button variant="solid">Edit</Button>
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th fontSize="xl">Education</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td width="25%">School</Td>
                    <Td>
                    <Input type="text" defaultValue={education.id} />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">Description</Td>
                    <Td>
                    <Input type="text" defaultValue={education.description} />
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
    )
  }