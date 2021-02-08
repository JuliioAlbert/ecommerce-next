import { Form, Buttonm, Button } from 'semantic-ui-react';

const ChangeEmailForm = () => {
    //const { user, reload, setReload } = props;
    return (
        <div className="change-email-form">
            <h4>Cambia tu e-mail <span>{/*user.email */}</span></h4>

            <Form>
                <Form.Group widths="equal">
                    <Form.Input name="email" placeholder=" Email" />
                    <Form.Input name="repeatEmail" placeholder="Tu  Nuevo Email" />
                </Form.Group>
                <Button className="submit">
                    Actualizar
                </Button>
            </Form>
        </div>
    );
}

export default ChangeEmailForm;