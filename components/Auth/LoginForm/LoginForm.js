import React, { useState } from 'react';
import {Form, Button } from 'semantic-ui-react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {toast} from 'react-toastify';

import {loginAuth, resetPassword} from '../../../providers/user';
import useAuth from '../../../hooks/useAuth';

const LoginForm = (props) => {
    const {showRegistroForm,onCloseModal } = props;
    const [loading, setLoading] = useState(false);
    const {login} = useAuth();
   


    const formik = useFormik({
        initialValues:initialValues(),
        validationSchema: Yup.object(validationSchema()) ,
        onSubmit: async (data) => {
            setLoading(true);
            const response = await loginAuth(data);
            console.log(response);
            if(response?.jwt){
                login(response.jwt);
                onCloseModal();
            }else{
                toast.error('Son Incorrectos')
            }
            setLoading(false);
            
        }
    });

    const resetPassword= () => {
        formik.setErrors({});
        const validateEmail = Yup.string.email().required();

        if(validateEmail.isValidSync(formik.values.email)){
                formik.setErrors({email:true})
        }else {
            resetPassword(formik.values.email);
        }
    }
    return ( 
       <Form className="login-form" onSubmit={formik.handleSubmit}>
           <Form.Input name="email" type="text" placeholder="Correo Electronico" onChange={formik.handleChange} error={formik.errors.email}/>
           <Form.Input name="password" type="password" placeholder="Password" onChange={formik.handleChange} error={formik.errors.password}/>

            <div className="action">
                <Button type="button" basic onClick={showRegistroForm}>
                    Registrarse
                </Button>
                <div >
                    <Button className="submit" type="submit" loading={loading}>
                        Entrar
                    </Button>
                    <Button type="button" onClick={resetPassword} > 
                        ¿Recuperar la contraseña?
                    </Button>
                </div>
            </div>

       </Form>
     );
}
 
export default LoginForm;

const initialValues= () =>{
    return {
        email: "",
        password: ""
    }
}

const validationSchema =() =>{
    return {
        email: Yup.string().email(true).required(),
        password: Yup.string().required()
    }
}