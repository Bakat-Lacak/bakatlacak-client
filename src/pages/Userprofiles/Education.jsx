import { useState, useEffect, React } from "react";
import { CardBody, Card } from "@chakra-ui/card";
import { Box, Heading, Stack, StackDivider } from "@chakra-ui/layout";
import { Button, Flex, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { getEducation } from "../../fetching/userProfile";
import { useStore } from "../../modules/store";
import TableEducation from "../../components/TableEducation";
import SideButton from "../../components/SideButton";

export default function EducationPage() {
    const [education, setEducation] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const loggedUser = useStore((state) => state.user);

    async function fetchProfile() {
    const dataProfile = await getEducation(loggedUser.id);
    setEducation(dataProfile);
    }

    useEffect(() => {
        fetchProfile();
        setLoading(false);
      }, []); // 1x render
    
      if (isLoading) {
        return (
          <span className="loading loading-infinity loading-lg flex mx-auto"></span>
        );
      }

    return (
        <>
        <Flex>
          <SideButton />
          <VStack flex="1">
          {education.map((education, index) => {
              return (
                <TableEducation education={education} key={index}></TableEducation>
              );
            })}
          </VStack>
        </Flex>
      </>
    )
}