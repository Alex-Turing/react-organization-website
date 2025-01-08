import './FormInput.css'

const FormInput = (props) => {
    const modifiedPlaceholder = `${props.placeholder}...`

    const handleChange = (e) => {
        props.setValue(e.target.value);
    }; 
    return (
        <div className="form-input">
            <label>{props.title}</label>
            <input 
                placeholder={modifiedPlaceholder} 
                required={props.required} 
                value={props.value}
                onChange={handleChange}
            />
        </div>
    );
};

export default FormInput;