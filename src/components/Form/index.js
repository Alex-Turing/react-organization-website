import { useState } from "react";
import "./Form.css";
import FormInput from "../FormInput";
import OptionList from '../OptionList';
import Button from "../Button";
import {v4 as uuid} from "uuid"

const Form = (props) => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [photo, setPhoto] = useState(""); 
    const [team, setTeam] = useState("");

    const [title, setTitle] = useState("");
    const [color, setColor] = useState("");

    const { getEmployeeInformationFromForm, createTeam } = props;

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // Crear objeto con la información del empleado:   --> Mejorar usando un backend en Node.js
        let employeeInfo = {
            name: name,
            position: position,
            photo: photo,
            team: team,
            id: uuid()
        }     

        getEmployeeInformationFromForm(employeeInfo);
    };

    const handleNewTeam = (e) => {
        e.preventDefault();
        createTeam({ title, primaryColor: color });
    };

    return (
        <section className="form">
            <form onSubmit={handleFormSubmit}>
                <h2>Fill the form to create a new Employee.</h2>
                <FormInput 
                    title="Name" 
                    placeholder="Enter name" 
                    required 
                    value={name} 
                    setValue={setName}
                />
                <FormInput 
                    title="Position"
                    placeholder="Enter position" 
                    required 
                    value={position} 
                    setValue={setPosition}
                />
                <FormInput 
                    title="Photo" 
                    placeholder="Enter photo URL" 
                    required 
                    value={photo} 
                    setValue={setPhoto}
                />
                <OptionList 
                    value={team}
                    setTeamValue={setTeam}
                    teams={props.teams}
                />
                <Button>
                    Create Employee
                </Button>
            </form>

            <form onSubmit={handleNewTeam}>
                <h2>Fill the form to create a new Team.</h2>
                <FormInput 
                    title="Title" 
                    placeholder="Enter title" 
                    required 
                    value={title} 
                    setValue={setTitle}
                />
                <FormInput 
                    title="Color" 
                    type="color"
                    placeholder="Enter color in Hex format"  
                    required 
                    value={color} 
                    setValue={setColor}
                />
                <Button>
                    Create Team
                </Button>
            </form>
        </section>
    );
};

export default Form;
