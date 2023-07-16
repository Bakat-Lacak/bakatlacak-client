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