
import { Pagination as PaginationSU } from 'semantic-ui-react';
import { useRouter } from 'next/router';
import queryString from 'query-string';


const Pagination = (props) => {
    const { totalGames, page, limitPorPage } = props;
    const totalPages = Math.ceil(totalGames/ limitPorPage);
    const router = useRouter();
    const urlParser = queryString.parseUrl(router.asPath);

    //Cambiar de Ruta 
    const onPageChange  = (newPage) => {
        urlParser.query.page = newPage;
        const url = queryString.stringifyUrl(urlParser);
        //console.log(url);
        router.push(url);
    }

    return (
        <div className="pagination">
            <PaginationSU 
                defaultActivePage={page}
                totalPages={totalPages}
                firstItem={null}
                lastItem={null}
                onPageChange={(_ ,data ) => onPageChange(data.activePage)}
                boundaryRange={0}
                siblingRange={1}
                ellipsisItem={null}
                />
        </div>
    );
}

export default Pagination;