import { useState, useEffect } from 'react';
import BasicLayout from '../layouts/BasicLayout';
import { useRouter } from 'next/router';
import useAuth from '../hooks/useAuth';
import { getMeApi } from '../providers/user';
import ChangeNameForm from '../components/Account/ChangeNameForm';


const Account = () => {

    const [user, setUser] = useState(undefined);
    const { auth, logout } = useAuth();


    const router = useRouter();
    useEffect(() => {
        (async () => {
            const responese = await getMeApi(logout);
            setUser(responese || null);
        })();
    }, [auth]);

    if (user === undefined) return null;
    if (auth && !user) {
        router.replace('/');
        return null;
    }
    return (
        <BasicLayout className="account">
            <Configuration user={user} />
            
        </BasicLayout>
    );
}
export default Account;

const Configuration = ({user}) => {
    return (
        <div className="account__configuration">
            <div className="title">Configuracion</div>
            <div className="data"><ChangeNameForm user={user}/> </div>
        </div>
    );
}