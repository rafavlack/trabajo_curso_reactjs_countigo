import { useState, useEffect } from 'react';
import styles from '../style';
import { mycustomAxios } from '../axios/axios.config';
import { Users } from '../model/UserInterface';
import {logo, countigoCard} from "../assets";
import {
    DeleteOutlined,
    EditOutlined,
    EyeOutlined,
    KeyOutlined,
    SendOutlined,
    UserOutlined
} from "@ant-design/icons";
import {Button} from "antd";



const TrabajadoresComponen:  React.FC = () => {
    const [users, setUsers] = useState<Users[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await mycustomAxios.get<Users[]>(
                    'users'
                );
                setUsers(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return <div>Loading...</div>;
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

                            <label className={`text-yellow`}><UserOutlined /> Nombre del trabajador:</label>
                            <label  className={`text-white`}> {user.name}</label>
                        </div>
                        <div>
                            <label className={`text-yellow`}><KeyOutlined /> Nombre del usuario:</label>
                            <label  className={`text-white`}> {user.username}</label>
                        </div>
                        <div>
                            <label className={`text-yellow`}><SendOutlined/> Correo electrónico:</label>
                            <label  className={`text-white`}> {user.email}</label>
                        </div>

                        <div className={`${styles.marginY} ${styles.flexCenter}`}>
                            <Button  className={`text-yellow`} type="primary" shape="round" icon={<EyeOutlined/>}>
                                Ver datos personales
                            </Button>
                            <Button  className={`text-yellow`} type="primary" shape="round" icon={<EditOutlined/>}>
                                Actualizar
                            </Button>
                            <Button  className={`text-yellow`} type="primary" shape="round" icon={<DeleteOutlined/>} >
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
