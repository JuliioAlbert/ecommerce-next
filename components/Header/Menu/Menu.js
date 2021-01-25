import {Container,Menu,Grid,Icon,Label} from "semantic-ui-react";
import Link from 'next/link';

const MenuD = () => {
    return ( 
        <div className="menu">
            <Container>
                <Grid>
                    <Grid.Column className="menu__left" width={6}>
                    <MenuPlatform/>
                    </Grid.Column>
                    <Grid.Column className="menu__right" width={10}>
                        <MenuOption/>
                    </Grid.Column>
                </Grid>
            </Container>
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

function MenuOption(){
    return (
        <Menu>

        <Menu.Item>
            <Icon name="user outline" />
            Mi Cuenta
        </Menu.Item>
        </Menu>
    )
}