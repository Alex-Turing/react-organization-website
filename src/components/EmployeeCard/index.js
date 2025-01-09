import './EmployeeCard.css'
import { AiFillCloseCircle } from "react-icons/ai";

const EmployeeCard = (props) => {
    const { name, position, photo, team, id } = props.data;
    const { primaryColor, deleteEmployee } = props;
    return (
        <div className="employeeCard">
            <AiFillCloseCircle className='delete' onClick={() => deleteEmployee(id)}/> {/** Agregar '() =>' antes de llamar la funcion 'deleteEmployee' sirve para asegurar que la funcion solo se llamara al momento del click, de otra forma la funcion se ejecutara solo al memoneto de cargar la pagina (renderizarse) y eliminara los usuarios */}
            <div className="header" style={{backgroundColor: primaryColor}}>
                <img src={photo} alt={name} />
            </div>
            <div className="info">
                <h4>{name}</h4>
                <h5>{position}</h5>
            </div>
        </div>
    );
};

export default EmployeeCard;
