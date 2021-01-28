import { useState } from 'react';
import {Form,Button} from 'semantic-ui-react';
import {useFormik } from 'formik';
import * as Yup from 'yup';
import {toast} from 'react-toastify';
import { registrarUsuario } from '../../../providers/user';


const RegistroForm = (props) => {
    const {showLoginForm} = props;
    const [loading, setLoading] = useState(false);


    const formik = useFormik({
            initialValues: initiaValues(),
            validationSchema:Yup.object(validationSchema()),
            onSubmit: async (formData) => {
                setLoading(true);
                const response = await registrarUsuario(formData);
                if(response?.jwt){
                    showLoginForm();
                }else{
                    console.log('Error al Registrar el Usuario');
                    toast.error('Error Intentelo mas Tarde');
                }
                setLoading(false);
            }
        }
    );
    return ( 
        <Form className="login-form" onSubmit={formik.handleSubmit}>
             <Form.Input name="nombre" input="text"  placeholder="nombre"  onChange={formik.handleChange} error={formik.errors.nombre}/>
             <Form.Input name="apellido" type="text" placeholder="Apellidos"  onChange={formik.handleChange} error={formik.errors.apellido}/>
             <Form.Input name="userName" type="text" placeholder="Nombre de Usuario" onChange={formik.handleChange} error={formik.errors.userName} />
             <Form.Input name="email" type="text" placeholder="Correo Electronico" onChange={formik.handleChange} error={formik.errors.email} />
             <Form.Input name="password" type="password" placeholder="Contraseña" onChange={formik.handleChange} error={formik.errors.password}/>
             <div className="actions">
                 <Button type="button" basic >
                    Iniciar Sesion
                 </Button>
                 <Button type="submit" className="submit"  loading={loading}>
                    Registrar
                 </Button>
             </div>
        </Form>
     );
}
 
export default RegistroForm;

function initiaValues () {
    return {
        nombre:"",
        apellido:"",
        userName :"",
        email: "",
        password: ""
    }
}

function validationSchema(){
    return {
        nombre: Yup.string().required(true),
        apellido: Yup.string().required('El Apellido es Obligatorio'),
        userName:Yup.string().required(true),
        email: Yup.string().email().required(true),
        password: Yup.string().required(true)
    }
}