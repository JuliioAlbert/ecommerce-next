import { useState,useEffect } from 'react';
import { useRouter } from 'next/router';
import BasicLayout from '../../layouts/BasicLayout';
import {getGamesPlatform} from '../../providers/game';
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