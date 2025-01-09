import { useState } from 'react';
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
      name: 'Alexander Hernandez',
      position: 'Full Stack Developer',
      photo: 'https://github.com/Alex-Turing.png',
      team: 'Programming'
    },
    {
      name: 'Marcela Vargas',
      position: 'Designer',
      photo: 'https://github.com/Alex-Turing.png',
      team: 'Front End'
    }
  ]);

  const [teamFeatures, setTeamFeatures] = useState([
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
  const deleteEmployee = () => {
    console.log('Eliminar empleado');
  };

  //Actualizar color del Team
  const updateTeamColor = (color, title) => {
    console.log('Actualizar color del Team', color, title);
    const updatedTeams = teamFeatures.map((team) => {
      if (team.title === title) {
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
