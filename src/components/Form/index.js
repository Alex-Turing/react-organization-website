import { useState } from "react";
import "./Form.css";
import FormInput from "../FormInput";
import OptionList from '../OptionList';
import Button from "../Button";

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
            name,
            position,
            photo,
            team
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
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <FormInput 
                    title="Nombre" 
                    placeholder="Ingresar nombre" 
                    required 
                    value={name} 
                    setValue={setName}
                />
                <FormInput 
                    title="Puesto" 
                    placeholder="Ingresar puesto" 
                    required 
                    value={position} 
                    setValue={setPosition}
                />
                <FormInput 
                    title="Foto" 
                    placeholder="Ingresar enlace de foto" 
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
                    Crear
                </Button>
            </form>

            <form onSubmit={handleNewTeam}>
                <h2>Rellena el formulario para crear el equipo.</h2>
                <FormInput 
                    title="Titulo" 
                    placeholder="Ingresar titulo" 
                    required 
                    value={title} 
                    setValue={setTitle}
                />
                <FormInput 
                    title="Color" 
                    placeholder="Ingresar el color en Hex"  
                    required 
                    value={color} 
                    setValue={setColor}
                />
                <Button>
                    Registrar Equipo
                </Button>
            </form>
        </section>
    );
};

export default Form;
