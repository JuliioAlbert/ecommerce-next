import { useState, useEffect } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { map, size } from 'lodash';
import { listaDirecciones } from '../../../providers/direcciones';
import UseAuth from '../../../hooks/useAuth';
const ListDirecciones = () => {
    const [direcciones, setDirecciones] = useState(null);
    const { auth, logout } = UseAuth();
   
    useEffect(() => {

        (async () => {
             const response = await listaDirecciones(auth.idUser, logout);
            setDirecciones(response || [])
        })()
    }, [])
    if(!direcciones)return null;

    return (
        <div className="list-direcciones">
            {size(direcciones) === 0
                ? (<h3>No hay Direccion Creada</h3>)
                : (
                    <Grid>
                        {map(direcciones, (direccion) => (
                            <Grid.Column key={direccion.id} mobile={16} tablet={8} computer={4}>
                                <Direccion direccion={direccion} />
                            </Grid.Column>
                        ))}
                    </Grid>
                )
            }
        </div>
    );
}

export default ListDirecciones;

const Direccion = ({ direccion }) => {
    //const {} = direccion;
    return (
        <div className="address">
            <p>Direccion</p>
            <p>Direccion</p>
            <p>Direccion</p>
            <p>Direccion</p>
            <p>Direccion</p>
            <p>Direccion</p>
            <div className="actions">
                <Button primary>Editar</Button>
                <Button >Eliminar</Button>
            </div>
        </div>
    )
}