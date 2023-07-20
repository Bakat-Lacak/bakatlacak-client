import { useState } from "react";
import { useParams } from "react-router-dom";
import fetchJobApply from "../fetching/jobApply";

export default function JobApply() {
  const { id } = useParams();
  const [resumeFile, setResumeFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleFileChange = (e) => {
    setResumeFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!resumeFile) {
      setError("Please select a resume file.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await fetchJobApply(id, resumeFile);
      setSuccess(true);
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="min-w-[80%]">
        <h1 className="text-4xl font-semibold">Apply for Job</h1>

        {error && <div className="text-red-500 mt-2">{error}</div>}
        {success && (
          <div className="text-green-500 mt-2">
            Application submitted successfully!
          </div>
        )}

        <form className="mt-4" onSubmit={handleSubmit}>
          <div>
            <label className="block font-medium">Upload Resume:</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleFileChange}
              className="mt-1"
            />
          </div>

          <div className="mt-4">
            <button
              type="submit"
              disabled={isLoading}
              className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {isLoading ? "Submitting..." : "Submit Application"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
