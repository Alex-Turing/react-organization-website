import "./Form.css";
import FormInput from "../FormInput";
import OptionList from '../OptionList';
import Button from "../Button";

const Form = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log("Handle Form Submit", e);       
    };
    return (
        <section className="form">
            <form onSubmit={handleFormSubmit}>
                <h2>Rellena el formulario para crear el colaborador.</h2>
                <FormInput title="Nombre" placeholder="Ingresar nombre" required />
                <FormInput title="Puesto" placeholder="Ingresar puesto" required />
                <FormInput title="Foto" placeholder="Ingresar enlace de foto" required />
                <OptionList />
                <Button>
                    Crear
                </Button>
            </form>
        </section>
    );
};

export default Form;
