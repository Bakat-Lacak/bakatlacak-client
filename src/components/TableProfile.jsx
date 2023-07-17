import { useState, useEffect, React } from "react";
import { editUser } from "../fetching/userProfile";
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

  export default function TableProfile({user}) {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [birthDate, setBirthDate] = useState("")
    const [gender, setGender] = useState("")
    const [address, setAddress] = useState("")

    const handleBasicInfo = async () => {
      const data = await editUser({
        first_name: firstName,
        last_name: lastName,
        email,
        phone_number: phoneNumber,
        birth_date: birthDate,
        gender,
        address
      })
    }

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
                      <Input type="text" defaultValue={user.first_name} onChange={(e) => setFirstName(e.target.value)} />
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">Last name</Td>
                    <Td>
                      <Input type="text" defaultValue={user.last_name} onChange={(e) => setLastName(e.target.value)}/>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">E-mail</Td>
                    <Td>
                      <Input type="email" defaultValue={user.email} onChange={(e) => setEmail(e.target.value)}/>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">Phone Number</Td>
                    <Td>
                      <Input type="text" defaultValue={user.phone_number} onChange={(e) => setPhoneNumber(e.target.value)}/>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">Birth date</Td>
                    <Td>
                      <Input type="text" defaultValue={user.birth_date} onChange={(e) => setBirthDate(e.target.value)}/>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">Gender</Td>
                    <Td>
                      <Input type="text" defaultValue={user.gender} onChange={(e) => setGender(e.target.value)}/>
                    </Td>
                  </Tr>
                  <Tr>
                    <Td width="25%">Address</Td>
                    <Td>
                      <Input tpye="text" defaultValue={user.address} onChange={(e) => setAddress(e.target.value)}/>
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
    )
  }