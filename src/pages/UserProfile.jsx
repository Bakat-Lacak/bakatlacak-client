import { useState, useEffect } from "react";
import { getUserProfileById, getUser } from "../fetching/userProfile";
import { useStore } from "../modules/store";
import image from "../assets/example.jpg"

export default function UserProfilePage() {
  const [profile, setProfile] = useState({})
  const [user, setUser] = useState({})
  const [isLoading, setLoading] = useState(false)
  const loggedUser = useStore((state) => state.user)

  async function fetchProfile() {
    const dataUser = await getUser(loggedUser.id)
    const dataProfile = await getUserProfileById(loggedUser.id)
    setProfile(dataProfile)
    setUser(dataUser)
    setLoading(false)
  }

  useEffect(() => {
    setLoading(true)
    fetchProfile()
  }, []) // 1x render

  if (isLoading){
    return(
      <span className="loading loading-infinity loading-lg flex mx-auto"></span>
    )
  }

  return (
    <>
      <div className="flex gap-2">
        <div className="p-4 flex-2 bg-mint">
          <ul className="border uppercase">
            <a className="button"><li className="p-1">Basic Info</li></a>
            <li className="p-1 border-t border-b">Education</li>
            <li className="p-1">Experience</li>
          </ul>
        </div>
        <div className="p-3 flex-1 bg-navy">
        <img src={image} alt="Userphoto" width="100" height="250"></img>
        <p>Nama : {user.first_name} {user.last_name}</p>



        </div>
        
        {/* <p>User Profiles Page</p> 
        {JSON.stringify(profile)}
        {JSON.stringify(user)} */}
      </div>
    </>
  );
}
