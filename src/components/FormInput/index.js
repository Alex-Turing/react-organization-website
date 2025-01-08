import './FormInput.css'

const FormInput = (props) => {
    const modifiedPlaceholder = `${props.placeholder}...`
    return (
        <div className="form-input">
            <label>{props.title}</label>
            <input type="text" placeholder={modifiedPlaceholder} required={props.required}/>
        </div>
    );
};

export default FormInput;