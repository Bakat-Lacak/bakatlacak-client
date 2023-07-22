import { useEffect, useState } from "react";
import ApplyCard from "../../../components/ApplyCard";
import { fetchAllApplied } from "../../../fetching/allAppliedJob";
import { useNavigate } from "react-router-dom";

export default function AllAppliedJob() {
  const [applications, setApplications] = useState([]);
  const navigate = useNavigate();

  const handleClickDetail = (id) => {
    navigate(`/applied-job/${id}`);
  };

  useEffect(() => {
    const fetchJobApplications = async () => {
      try {
        const response = await fetchAllApplied();
        setApplications(response);
      } catch (error) {
        console.error("Error fetching job applications:", error);
      }
    };

    fetchJobApplications();
  }, []);

  return (
    <div className="bg-mint">
      <h1 className="text-4xl text-center font-semibold text-black py-4">
        Applications
      </h1>
      <div className="mx-auto grid grid-cols-3 gap-5 py-10 container place-items-end px-20">
        {applications.map((application) => (
          <button
            onClick={() => handleClickDetail(application.id)}
            type="button"
            key={application.id}
          >
            <ApplyCard applications={application} />
          </button>
        ))}
      </div>
    </div>
  );
}
