import './App.css';
import CardList from './components/CardLists/CardList'
import Form from './components/Forms/Form'
import React, {useState} from 'react'

function CardsPage() {
  const [profiles, setProfiles] = useState([])

  const addNewProfile = (profileData) => {
    setProfiles([...profiles, profileData])
  }

  return (
    <div>
      <div className="header">GitHub Cards App</div>
        <Form changeList={addNewProfile}/>
        <CardList data={profiles}/>
    </div>
  );
}

export default CardsPage;
