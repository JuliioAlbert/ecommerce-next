import { useState, useEffect } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import { map, size } from 'lodash';
import { listaDirecciones, eliminarDirecciones } from '../../../providers/direcciones';
import UseAuth from '../../../hooks/useAuth';
const ListDirecciones = ({reloadDireccion,setReloadDireccion, openModal}) => {
    const [direcciones, setDirecciones] = useState(null);
    const { auth, logout } = UseAuth();
   
    useEffect(() => {

        (async () => {
             const response = await listaDirecciones(auth.idUser, logout);
            setDirecciones(response || []);
            setReloadDireccion(false);
        })()
    }, [reloadDireccion])
    if(!direcciones)return null;

    return (
        <div className="list-direcciones">
            {size(direcciones) === 0
                ? (<h3>No hay Direccion Creada</h3>)
                : (
                    <Grid>
                        {map(direcciones, (direccion) => (
                            <Grid.Column key={direccion.id} mobile={16} tablet={8} computer={4}>
                                <Direccion 
                                    direccion={direccion} 
                                    logout={logout} 
                                    setReloadDireccion={setReloadDireccion} 
                                    openModal={openModal}
                                    />
                            </Grid.Column>
                        ))}
                    </Grid>
                )
            }
        </div>
    );
}

export default ListDirecciones;

const Direccion = ({ direccion,logout, setReloadDireccion, openModal }) => {
    const [loadingDelete, setLoadingDelete] = useState(false);


    const eliminarDirecciones = async() => {
        setLoadingDelete(true);
        const response = await eliminarDirecciones(direccion._id, logout);
        if(response) setReloadDireccion(true);
        setLoadingDelete(false);
    }


    return (
        <div className="address">
            <p>Direccion</p>
            <p>Direccion</p>
            <p>Direccion</p>
            <p>Direccion</p>
            <p>Direccion</p>
            <p>Direccion</p>
            <div className="actions">
                <Button 
                    primary 
                    onClick={() =>openModal(`Editar: ${direccion.title}`, direccion)}
                    >Editar
                </Button>
                <Button onClick={eliminarDirecciones} loading={loadingDelete} >Eliminar</Button>
            </div>
        </div>
    )
}