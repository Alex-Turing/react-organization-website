import { useState } from 'react';
import  {v4 as uuid} from 'uuid';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form';
import MyOrg from './components/MyOrg';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [employees, setEmployees] = useState([
    {
      id: uuid(),
      name: 'Alexander Hernandez',
      position: 'Full Stack Developer',
      photo: 'https://github.com/Alex-Turing.png',
      team: 'Programming'
    },
    {
      id: uuid(),
      name: 'Sam Forderer',
      position: 'Developer',
      photo: 'https://github.com/samforderer.png',
      team: 'DevOps'
    },
    {
      id: uuid(),
      name: 'Marcela Vargas',
      position: 'Designer',
      photo: 'https://github.com/dmvargass.png',
      team: 'UX / Design'
    }
  ]);

  const [teamFeatures, setTeamFeatures] = useState([
    {
      id: uuid(),
      title: "Programming",
      primaryColor: "#57C278",
      secondaryColor: "#D9F7E9"
    },
    {
      id: uuid(),
      title: "Front End",
      primaryColor: "#82CFFA",
      secondaryColor: "#E8F8FF"
    },
    {
      id: uuid(),
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
      id: uuid(),
      title: "UX / Design",
      primaryColor: "#DB6EBF",
      secondaryColor: "#FAE9F5"
    },
    {
      id: uuid(),
      title: "Mobile",
      primaryColor: "#FFBA05",
      secondaryColor: "#FFF5D9"
    },
    {
      id: uuid(),
      title: "Management and Innovation",
      primaryColor: "#FF8A29",
      secondaryColor: "#FFEEDF"
    }
  ]);
  
  const switchShowForm = () => {
    setShowForm(!showForm);
  };

  //Registrar Empleado
  const getEmployeeInformationFromForm = (employee) => {
    // Spread operator --> Copia los valores actuales (...employees) y agrega el nuevo objeto (employee)
    setEmployees([...employees, employee])
  };

  //Eliminar Empleado
  const deleteEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);  //filter regresa un nuevo arreglo, en este caso los employees que tienen id diferente al recibido
    setEmployees(updatedEmployees);
  };

  //Actualizar color del Team
  const updateTeamColor = (color, id) => {
    console.log('Actualizar color del Team', color, id);
    const updatedTeams = teamFeatures.map((team) => {
      if (team.id === id) {
        team.primaryColor = color;
      }
      return team;
    })
    setTeamFeatures(updatedTeams);
  };

  return (
    <div>
      <Header />

      {/* Conditional rendering using Shortcut */}
      {
        showForm && <Form 
          teams={teamFeatures.map((team) => team.title)} 
          getEmployeeInformationFromForm={getEmployeeInformationFromForm}
        />
      }

      <MyOrg switchShowForm={switchShowForm}/>

      { teamFeatures.map((team) => <Team 
          key={team.title} 
          data={team} 
          employees={employees.filter(employee => employee.team === team.title)} 
          deleteEmployee={deleteEmployee} 
          updateTeamColor={updateTeamColor}  
        />
        ) 
      }

      <Footer />

    </div>
  );
}

export default App;
