import { useState } from "react";
import { postJob } from "../fetching/postJob";

export default function CreateJobListing() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [salaryStart, setSalaryStart] = useState("");
  const [salaryEnd, setSalaryEnd] = useState("");
  const [limitDate, setLimitDate] = useState("");
  const [skillAttributes, setSkillAttributes] = useState([]);
  const [typeAttributes, setTypeAttributes] = useState([]);

  const handleSkillChange = (event, index) => {
    const newSkillAttributes = [...skillAttributes];
    newSkillAttributes[index] = { id: event.target.value };
    setSkillAttributes(newSkillAttributes);
  };

  const handleTypeChange = (event, index) => {
    const newTypeAttributes = [...typeAttributes];
    newTypeAttributes[index] = { id: event.target.value };
    setTypeAttributes(newTypeAttributes);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await postJob("/job-listings", {
        title,
        description,
        location,
        salary_start: salaryStart,
        salary_end: salaryEnd,
        limit_date: limitDate,
        skill_attributes: skillAttributes,
        type_attributes: typeAttributes,
      });

      console.log("Job listing created:", response.data);
      // Clear form fields after successful submission
      setTitle("");
      setDescription("");
      setLocation("");
      setSalaryStart("");
      setSalaryEnd("");
      setLimitDate("");
      setSkillAttributes([]);
      setTypeAttributes([]);
    } catch (error) {
      console.error("Error creating job listing:", error);
    }
  };

  return (
    <div>
      <h1>Create Job Listing</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <label>
          Location:
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </label>
        <label>
          Salary Start:
          <input
            type="number"
            value={salaryStart}
            onChange={(e) => setSalaryStart(e.target.value)}
          />
        </label>
        <label>
          Salary End:
          <input
            type="number"
            value={salaryEnd}
            onChange={(e) => setSalaryEnd(e.target.value)}
          />
        </label>
        <label>
          Limit Date:
          <input
            type="date"
            value={limitDate}
            onChange={(e) => setLimitDate(e.target.value)}
          />
        </label>

        <h3>Skill Attributes:</h3>
        {skillAttributes.map((skill, index) => (
          <div key={index}>
            <input
              type="text"
              value={skill.id || ""}
              onChange={(e) => handleSkillChange(e, index)}
              placeholder="Skill ID"
            />
          </div>
        ))}
        <button
          onClick={() => setSkillAttributes([...skillAttributes, { id: "" }])}
        >
          Add Skill Attribute
        </button>

        <h3>Type Attributes:</h3>
        {typeAttributes.map((type, index) => (
          <div key={index}>
            <input
              type="text"
              value={type.id || ""}
              onChange={(e) => handleTypeChange(e, index)}
              placeholder="Type ID"
            />
          </div>
        ))}
        <button
          onClick={() => setTypeAttributes([...typeAttributes, { id: "" }])}
        >
          Add Type Attribute
        </button>

        <button type="submit">Create Job Listing</button>
      </form>
    </div>
  );
}
