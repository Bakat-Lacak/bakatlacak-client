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
  import { CopyIcon } from '@chakra-ui/icons'

  export default function TableResume({profile}) {
    return(
        <Box className="pr-20 pt-10 w-full">
            <TableContainer className="border-4 border-solid" alt="basic info">
              <Table>
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
                    <Td width="25%">Add resume</Td>
                    <Td>
                      <Input type="file"/>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">Current Resume</Td>
                    <Td><a href="login">
                      <CopyIcon className="pb-2" boxSize={20} />
                    </a>
                    <p>{profile.resume}</p>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">Portofolio</Td>
                    <Td>
                      <Input type="text" defaultValue={profile.portofolio} />
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
    )
  }