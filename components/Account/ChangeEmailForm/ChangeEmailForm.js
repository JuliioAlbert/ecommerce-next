import { useState } from 'react';
import { Form, Buttonm, Button } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { updateEmailApi } from '../../../providers/user';
const ChangeEmailForm = () => {
    //const { user, logout, setReload } = props;
    const [loading, setLoading] = useState(false);

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (datos) => {
            setLoading(true);
            const response = await updateEmailApi(user.id, datos.email, logout);
            if (!response) {
                toast.error('Error al Actualizar Email');
            }else if(response?.statusCode ===400){
                toast.error('Error al Actualizar Email');
            } else {
                //setReload(true);
                toast.success('Email Actualizado');
                formik.handleReset();
            }
            setLoading(false);
        }
    });
    return (
        <div className="change-email-form">
            <h4>Cambia tu e-mail <span>{/*user.email */}</span></h4>

            <Form onSubmit={formik.handleSubmit}>
                <Form.Group widths="equal">
                    <Form.Input
                        name="email"
                        placeholder=" Email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        error={formik.errors.email}
                    />

                    <Form.Input
                        name="repeatEmail"
                        placeholder="Tu  Nuevo Email"
                        onChange={formik.handleChange}
                        value={formik.values.repeatEmail}
                        error={formik.errors.repeatEmail}
                    />
                </Form.Group>
                <Button className="submit" type="submit" loading={loading} >
                    Actualizar
                </Button>
            </Form>
        </div>
    );
}

export default ChangeEmailForm;

const initialValues = () => {
    return {
        email: "",
        repeatEmail: ''
    }
}

const validationSchema = () => {
    return {
        email: Yup.string()
            .email()
            .required(true)
            .oneOf([Yup.ref('repeatEmail')], 'El Email no es el mismo'),
        repeatEmail: Yup.string()
            .email()
            .required(true)
            .oneOf([Yup.ref("email")], true)
    }
}