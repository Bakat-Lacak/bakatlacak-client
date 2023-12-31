import { useEffect, useState } from "react";
import { fetchAllJob } from "../../../fetching/jobApplyById";
import ApplyCard from "../../../components/ApplyCard";

export default function AppliedJobs() {
  const [applications, setApplications] = useState([]);
  console.log(applications);

  useEffect(() => {
    const fetchJobApplications = async () => {
      try {
        const response = await fetchAllJob();
        setApplications(response);
      } catch (error) {
        console.error("Error fetching job applications:", error);
      }
    };

    fetchJobApplications();
  }, []);

  return (
    <div>
      <h1>Job Applications</h1>
      <div className="mx-auto grid grid-cols-3 gap-5 py-20 container place-items-end px-20">
        {applications.map((application) => (
          <ApplyCard key={application.id} applications={application} />
        ))}
      </div>
    </div>
  );
}
