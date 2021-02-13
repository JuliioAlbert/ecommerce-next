import  { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import {updatePasswordApi} from "../../../providers/user";

const ChangePasswordForm = ({ user, logout }) => {
    //Loading
    const [loading, setLoading] = useState(false);
    

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit:async (datos) =>{
           setLoading(true);
           const resp = await updatePasswordApi(user.id, datos.password, logout); 
            if(!resp){
                toast.error('Error al Actualizar la contraseña');
            }else{
                logout();
            }

           setLoading(false);
        }
    });

    return (
        <div className="change-password-form">
            <h4>Cambiar tu Contraseña</h4>

            <Form onSubmit={formik.handleSubmit}>
                <Form.Group widths="equal">
                    <Form.Input
                        type="Password"
                        placeholder="Tu Nueva Contraseña"
                        name="password" 
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        error={formik.errors.password}
                        />
                    <Form.Input
                        type="Password"
                        placeholder="Confirma tu Contraseña"
                        name="password2"
                        onChange={formik.handleChange}
                        value={formik.values.password2}
                        error={formik.errors.password2}
                        />
                </Form.Group>

                <Button className="submit" type="submit" loading={loading}>
                    Actualizar
                </Button>
            </Form>
        </div>

    );
}

export default ChangePasswordForm;

const initialValues = () => {
    return {
        password: '',
        password2: ''
    }
}

const validationSchema =()=> {
    return {
        password: Yup.string()
            .required('Obligatorio')
            .oneOf([Yup.ref("password2")],'No son Iguales'),
        password2: Yup.string()
            .required('Obligatorio' )
            .oneOf([Yup.ref("password")],'No son Iguales'),
    }
}