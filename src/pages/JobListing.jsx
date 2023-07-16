import { useEffect } from "react";
import { jobListing } from "../fetching/job_listing";
import { useStore } from "../modules/store";
import JobCard from "../components/JobCard";

function JobListing() {
  const setJobList = useStore((state) => state.setJobList);
  const jobList = useStore((state) => state.jobList);

  console.log(jobList);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await jobListing();
        console.log(data);
        setJobList(data);
      } catch (error) {
        console.error("Error fetching jobList:", error);
      }
    };
    fetchData();
  }, [setJobList]);

  return (
    <>
      <h4 className="text-3xl text-center fonat-semibold text-blueGray-700">
        Job Listing
      </h4>

      <div className="mx-auto grid grid-cols-3 gap-5 py-20 container place-items-end px-20">
        {jobList.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  );
}

export default JobListing;
