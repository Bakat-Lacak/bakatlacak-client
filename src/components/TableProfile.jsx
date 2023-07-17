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

  export default function TableProfile({user, profile}) {
    return (
        <Box className="pr-20 pt-10 w-full">
            <TableContainer className="border-4 border-solid" alt="basic info">
              <Table>
                <TableCaption>
                  <Button variant="solid">Save</Button>
                  <Button variant="solid">Add</Button>
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th fontSize="xl">Basic Information</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td width="25%">First name</Td>
                    <Td>
                      <Input type="text" defaultValue={user.first_name} />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">Last name</Td>
                    <Td>
                      <Input type="text" defaultValue={user.last_name} />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">E-mail</Td>
                    <Td>
                      <Input type="email" defaultValue={user.email} />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">Phone Number</Td>
                    <Td>
                      <Input type="text" defaultValue={user.phone_number} />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">About Me</Td>
                    <Td>
                      <Input type="text" defaultValue={profile.about_me} />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">Birth date</Td>
                    <Td>
                      <Input type="text" defaultValue={user.birth_date} />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">Gender</Td>
                    <Td>
                      <Input type="text" defaultValue={user.gender} />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">Address</Td>
                    <Td>
                      <Input tpye="text" defaultValue={user.address}></Input>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
    )
  }