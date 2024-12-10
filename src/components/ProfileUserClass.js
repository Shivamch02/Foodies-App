import SocialProfileClass from "./SocialProfileClass"
const ProfileUserClass = (props) =>{

  console.log(props);
  const {name,html_url ,avatar_url , bio} = props.data;
  return (
    <div className="">
      <a className="flex justify-center pt-4 first-letter:" href={html_url} target="_blank" rel='noopener noreferrer'>
        <img 
          className="m-4 w-44 rounded-full"
          src={avatar_url}
          alt={name}
          title={name}
        />
      </a>
      <p className="text-gray-500 pb-6 px-4">{bio}</p>
      <SocialProfileClass/>
    </div>
  )
} 
export default ProfileUserClass