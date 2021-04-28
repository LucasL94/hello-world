import Card from '../Cards/Card'

const CardList = (props) => {
  return (
    <div>
      {props.data.map(profile => <Card profile={profile}/>)}
    </div>
  )
}

export default CardList