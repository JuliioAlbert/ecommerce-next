import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Loader } from 'semantic-ui-react';
import { size } from 'lodash';
import BasicLayout from '../../layouts/BasicLayout';
import { getGamesPlatform, getTotalGames } from '../../providers/game';
import ListGames from '../../components/ListGames';
import Pagination from '../../components/Pagination';


const limitPorPage = 10;


const Platform = () => {
    const { query } = useRouter();
    const [games, setGames] = useState(null);
    const [totalGames, setTotalGames] = useState(null);


    const getStartItems = () => {
        const currentPages = parseInt(query.page);
        if (!query.page || currentPages === 1) return 0;
        else return currentPages * limitPorPage - limitPorPage;
    }


    useEffect(() => {
        (async () => {
            if (query.platform) {
                const response = await getGamesPlatform(query.platform, limitPorPage, getStartItems());
                setGames(response);
            }

        })()
    }, [query]);

    useEffect(() => {
        (async () => {
            const response = await getTotalGames(query.platform);
            setTotalGames(response);
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
            {totalGames ? <Pagination totalGames={totalGames} page={query.page ? parseInt(query.page) : 1} limitPorPage={limitPorPage} /> : null}

        </BasicLayout>
    );
}

export default Platform;