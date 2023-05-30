import { useState, useEffect } from 'react';
import styles from '../style';
import { mycustomAxios } from '../axios/axios.config';
import { Users } from '../model/UserInterface';
import {logo, countigoCard} from "../assets";
import {
    DeleteOutlined,
    EditOutlined,
    EyeOutlined, IdcardOutlined,
    KeyOutlined, MailOutlined,
    SendOutlined,
    UserOutlined
} from "@ant-design/icons";
import {Button} from "antd";
import Loading from "./Loading";
import ModalTrabajador from "./ModalTrabajador";

const TrabajadoresComponen: React.FC = () => {
    const [users, setUsers] = useState<Users[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isUpdated, setIsUpdated] = useState(false);

    const reloadData = (user: Users) => {
        setUsers(prevState => {
            const index = prevState.findIndex(u => u.id === user.id);
            if (index !== -1) {
                prevState[index] = user;
            }
            return [...prevState];
        });
    };

    const deleteUser = async (userId: string) => {
        try {
            await mycustomAxios.delete(`users/${userId}`);
            setUsers(prevState => prevState.filter(user => user.id !== userId));
        } catch (error) {
            setError(error);
        }
    };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await mycustomAxios.get<Users[]>("users");
                setUsers(response.data);
                setLoading(false);
                setIsUpdated(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchUsers();
    }, [isUpdated]);

    if (loading) return <Loading />;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div
            className={`bg-black-gradient`}
            style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '20px',

            }}
        >
            {users.map(user => (
                <div key={user.id} className='user_backGround'>
                    <div className={`${styles.flexCenter} ${styles.paddingY}`} style={{ display: 'flex' }}>
                        <img src={logo} alt="logo" className={`w-[10%] h-[10%]`} />
                        <img src={countigoCard} alt="countigoCard" className={`w-[30%]`} />
                    </div>

                    <div className={`${styles.marginX}`}>
                        <div>
                            <label className={`text-yellow`}><UserOutlined style={{ fontSize: '24px' }} /> Nombre del trabajador:</label>
                            <label className={`text-white`}> {user.name}</label>
                        </div>
                        <div>
                            <label className={`text-yellow`}><IdcardOutlined style={{ fontSize: '24px' }} /> Nombre de usuario:</label>
                            <label className={`text-white`}> {user.username}</label>
                        </div>
                        <div>
                            <label className={`text-yellow`}><MailOutlined style={{ fontSize: '24px' }} /> Email:</label>
                            <label className={`text-white`}> {user.email}</label>
                        </div>


                        <div className={`${styles.marginY} ${styles.flexCenter}`}>
                            <ModalTrabajador userId={user.id} reloadData={reloadData} />

                            <Button onClick={() => deleteUser(user.id)} className={`text-yellow`} type="primary" shape="round" icon={<DeleteOutlined/>} >
                                Eliminar trabajador
                            </Button>
                        </div>

                    </div>
                </div>

            ))}
        </div>
    );
};

export default TrabajadoresComponen;
