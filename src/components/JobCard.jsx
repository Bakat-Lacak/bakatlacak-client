/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";

export default function JobCard({ job }) {
  const navigate = useNavigate();
  const handleDetail = (id) => {
    navigate(`/job/${id}`);
  };

  return (
    <div className="w-full h-full max-w-xs shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="group bg-gray-900 p-4">
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
            <span className="text-xs text-gray-300">{job.location}</span>
          </div>
        </div>
        <div className="my-4">
          <h3 className="text-2xl font-medium text-gray-200">{job.title}</h3>
          <div className="mt-2 text-sm text-gray-400">
            {job.salary_start} - {job.salary_end}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleDetail(job.id)}
            type="button"
            className="font-medium text-blue-500 transition-all duration-300 group-hover:text-blue-500/80"
          >
            Detail
          </button>
        </div>
      </div>
    </div>
  );
}
