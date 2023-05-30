import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Modal } from 'antd';
import {
    UserOutlined,
    MailOutlined,
    PhoneOutlined,
    HomeOutlined,
    GlobalOutlined,
    CompassOutlined,
    BankOutlined,
    EyeOutlined,
} from '@ant-design/icons';
import {Users} from "../model/UserInterface";

const ModalTrabajador: React.FC<{ userId: number; reloadData?: (json: any) => void }> = ({ userId, reloadData }) =>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState<Users | null>(null);


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(data => setUserData(data));
    }, [userId]);

    const showModal = () => {
        setIsModalOpen(true);
        setIsEditing(false);
    };

    const handleOk = () => {
        setIsModalOpen(false);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
        setIsEditing(false);
    };

    const handleEdit = () => {
        setIsEditing(true);
    };

    const handleSave = () => {
        // Aquí puedes enviar los datos actualizados a la API
        if (userData) {
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
                method: 'PUT',
                body: JSON.stringify(userData),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then(response => response.json())
                .then(json => {
                    if (reloadData) reloadData(json);
                });
        }
        setIsEditing(false);
    };


    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserData(prevState => {
            if (prevState) {
                return { ...prevState, [name]: value };
            }
            return prevState;
        });
    };

    return (
        <>
            <Button
                className={`text-yellow`}
                type="primary"
                shape="round"
                icon={<EyeOutlined />}
                onClick={showModal}
            >
                Ver datos personales
            </Button>
            <Modal
                title="Datos del Trabajador"
                visible={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        {!isEditing ? (
                            <Button type="primary" onClick={handleEdit} style={{ marginRight: "8px" }}>
                                Editar
                            </Button>
                        ) : (
                            <Button type="primary" onClick={handleSave} style={{ marginRight: "8px" }}>
                                Guardar
                            </Button>
                        )}
                        <div>
                            <Button onClick={handleCancel} style={{ marginRight: "8px" }}>
                                Cancelar
                            </Button>
                            <Button type="primary" onClick={handleOk}>
                                Ok
                            </Button>
                        </div>
                    </div>
                }
            >
                {userData && (
                    <Form>
                        <Form.Item label="Nombre y apellidos">
                            <Input
                                name="name"
                                prefix={<UserOutlined />}
                                value={userData.name}
                                onChange={handleChange}
                                readOnly={!isEditing}
                            />
                        </Form.Item>
                        <Form.Item label="Email">
                            <Input
                                name="email"
                                prefix={<MailOutlined />}
                                value={userData.email}
                                onChange={handleChange}
                                readOnly={!isEditing}
                            />
                        </Form.Item>
                        <Form.Item label="Teléfono">
                            <Input
                                name="phone"
                                prefix={<PhoneOutlined />}
                                value={userData.phone}
                                onChange={handleChange}
                                readOnly={!isEditing}
                            />
                        </Form.Item>
                        <Form.Item label="Sitio web">
                            <Input
                                name="website"
                                prefix={<GlobalOutlined />}
                                value={userData.website}
                                onChange={handleChange}
                                readOnly={!isEditing}
                            />
                        </Form.Item>
                        <Form.Item label="Calle">
                            <Input
                                name="address.street"
                                prefix={<HomeOutlined />}
                                value={userData.address.street}
                                onChange={handleChange}
                                readOnly={!isEditing}
                            />
                        </Form.Item>
                        <Form.Item label="Apto">
                            <Input
                                name="address.suite"
                                prefix={<HomeOutlined />}
                                value={userData.address.suite}
                                onChange={handleChange}
                                readOnly={!isEditing}
                            />
                        </Form.Item>
                        <Form.Item label="Ciudad">
                            <Input
                                name="address.city"
                                prefix={<HomeOutlined />}
                                value={userData.address.city}
                                onChange={handleChange}
                                readOnly={!isEditing}
                            />
                        </Form.Item>
                        <Form.Item label="Zipcode">
                            <Input
                                name="address.zipcode"
                                prefix={<HomeOutlined />}
                                value={userData.address.zipcode}
                                onChange={handleChange}
                                readOnly={!isEditing}
                            />
                        </Form.Item>
                        <Form.Item label="Latitud">
                            <Input
                                name="address.geo.lat"
                                prefix={<CompassOutlined />}
                                value={userData.address.geo.lat}
                                onChange={handleChange}
                                readOnly={!isEditing}
                            />
                        </Form.Item>
                        <Form.Item label="Longitud">
                            <Input
                                name="address.geo.lng"
                                prefix={<CompassOutlined />}
                                value={userData.address.geo.lng}
                                onChange={handleChange}
                                readOnly={!isEditing}
                            />
                        </Form.Item>

                        <Form.Item label="Compañía">
                            <Input
                                name="company"
                                prefix={<BankOutlined />}
                                value={userData.company.name}
                                onChange={handleChange}
                                readOnly={!isEditing}
                            />
                        </Form.Item>
                    </Form>
                )}
            </Modal>
        </>
    );
};

export default ModalTrabajador;
