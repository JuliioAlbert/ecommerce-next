import {map} from 'lodash';

const ListGames = ({games}) => {




    return ( 
        <div className="list-games">
            {map(games, (game) => (
                <h3>{game.title}</h3>
            ))}
        </div>
     );
}
 
export default ListGames;