import "./OptionList.css";

const OptionList = () => {
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
    return (
        <div className="option-list">
            <label>Equipo</label>
            <select>
                { equipos.map((equipo, index) => <option key={index}>{equipo}</option>)} 
            </select>
        </div>
    );
};

export default OptionList;