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
    Input
  } from "@chakra-ui/react";

  export default function TableEducation({education}) {
    return (
        <Box className="pr-20 pt-10 w-full">
            <TableContainer className="border-2 border-solid" alt="Education">
              <Table>
                <TableCaption>
                  <Button variant="solid">Save</Button>
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
                    <Input type="text" defaultValue={education.Education.school_name} />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">Major</Td>
                    <Td>
                    <Input type="text" defaultValue={education.major} />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">Graduation Date</Td>
                    <Td>
                    <Input type="text" defaultValue={education.graduation_date} />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">Start Date</Td>
                    <Td>
                    <Input type="text" defaultValue={education.start_date} />
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
    )
  }