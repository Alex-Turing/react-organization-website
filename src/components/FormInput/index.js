import './FormInput.css'

const FormInput = (props) => {
    const modifiedPlaceholder = `${props.placeholder}...`

    //Desturcturacion
    const { type="text" } = props   //Al dar un valor a type, lo toma cuando el valor viene indefinido de props

    const handleChange = (e) => {
        props.setValue(e.target.value);
    }; 
    return (
        <div className={`input__container input__container-${type}`}>
            <label>{props.title}</label>
            <input 
                type={type}  // Para que sea un input de tipo text, email, etc.
                placeholder={modifiedPlaceholder} 
                required={props.required} 
                value={props.value}
                onChange={handleChange}
            />
        </div>
    );
};

export default FormInput;