import { Form, Button } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {toast} from 'react-toastify';


const ChangeNameForm = (/*{user} */) => {
    const user = {
        nombre:'julio',
        apellido:'Gonzalez'
    }
    const formik = useFormik({
        initialValues: initialValues(user.nombre, user.apellido),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (values) => {
            console.log(values)
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
                <Button className="submit">
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