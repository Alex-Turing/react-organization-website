import './EmployeeCard.css'
import { AiFillCloseCircle } from "react-icons/ai";

const EmployeeCard = (props) => {
    const { name, position, photo, team } = props.data;
    const { primaryColor, deleteEmployee } = props;
    return (
        <div className="employeeCard">
            <AiFillCloseCircle className='delete' onClick={deleteEmployee}/>
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
