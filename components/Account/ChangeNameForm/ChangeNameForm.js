import {useState} from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {toast} from 'react-toastify';
import {updateNameApi} from '../../../providers/user';

const ChangeNameForm = (/*{user, logout, setReloadUser} */) => {
    const user = {
        nombre:'julio',
        apellido:'Gonzalez'
    }

    const logout = () =>{
        console.log(logout);
    }
    const [loading, setLoading] = useState(false);


    const formik = useFormik({
        initialValues: initialValues(user.nombre, user.apellido),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (values) => {
            //console.log(values)
            setLoading(true);
            const respuesta = await updateNameApi(user.id, values, logout);
            if(!respuesta){
                toast.error('Error al actualizar el nombre y apellidos');
            }else{
                console.log('Nombre Actualizado');
                //setReloadUser(true);
                toast.success("Nombre y Apellido Actualizados");
            }
            setLoading(false);
        }
    });


    return (
        <div className="change-name-form">
            <h4>Cambia Nombre y Apellidos</h4>
            <Form onSubmit={formik.handleSubmit}>
                <Form.Group widths="equal">
                    <Form.Input 
                        onChange={formik.handleChange} 
                        value={formik.values.nombre} 
                        name="nombre" 
                        error={formik.errors.nombre}
                        placeholder="Tu nombre" />
                        
                    <Form.Input 
                        onChange={formik.handleChange} 
                        value={formik.values.apellido}
                        name="apellido" 
                        error={formik.errors.apellido}
                        placeholder="Tus Apellidos" />
                </Form.Group>
                <Button className="submit" loading={loading}>
                    Actualizar
                </Button>
            </Form>

        </div>
    );
}

export default ChangeNameForm;

const initialValues = (nombre,apellido) => {
    return {
        nombre: nombre || '',
        apellido: apellido || '',
    }
}

const validationSchema= () =>{
    return {
        nombre: Yup.string().required(true),
        apellido: Yup.string().required(true)
    }
}