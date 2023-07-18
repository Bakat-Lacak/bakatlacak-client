import { useState, useEffect } from "react";
import { jobListing } from "../fetching/job_listing";
import { useStore } from "../modules/store";
import JobCard from "../components/JobCard";

function JobListing() {
  const setJobList = useStore((state) => state.setJobList);
  const jobList = useStore((state) => state.jobList);
  console.log(jobList);
  const [filterOptions, setFilterOptions] = useState({
    locations: "",
    q: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await jobListing(filterOptions);
        setJobList(data);
      } catch (error) {
        console.error("Error fetching jobList:", error);
      }
    };

    fetchData();
  }, [filterOptions, setJobList]);

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilterOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
  };

  return (
    <>
      {/* Header */}
      <h4 className="text-3xl text-center font-semibold text-blueGray-700">
        Daftar Pekerjaan
      </h4>

      <div className="mt-[20px] flex justify-center">
        {/* Search */}
        <input
          className=" rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
          type="text"
          name="q"
          placeholder="Cari..."
          value={filterOptions.q}
          onChange={handleFilterChange}
        />

        {/* Type */}
        {/* <select
        // value={jobType}
        // onChange={(e) => setJobType(e.target.value)}
        // className="h-[50px]"
        >
          <option disabled value="" selected>
            Job Type
          </option>
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Intern">Intern</option>
        </select> */}
      </div>
      {/* Header End */}

      <div className="mx-auto grid grid-cols-3 gap-5 py-20 container place-items-end px-20">
        {jobList.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </>
  );
}

export default JobListing;
