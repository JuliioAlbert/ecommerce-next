import React, { useState } from 'react';
import {Form, Button } from 'semantic-ui-react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {toast} from 'react-toastify';

const LoginForm = (props) => {
    const {showRegistroForm } = props;

    return ( 
       <Form className="login-form">
           <Form.Input name="email" type="text" placeholder="Correo Electronico"/>
           <Form.Input name="password" type="password" placeholder="Password"/>

            <div className="action">
                <button type="button" basic onClick={showRegistroForm}>
                    Registrarse
                </button>
                <div >
                    <button className="submit" type="submit">
                        Entrar
                    </button>
                    <button type="button"> 
                        ¿Has Olvidado la contraseña?
                    </button>
                </div>
            </div>

       </Form>
     );
}
 
export default LoginForm;