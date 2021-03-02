import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import useAuth from '../../../hooks/useAuth';
import { crearDireccionApi } from '../../../providers/direcciones';
import { toast } from 'react-toastify';


const AdressForm = ({ setShowModal, setReloadDireccion }) => {
    const [loading, setLoading] = useState(false);
    const { auth, logout } = useAuth();


    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (datos) => {
            crearDireccion(datos);
        }
    })

    const crearDireccion = async (datos) => {
        setLoading(true);
        const dataTemp = {
            ...datos,
            user: auth.idUser
        }
        const response = await crearDireccionApi(dataTemp, logout)
        if (!response) {
            toast.warning('Error al crear direccion');
            setLoading(false);
        } else {
            formik.resetForm();
            setReloadDireccion(true);
            setLoading(false);
            setShowModal(false);
        }


    }
    return (
        <Form onSubmit={formik.handleSubmit}>
            <Form.Input
                name="titulo"
                type="text"
                label="Titulo de la Direccion"
                placeholder="Titulo de la Direccion"
                onChange={formik.handleChange}
                error={formik.errors.titulo}
                value={formik.values.titulo}
            />
            <Form.Group widths="equal">
                <Form.Input
                    name="nombre"
                    type="text"
                    label="Nombre y Apellidos"
                    placeholder="Nombre y Apellidos"
                    onChange={formik.handleChange}
                    error={formik.errors.nombre}
                    value={formik.values.nombre}
                />
                <Form.Input
                    name="direccion"
                    type="text"
                    label="Direccion"
                    placeholder="Direccion"
                    onChange={formik.handleChange}
                    error={formik.errors.direccion}
                    value={formik.values.direccion}
                />

            </Form.Group>
            <Form.Group widths="equal">
                <Form.Input
                    name="ciudad"
                    type="text"
                    label="Ciuidad"
                    placeholder="ciudad"
                    onChange={formik.handleChange}
                    error={formik.errors.ciudad}
                    value={formik.values.ciudad}
                />
                <Form.Input
                    name="estado"
                    type="text"
                    label="Estado/Provincia/Region"
                    placeholder="Estado/Provincia/Region"
                    onChange={formik.handleChange}
                    error={formik.errors.estado}
                    value={formik.values.estado}
                />
            </Form.Group>
            <Form.Group widths="equal">
                <Form.Input
                    name="postal"
                    type="text"
                    label="Codigo Postal"
                    placeholder="Codigo Postal"
                    onChange={formik.handleChange}
                    error={formik.errors.postal}
                    value={formik.values.postal}
                />
                <Form.Input
                    name="telefono"
                    type="phone"
                    label="Telefono"
                    placeholder="Numero de Telefono"
                    onChange={formik.handleChange}
                    error={formik.errors.telefono}
                    value={formik.values.telefono}
                />
            </Form.Group>
            <div className="actions">
                <Button className="submit" type="submit" loading={loading} >
                    Crear Direccion
                </Button>
            </div>
        </Form>
    );
}

export default AdressForm;

const initialValues = () => {
    return {
        titulo: "",
        nombre: "",
        direccion: "",
        ciudad: "",
        estado: "",
        postal: "",
        telefono: "",
    }
}

const validationSchema = () => {
    return {
        titulo: Yup.string().required('Obligatorio'),
        nombre: Yup.string().required('Obligatorio'),
        direccion: Yup.string().required('Obligatorio'),
        ciudad: Yup.string().required('Obligatorio'),
        estado: Yup.string().required('Obligatorio'),
        postal: Yup.string().required('Obligatorio'),
        telefono: Yup.string().required('Obligatorio'),
    }
}