import {useState} from 'react';

import {Container,Menu,Grid,Icon,Label} from "semantic-ui-react";
import Link from 'next/link';
import BasicModal from "../../Modal/BasicModal";
import Auth from '../../Auth';


const MenuD = () => {
    const [showModal, setShowModal] = useState(false)
    const [titleModal, setTitleModal] = useState("");


    const onShowModal = () => setShowModal(true);
    const onCloseModal = () => setShowModal(false);

        return ( 
        <div className="menu">
            <Container>
                <Grid>
                    <Grid.Column className="menu__left" width={6}>
                    <MenuPlatform/>
                    </Grid.Column>
                    <Grid.Column className="menu__right" width={10}>
                        <MenuOption onShowModal={onShowModal} />
                    </Grid.Column>
                </Grid>
            </Container>
            <BasicModal 
                show={showModal}
                setShow={setShowModal} 
                title={titleModal} 
                size="small">
                <Auth onCloseModal={onCloseModal} setTitleModal={setTitleModal}/>
            </BasicModal>
        </div>
     );
}
 
export default MenuD;

function MenuPlatform(){
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

function MenuOption({onShowModal}){
    return (
        <Menu>

        <Menu.Item onClick={onShowModal}>
            <Icon name="user outline" />
            Mi Cuenta
        </Menu.Item>
        </Menu>
    )
}