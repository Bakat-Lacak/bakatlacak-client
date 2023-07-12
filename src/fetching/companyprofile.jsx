import instance from "../lib/axios.jsx";

export async function getAllCompanyProfile(params) {
  try {
    const response = await instance.get("/companyProfile/", { params });
    const data = response.data;
    return data;
  } catch (err) {
    console.log(err);
  }
}