import { map } from 'lodash';
import { Image, Grid } from 'semantic-ui-react';
import Link from 'next/link';
import useWindows from '../../hooks/useWindowsSize';
import {breakPointUpSm, breakPointUpMd, breakPointUpLg} from '../../utils/breakpoint';



const ListGames = ({ games }) => {
    const {width} = useWindows();

    const getColumsRender = () => {
        switch (true) {
            case width > breakPointUpLg:
                return 5;
            case width > breakPointUpMd:
                return 3;
            case width > breakPointUpSm:
                return 2;
            default:
                return 1;
        }
    }


    return (
        <div className="list-games">
            <Grid>
                <Grid.Row columns={getColumsRender()}>
                    {map(games, (game) => (
                        <Game game={game} />
                    ))}
                </Grid.Row>
            </Grid>

        </div>
    );
}

export default ListGames;


const Game = ({ game }) => {
    return (
        <Grid.Column className="list-game__game">
            <Link href={`/${game.url}`}>
                <a>
                    <div className="list-games__game-poster">
                       <Image src={game.poster.url}  alt={game.title}/>
                       <div className="list-games__game-poster-info">
                           {game.discount ? (
                               <span className="discount">-{game.discount}</span>
                           ):(
                            <span/>
                           )}
                           <span className="price">{game.price}</span>
                       </div>
                    </div>
                    <h2>{game.title}</h2>
                </a>
            </Link>
        </Grid.Column>
    )
}