import Menu from "./Menu/Menu";
import TopBar from "./TopBar/TopBar";

const Header = () => {
    return ( 
        <div className="header">
           <TopBar/>
           <Menu/>
        </div>
     );
}
 
export default Header;