import "./OptionList.css";

const OptionList = (props) => {
    // I need to use Map method to run through the array:
    // map -> array.map((equipo, index) => {
    //    return <option></option>;
    //});
    const equipos = [
        "Programming",
        "Front End",
        "Data Science",
        "DevOps",
        "UX/Design",
        "Mobile",
        "Management and Innovation"
    ];

    const handleChange = (e) => {
        console.log('Cambio en option list', e.target.value);
        props.setTeamValue(e.target.value);

    };
    return (
        <div className="option-list">
            <label>Equipo</label>
            <select value={props.value} onChange={handleChange}>
                <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
                { equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)} 
            </select>
        </div>
    );
};

export default OptionList;