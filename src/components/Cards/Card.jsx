import './Card.css'

const Card = (props) => {
  const profile = props.profile

  return (
    <div className="github-profile">
      <img src={profile.avatar_url} alt=''/>
      <div className="info">
        <div className="name">{profile.name}</div>
        <div className="company">{profile.company}</div>
      </div>
    </div>
  );
}

export default Card