import  { useState } from 'react';
import  LoginForm from './LoginForm';
import  RegistroForm from './RegistroForm';



const Auth = (props) => {
    const {onCloseModal,setTitleModal} = props;

    const [showLogin, setShowLogin] = useState(true);

    const showLoginForm = () => 
    {
        setTitleModal('Iniciar Sesion');
        setShowLogin(true);
    }
    const showRegistroForm = () => 
    {
        setTitleModal('Registrar Cuenta')
        setShowLogin(false);

    }



    return showLogin ? 
    <LoginForm showRegistroForm={showRegistroForm} onCloseModal={onCloseModal}/>
    : <RegistroForm showLoginForm={showLoginForm}/>
}
 
export default Auth;