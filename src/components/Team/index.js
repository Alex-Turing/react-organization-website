import './Team.css';
import EmployeeCard from '../EmployeeCard';
import hexToRgba from 'hex-to-rgba';

const Team = (props) => {

    //Destructuracion
    const {primaryColor, secondaryColor, title, id} = props.data;
    const { employees, deleteEmployee, updateTeamColor, fav } = props;

    const objectBackgroundColor = {
        backgroundColor: hexToRgba(primaryColor, 0.6)
    }

    const objectTitleColor = {
        color: primaryColor
    };

    return (
        <>
            {employees.length > 0 && 
            <section className="team" style={objectBackgroundColor}>
                <input 
                    className="color-picker"
                    type="color"
                    value={primaryColor}
                    onChange={(event) => {
                        updateTeamColor(event.target.value, id)
                    }}
                />
                <h3 style={objectTitleColor}>{title}</h3>
                <div className='employees'>
                    {
                        employees.map((employee, index) => <EmployeeCard 
                            key={index}     
                            data={employee} 
                            primaryColor={primaryColor} 
                            deleteEmployee={deleteEmployee}
                            updateFav={fav}
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