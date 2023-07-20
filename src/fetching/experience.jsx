import instance from "../lib/axios";

export async function getExperience() {
    try {
      const response = await instance({
        method: "GET",
        url: `/experiences/me`,
      });
  
      const data = response.data;
      return data;
    } catch (err) {
      console.log(err);
    }
  }
  
  export async function editExperience(params) {
    try {
      const {
        id,
        company,
        department,
        position,
        industry,
        salary,
        start_date,
        end_date,
        description,
        country,
        state,
        city,
      } = params;
      const response = await instance({
        method: "PUT",
        url: `/experiences/update`,
        data: {
          id,
          company,
          department,
          position,
          industry,
          salary,
          start_date,
          end_date,
          description,
          country,
          state,
          city,
        },
      })
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
  
  export async function deleteExperience(param) {
    try {
      const { id } = param
      const response = await instance({
        method: "DELETE",
        url: `/experiences/delete`,
        data: {
          id
        }
      })
    } catch(err) {
      console.log(err)
    }
  }