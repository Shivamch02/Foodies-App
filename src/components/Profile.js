import { useEffect ,useState } from "react";
import { Github_API_User, Github_UserName, options } from "../utils/constants";
import ProfileUserClass from "./ProfileUserClass";

const Profile = () => {
  const [userInfo, setuserInfo] = useState({name : "",bio :""});

  useEffect(()=>{
    fetchUserInfo();
  },[])

  async function fetchUserInfo(){
    const response =await fetch(Github_API_User + Github_UserName , options);
    const json =await response.json();
    console.log(json);
    setuserInfo(json);
  }

  return (
    <>
      {userInfo === "" ? null : (
          <div className="m-8 profile-box flex justify-center">
            <div className="profile-container">
              <h1 className="font-bold flex justify-center text-2xl pt-4">About Me</h1>
              <ProfileUserClass data={userInfo}/>
            </div>
           
          </div>
      )}
    </>
  )

}
export default Profile