

const LoginForm = (props) => {
    const {showRegistroForm } = props;

    return ( 
        <div>
            <h1>Estamos en el el Form de login</h1>
            <button onClick={showRegistroForm}> Ir al RegistroForm </button>
        </div>
     );
}
 
export default LoginForm;