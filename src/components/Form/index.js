import { useState } from "react";
import "./Form.css";
import FormInput from "../FormInput";
import OptionList from '../OptionList';
import Button from "../Button";

const Form = () => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [photo, setPhoto] = useState(""); 

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Handle Form Submit");  
        
        // Crear objeto con la información del empleado:
        const employeeInfo = {
            nombre: name,
            puesto: position,
            foto: photo
        }     

        console.log(employeeInfo);
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
                <OptionList />
                <Button>
                    Crear
                </Button>
            </form>
        </section>
    );
};

export default Form;
