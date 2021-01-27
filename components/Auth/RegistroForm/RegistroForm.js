import { useState } from 'react';
import {Form,Button} from 'semantic-ui-react';

const RegistroForm = (props) => {
    const {showLoginForm} = props;
    return ( 
        <Form className="login-form">
            <Form.Input
                name="name"
                input="text"
                placeholder="nombre"
             />
             <Form.Input name="apellido" type="text" placeholder="Apellidos" />
             <Form.Input name="username" type="text" placeholder="Nombre de Usuario" />
             <Form.Input name="email" type="text" placeholder="Correo Electronico" />
             <Form.Input name="password" type="password" placeholder="Contraseña" />
             <div className="actions">
                 <Button type="button" basic >
                    Iniciar Sesion
                 </Button>
                 <Button type="submit" className="submit" >
                    Registrar
                 </Button>


             </div>
             



        </Form>
     );
}
 
export default RegistroForm;