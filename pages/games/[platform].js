import BasicLayout from '../../layouts/BasicLayout';
import { useRouter } from 'next/router';

const Platform = () => {
    const { query } = useRouter();
    console.log(router);
    return (
        <BasicLayout className="platform">
            <h1>Estamos en Platforms{query.platform}</h1>
        </BasicLayout>
    );
}

export default Platform;