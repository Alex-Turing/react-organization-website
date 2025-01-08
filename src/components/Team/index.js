import './Team.css';

const Team = (props) => {

    //Destructuracion
    const {primaryColor, secondaryColor, title} = props.data;

    const objectBackgroundColor = {
        backgroundColor: secondaryColor
    }

    const objectTitleColor = {
        color: primaryColor
    };
    return(
        <section className="team" style={objectBackgroundColor}>
            <h3 style={objectTitleColor}>{title}</h3>
            <div className='employees'></div>
        </section>
    );
};

export default Team;