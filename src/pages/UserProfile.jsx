import { useState, useEffect } from "react";
import { getUserProfileById, getUser } from "../fetching/userProfile";
import { useStore } from "../modules/store";

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
    <div>
      <p>User Profiles Page</p>
      {JSON.stringify(profile)}
      {JSON.stringify(user)}
    </div>
  );
}
