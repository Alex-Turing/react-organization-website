import './Team.css';
import EmployeeCard from '../EmployeeCard';

const Team = (props) => {

    //Destructuracion
    const {primaryColor, secondaryColor, title} = props.data;
    const { employees } = props;

    const objectBackgroundColor = {
        backgroundColor: secondaryColor
    }

    const objectTitleColor = {
        color: primaryColor
    };

    return (
        <>
            {employees.length > 0 && <section className="team" style={objectBackgroundColor}>
                <h3 style={objectTitleColor}>{title}</h3>
                <div className='employees'>
                    {
                        employees.map((employee, index) => <EmployeeCard 
                            key={index}     
                            data={employee} 
                            primaryColor={primaryColor} 
                        /> 
                        )
                    }
                </div>
            </section>
            }
        </>
    );
};

export default Team;