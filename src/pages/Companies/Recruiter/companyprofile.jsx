import { useState, useEffect } from "react";
import {
  getCompanyProfileById,
  updateCompanyProfile,
  createCompanyProfile,
} from "../../../fetching/companyprofile";
import { useStore } from "../../../modules/store";
import { Box } from "@chakra-ui/layout";
import {
  Button,
  Spinner,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export default function CompanyProfileRecruiter() {
  const [companyProfile, setCompanyProfile] = useState({});
  const [isLoading, setLoading] = useState(false);

  async function fetchCompanyProfile() {
    setLoading(true);
    const companyData = await getCompanyProfileById([]);
    setCompanyProfile(companyData);
    setLoading(false);
  }

  useEffect(() => {
    fetchCompanyProfile();
  }, []);

    async function handleUpdate() {
    try {
        const companyProfileData = await updateCompanyProfile(companyProfile.id, companyProfile.params);
        setCompanyProfile(companyProfileData);
    } catch (err) {
      console.error("Error updating company profile:", err);
    }
  }

  if (isLoading) {
    return <Spinner size="xl" />;
  }

  return (
    <>
      {/*      <pre>{JSON.stringify(companyProfile, null, 2)}</pre> */}
      <Box width="80%" className="pr-20 pt-10">
        <FormControl isRequired>
          <FormLabel>Company Name</FormLabel>
          <Input placeholder={companyProfile.name} />
        </FormControl>
        <Button onClick={handleUpdate}>Update</Button>
      </Box>
    </>
  );
}
