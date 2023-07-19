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

  export default function TableSkill({userSkill}) {
    return (
        <Box className="pr-20 pt-10 w-full">
          <TableContainer className="border-2 border-solid" alt="Education">
            <Table size="sm">
              <TableCaption>
                <Button variant="solid">Save</Button>
              </TableCaption>
              <Thead>
                <Tr>
                  <Th fontSize="xl">Skill</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td fontSize="lg" width="25%">Skill</Td>
                  <Td><Input type="text" defaultValue={userSkill.Skill.name} /></Td>
                </Tr>
                <Tr>
                  <Td fontSize="lg" width="25%">Level</Td>
                  <Td><Input type="text" defaultValue={userSkill.Skill.level} /></Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
    )
  }