import{ useState, useEffect } from 'react';
import {size} from 'lodash';
import {Loader} from 'semantic-ui-react';
import BasicLayout from "../layouts/BasicLayout";
import {getGamesNuevos} from '../providers/game';
import ListGames from '../components/ListGames';


const Home = () => {
  const [games, setGames] = useState(null);
  console.log(games);
  useEffect(() => {
    (async ()=> {
      const response = await getGamesNuevos(50);
      if(size(response) > 0 ) setGames(response);
      else setGames([]);
    })()
  }, [])

  return ( 

    <BasicLayout className="home">
        {!games && <Loader active>Cargando Juegos</Loader>}
        {games && size(games) === 0 && (
          <div>
            <h3>No hay Juegos</h3>
          </div>
        )}
        {size(games)>0 && (<ListGames games={games}/>)}
    </BasicLayout>
   );
}
 
export default Home;