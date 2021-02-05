import {Form, Button} from 'semantic-ui-react';
const ChangeNameForm = ({user}) => {
    return ( 
        <div className="change-name-form">
            <h4>Cambia Nombre y Apellidos</h4>
            <Form>
                <Form.Group widths="equal">
                    <Form.Input name="nombre" placeholder="Tu nombre"/>
                    <Form.Input name="apellidos" placeholder="Tus Apellidos" />                    
                </Form.Group>
                <Button className="submit">
                    Actualizar
                </Button>
            </Form>

        </div>
     );
}
 
export default ChangeNameForm;