import './MyOrg.css';

const MyOrg = (props) => {
    // Estado - hooks:
    // 1. useState
    // const [nombreDeLaVariable, funcionQueActualiza] = useState(valorInicialDeLaVariable)
    // e.g. const [name, setName] = useState("Alex");
    // e.g
    // const [showForm, setShowForm] = useState(true);
    // const handleImgClick = () => {
    //     console.log('Imagen clickeada!', showForm);
    //     setShowForm(!showForm);
    // };

    return (
        <section className="org-section">
            <h3 className="title">Mi organizacion</h3>
            <img src="/img/add.png" alt="my org logo" onClick={props.switchShowForm}/>
        </section>
    );
};

export default MyOrg;