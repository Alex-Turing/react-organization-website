import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form';
import MyOrg from './components/MyOrg';
import Team from './components/Team';

function App() {
  const [showForm, setShowForm] = useState(false);
  
  const switchShowForm = () => {
    setShowForm(!showForm);
  };

  //Lista de Equipos
  const teamFeatures = [
    {
      title: "Programming",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9"
    },
    {
      title: "Front End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF"
    },
    {
      title: "Data Science",
      primaryColor: "#A6D157",
      secondaryColor: "#F0F8E2"
    },
    {
      title: "DevOps",
      primaryColor: "#E06B69",
      secondaryColor: "#FDE7E8"
    },
    {
      title: "UX / Design",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5"
    },
    {
      title: "Mobile",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9"
    },
    {
      title: "Management and Innovation",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF"
    }
  ];

  return (
    <div>
      <Header />
      {/* Conditional rendering using Ternary Operator */}
      {/* showForm ? <Form /> : <></> */}

      {/* Conditional rendering using Shortcut */}
      {showForm && <Form teams={teamFeatures.map((team) => team.title)} />}
      <MyOrg switchShowForm={switchShowForm}/>
      { teamFeatures.map((team) => <Team key={team.title} data={team} />) };

    </div>
  );
}

export default App;
