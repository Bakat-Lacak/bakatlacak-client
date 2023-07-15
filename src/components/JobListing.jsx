import { useEffect } from "react";
import { jobListing } from "../fetching/job_listing";
import { useNavigate } from "react-router-dom";
import { useStore } from "../modules/store";

function JobListing() {
  const navigate = useNavigate();
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

  const handleApply = (id) => {
    navigate(`/job/${id}`);
  };

  return (
    <>
      <h4 className="text-3xl text-center fonat-semibold text-blueGray-700">
        Job Listing
      </h4>

      <div className="mx-auto grid grid-cols-3 gap-5 py-20 container place-items-end px-20">
        {jobList.map((job) => (
          <div
            className="w-full h-full max-w-xs shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"
            key={job.id}
          >
            <div className="">
              <div className="group bg-gray-900 p-4">
                <div className=""></div>
                <div className="flex items-center gap-x-2">
                  <img
                    className="aspect-[2/2] w-16"
                    src="https://idn-static-assets.s3-ap-southeast-1.amazonaws.com/school/10284.png"
                    alt="Company Logo"
                  />
                  <div>
                    <h3 className="text-xl font-bold text-gray-50">
                      {job.CompanyProfile.name}
                    </h3>
                    <span className="text-xs text-gray-300">
                      {job.location}
                    </span>
                  </div>
                </div>
                <div className="my-4">
                  <h3 className="text-2xl font-medium text-gray-200">
                    {job.title}
                  </h3>

                  <div className="mt-2 text-sm text-gray-400">
                    {job.salary_start} - {job.salary_end}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => handleApply(job.id)}
                    type="submit"
                    className="font-medium text-blue-500 transition-all duration-300 group-hover:text-blue-500/80"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default JobListing;
