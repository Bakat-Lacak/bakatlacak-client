/* eslint-disable react/prop-types */
export default function ApplyCard({ applications }) {
  return (
    <div className="w-full h-full max-w-xs shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <div className="group bg-black p-4 rounded-sm">
        <div className="flex items-center gap-x-2">
          <img
            className="aspect-[2/2] w-16"
            src="https://idn-static-assets.s3-ap-southeast-1.amazonaws.com/school/10284.png"
            alt="Company Logo"
          />
          <div>
            <h3 className="text-xl font-bold text-white">
              {applications.CompanyProfile?.name}
            </h3>
            <span className="text-xs text-white">{applications.location}</span>
          </div>
        </div>
        <div className="my-4">
          <h3 className="text-2xl font-medium text-white">
            {applications.title}
          </h3>
          <div className="mt-2 text-sm text-white">
            {applications.salary_start} - {applications.salary_end}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="text-white">
            {applications.JobApplications.map((application) => (
              <div className="uppercase" key={application.id}>
                {application.status}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
