import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Loader } from 'semantic-ui-react';
import { size } from 'lodash';
import BasicLayout from '../../layouts/BasicLayout';
import { getGamesPlatform } from '../../providers/game';
import ListGames from '../../components/ListGames';

const limitPorPage = 10;


const Platform = () => {
    const { query } = useRouter();
    const [games, setGames] = useState(null);

    useEffect(() => {
        (async () => {
            if(query.platform){
                const response = await getGamesPlatform(query.platform, limitPorPage, 0);
                setGames(response);
            }
           
        })()
    }, [query])


    return (
        <BasicLayout className="platform">
            {!games && <Loader active>Cargando Juegos</Loader>}
            {games && size(games) === 0 && (
                <div>
                    <h3>No hay Juegos</h3>
                </div>
            )}
            {size(games) > 0 && (
                <ListGames games={games} />
            )}
        </BasicLayout>
    );
}

export default Platform;