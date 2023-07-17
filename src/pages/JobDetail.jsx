import { useParams } from "react-router-dom";
import { useStore } from "../modules/store";
import { useEffect } from "react";
import { fetchJobDetail } from "../fetching/jobDetail";

export default function JobDetail() {
  const { id } = useParams();
  const setJobDetail = useStore((state) => state.setJobDetail);
  const jobDetail = useStore((state) => state.jobDetail);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchJobDetail(id);
        console.log(data);
        setJobDetail(data);
      } catch (error) {
        console.error("Error fetching job detail:", error);
      }
    };
    fetchData();
  }, [id, setJobDetail]);

  return (
    <div className="grid justify-items-center">
      <div className="min-w-[1500px]">
        <div className="w-full">
          <div>{jobDetail.id}</div>
          <div>{jobDetail.title}</div>
          <div>{jobDetail.description}</div>
          <div>{jobDetail.location}</div>
          <div>{jobDetail.createdAt}</div>
          <div>{jobDetail.updatedAt}</div>
        </div>
      </div>
    </div>
  );
}
