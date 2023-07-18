import instance from "../lib/axios";

export async function getUserProfileById (id) {
    try {
        const response = await instance({
            method:'GET',
            url: `/user-profiles/${id}`
         })
        const data = response.data

        return data;
    } catch(err) {
        console.log(err)
    }
}

export async function getUser (id) {
    try {
        const response = await instance({
            method:'GET',
            url: `/users/${id}`
        })

        const data = response.data
        return data;
    } catch(err) {
        console.log(err)
    }
}

export async function getExperience () {
    try {
        const response = await instance({
            method:'GET',
            url: `/experiences/me`
        })

        const data = response.data
        return data;
    } catch(err) {
        console.log(err)
    }
}

export async function getEducation () {
    try {
        const response = await instance({
            method:'GET',
            url: `/educations/me`
        })

        const data = response.data
        return data;
    } catch(err) {
        console.log(err)
    }
}

export async function getSkills () {
    try {
        const response = await instance({
            method:'GET',
            url: `/skills/me`
        })

        const data = response.data
        return data;
    } catch(err) {
        console.log(err)
    }
}

export async function editUser (params) {
    try {
        const { first_name, last_name, email, phone_number, birth_date, gender, address } = params
        const response = await instance({
            method:"PUT",
            url: `/users/update/me`,
            data: {
                first_name,
                last_name,
                email,
                phone_number,
                birth_date,
                gender,
                address
            }
        })
    } catch (err) {
        console.log(err)
    }
}

export async function editEducation (params) {
    try {
        
    } catch(err) {
        console.log(err)
    }
}