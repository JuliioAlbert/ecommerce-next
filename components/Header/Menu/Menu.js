import { useState, useEffect } from 'react';
import { Container, Menu, Grid, Icon, Label } from "semantic-ui-react";
import Link from 'next/link';
import BasicModal from "../../Modal/BasicModal";
import Auth from '../../Auth';
import useAuth from '../../../hooks/useAuth';
import { getMeApi } from '../../../providers/user';
const MenuD = () => {
    const [showModal, setShowModal] = useState(false)
    const [titleModal, setTitleModal] = useState("");
    const { auth, logout } = useAuth();
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        (async () => {
            const response = await getMeApi(logout);
            //Debe llegar el nombre de usuario
            //console.log(response);
            setUser(response);
        })()
    }, [auth]);



    const onShowModal = () => setShowModal(true);
    const onCloseModal = () => setShowModal(false);

    return (
        <div className="menu">
            <Container>
                <Grid>
                    <Grid.Column className="menu__left" width={6}>
                        <MenuPlatform />
                    </Grid.Column>
                    <Grid.Column className="menu__right" width={10}>
                        {/* {auth ? (

                            <button onClick={logout}>Cerrar Sesion</button>
                        ) : (
                                <MenuOption onShowModal={onShowModal} />
                            )} */}
                        {user !== undefined && (
                            <MenuOption onShowModal={onShowModal} user={user} logout={logout} />
                        )}
                    </Grid.Column>
                </Grid>
            </Container>
            <BasicModal
                show={showModal}
                setShow={setShowModal}
                title={titleModal}
                size="small">
                <Auth onCloseModal={onCloseModal} setTitleModal={setTitleModal} />
            </BasicModal>
        </div>
    );
}

export default MenuD;

const MenuPlatform = () => {
    return (
        <Menu>
            <Link href="/play-station">
                <Menu.Item as="a">PS5 </Menu.Item>
            </Link>
            <Link href="/play-station">
                <Menu.Item as="a">Xbox </Menu.Item>
            </Link>
            <Link href="/play-station">
                <Menu.Item as="a">Switch </Menu.Item>
            </Link>
            <Link href="/play-station">
                <Menu.Item as="a">PC </Menu.Item>
            </Link>
        </Menu>
    )
}

const MenuOption = ({ onShowModal, user, logout }) => {
    return (
        <Menu>
            {user ? (
                <>
                    <Link href="/orders">
                        <Menu.Item as="a">
                            <Icon name="game" />
                    Mis Pedidos
                </Menu.Item>
                    </Link>
                    <Link href="/wishlist">
                        <Menu.Item as="a">
                            <Icon name="heart outline" />
                    Favoritos
                </Menu.Item>
                    </Link>
                    <Link href="/account">
                        <Menu.Item as="a">
                            <Icon name="user outline" />
                            {user.name} {user.lastname}
                        </Menu.Item>
                    </Link>
                    <Link href="/cart">
                        <Menu.Item as="a" className="m-0">
                            <Icon name="cart" />
                        </Menu.Item>
                    </Link>
                    <Menu.Item onClick={logout} >
                        <Icon name="power off" />
                    </Menu.Item>
                </>
            ) : (
                    <Menu.Item onClick={onShowModal}>
                        <Icon name="user outline" />
            Mi Cuenta
                    </Menu.Item>
                )}

        </Menu>
    )
}