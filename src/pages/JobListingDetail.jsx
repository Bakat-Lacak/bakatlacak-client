import { useParams } from "react-router-dom";
import { useStore } from "../modules/store";

export default function JobListingDetail() {
  const { id } = useParams();
  const jobList = useStore((state) => state.jobList);

  const jobId = jobList.find((e) => e.id === Number(id));

  return (
    <div className="grid justify-items-center">
      <div className="min-w-[1500px]">
        {/* Header */}
        <div className="w-full">
          <div>{jobId.id}</div>
        </div>
        {/* Header End */}
      </div>
    </div>
  );
}
