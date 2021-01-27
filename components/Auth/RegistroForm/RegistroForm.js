

const RegistroForm = (props) => {
    const {showLoginForm} = props;
    return ( 
        <div>
            <h1>Estamos RegistroForm de usuarios</h1>
            <button onClick={showLoginForm}>Ir a Login</button>
        </div>
     );
}
 
export default RegistroForm;