import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchAppliedById } from "../../../fetching/appliedJobById";
import { updateStatus } from "../../../fetching/updateStatus";
import { IconButton } from "@chakra-ui/react";
import { FaFileLines } from "react-icons/fa6";
import Swal from "sweetalert2";

export default function AppliedJobByID() {
  const { id } = useParams();
  const [jobDetail, setJobDetail] = useState({});
  const [status, setStatus] = useState([]);
  const [success, setSuccess] = useState(false);
  console.log(status);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchAppliedById(id);
        setJobDetail(data);
        setStatus(data.status);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await updateStatus(id, status);

      const updatedData = await fetchAppliedById(id);
      setJobDetail(updatedData);
      setSuccess(true);
      Swal.fire({
        icon: "success",
        title: "Status Updated!",
        timer: 3000,
        timerProgressBar: false,
        onClose: () => {
          setSuccess(false);
        },
      });
      console.log("Status updated successfully!");
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="flex justify-center pb-60">
      <div className="min-w-[80%]">
        <div>
          <div className="flex justify-between">
            {/* Header */}
            <div className="mt-[40px] ">
              <h2 className="font-normal">
                {jobDetail.JobListing?.CompanyProfile?.name}
              </h2>

              <h1 className="text-6xl font-semibold">
                {jobDetail.JobListing?.title}
              </h1>
            </div>

            <div className="mt-[60px] mr-[200px]">
              {/* user Side */}
              <div className="flex gap-2 mt-5 text-[20px] font-semibold">
                <h1>{jobDetail.User?.first_name}</h1>
                <h1>{jobDetail.User?.last_name}</h1>
              </div>
              <a href={jobDetail.resume}>
                <IconButton
                  boxSize={20}
                  fontSize={30}
                  icon={<FaFileLines />}
                ></IconButton>
              </a>
              <div className="mt-5">{jobDetail.resume}</div>

              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="p-2 border border-gray-300 rounded-md placeholder-font-light placeholder-text-gray-500 mr-4"
              >
                <option value="" disabled defaultValue>
                  Choose your role
                </option>
                <option value="onreview">onreview</option>
                <option value="accepted">accepted</option>
                <option value="rejected">rejected</option>
              </select>

              <button
                onClick={handleSubmit}
                className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl mt-[20px]"
              >
                Confirm
              </button>
            </div>
            {/* Header End */}
          </div>

          {/* Job Information Card */}
          <div className="mt-[20px] p-3 border-black border-2 rounded-md">
            <div className="grid grid-cols-3 gap-4">
              {/* Type */}
              <div>
                <div className="flex flex-col items-center">
                  <h3 className="text-md font-bold">Type</h3>
                  <div>
                    {jobDetail.JobListing?.Types &&
                      jobDetail.JobListing?.Types.map((type) => (
                        <div key={type.id}>
                          <p>{type.title}</p>
                        </div>
                      ))}
                  </div>
                </div>
              </div>

              {/* Location */}
              <div>
                <div className="flex flex-col items-center">
                  <h3 className="text-md font-bold">Location</h3>
                  <p>{jobDetail.JobListing?.location}</p>
                </div>
              </div>

              {/* Salary */}
              <div>
                <div className="flex flex-col items-center">
                  <h3 className="text-md font-bold">Salary</h3>
                  <p>
                    {jobDetail.JobListing?.salary_start} -{" "}
                    {jobDetail.JobListing?.salary_end}
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Job Information Card End */}

          {/* Description */}
          <h2 className="mt-10 mb-0 font-semibold">Job Description</h2>
          <div className="bg-black bg-opacity-20 rounded-md p-4 border-black border-opacity-80">
            <p>{jobDetail.JobListing?.description}</p>
          </div>
          {/* Description End */}

          {/* Requirement Card */}
          <h2 className="mb-0 mt-10 font-semibold">Job Requirements</h2>
          <div className=" p-3 border-black border-2 rounded-md">
            <div className="grid grid-cols-4 gap-4">
              {jobDetail.JobListing?.Skills &&
                jobDetail.JobListing?.Skills.map((skill) => (
                  <div
                    key={skill.id}
                    className="min-w-[120px] mb-3 p-3 rounded-md"
                  >
                    <div className="flex flex-col items-center">
                      <h3 className="text-md font-bold">{skill.name}</h3>
                      <div>
                        <p>{skill.level}</p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          {/* Requirement Card End */}

          {/* About Company */}
          <h2 className="mt-10 mb-0 font-semibold">
            About {jobDetail.JobListing?.CompanyProfile?.name}
          </h2>
          <h3 className="bg-black bg-opacity-20 rounded-md p-4 border-black border-opacity-80">
            {jobDetail.JobListing?.CompanyProfile?.description}
          </h3>
          <button
            // onClick={handleCompanyDetail}
            className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-xl mt-[20px]"
          >
            Company Detail
          </button>
          {/* About Company End */}
        </div>
      </div>
    </div>
  );
}
