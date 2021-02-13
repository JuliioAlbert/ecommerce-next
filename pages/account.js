import { useState, useEffect } from 'react';
import { Icon } from 'semantic-ui-react';
import BasicLayout from '../layouts/BasicLayout';
import { useRouter } from 'next/router';
import useAuth from '../hooks/useAuth';
import { getMeApi } from '../providers/user';
import ChangeNameForm from '../components/Account/ChangeNameForm';
import ChangeEmailForm from '../components/Account/ChangeEmailForm';
import ChangePasswordForm from '../components/Account/ChangePasswordForm';
import BasicModal from '../components/Modal/BasicModal';
const Account = () => {

    const [user, setUser] = useState(undefined);
    const { auth, logout, setReloadUser } = useAuth();


    const router = useRouter();
    useEffect(() => {
        (async () => {
            const responese = await getMeApi(logout);
            setUser(responese || null);
        })();
    }, [auth]);

    if (user === undefined) return null;
    if (auth && !user) {
        router.replace('/');
        return null;
    }
    return (
        <BasicLayout className="account">
            <Configuration
                user={user}
                logout={logout}
                setReloadUser={setReloadUser}
            />
            <Direcciones />

        </BasicLayout>
    );
}
export default Account;

const Configuration = ({ user, logout, setReloadUser }) => {
    return (
        <div className="account__configuration">
            <div
                className="title">
                Configuracion
                </div>
            <div className="data">
                <ChangeNameForm
                    user={user}
                    logout={logout}
                    setReloadUser={setReloadUser}
                />
                <ChangeEmailForm
                    user={user}
                    logout={logout}
                    setReloadUser={setReloadUser}
                />
                <ChangePasswordForm
                    user={user}
                    logout={logout}
                />
            </div>

        </div>
    );
}

const Direcciones = () => {
    const [showModal, setShowModal] = useState(false);
    const [titleModal, setTitleModal] = useState('');
    const [formModal, setFormModal] = useState(null);


    const openModal = (title) => {
        setTitleModal(title);
        setFormModal(
            (<h1>Nueva Direccion</h1>)
        )
        setShowModal(true);
    }
    return (
        <div className="account__address">
            <div className="title">
                Direcciones
                <Icon name="plus" link onClick={() => openModal("Nueva Direccion")} />
            </div>
            <div className="data">
                <p>Lista de Direcciones</p>
            </div>
            <BasicModal
                show={showModal}
                setShow={setShowModal}
                title={titleModal}>

                <p>Formulario Add -Update</p>
            </BasicModal>
        </div>
    )
}