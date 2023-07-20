import { useState, useEffect, React } from "react";
import { CardBody, Card } from "@chakra-ui/card";
import { Box, Heading, Stack, StackDivider } from "@chakra-ui/layout";
import { Button, Flex, VStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { getExperience } from "../../fetching/experience";
import { useStore } from "../../modules/store";
import TableExperience from "../../components/TableExperience";
import SideButton from "../../components/SideButton";

export default function ExperiencePage() {
    const [experience, setExperience] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const loggedUser = useStore((state) => state.user);

    async function fetchProfile() {
    const dataProfile = await getExperience(loggedUser.id);
    setExperience(dataProfile);
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
          {experience.map((experience, index) => {
              return (
                <TableExperience fetchProfile={fetchProfile} experience={experience} key={index}></TableExperience>
              );
            })}
          </VStack>
        </Flex>
      </>
    )
}