import { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import MyOrg from './components/MyOrg';

function App() {
  const [showForm, setShowForm] = useState(true);
  
  const switchShowForm = () => {
    setShowForm(!showForm);
  };

  return (
    <div>
      <Header />
      {/* Conditional rendering using Ternary Operator */}
      {/* showForm ? <Form /> : <></> */}

      {/* Conditional rendering using Shortcut */}
      {showForm && <Form />}
      <MyOrg switchShowForm={switchShowForm}/>
    </div>
  );
}

export default App;
