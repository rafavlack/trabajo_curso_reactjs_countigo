import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div style={{
            background: 'linear-gradient(to right, #FCB754, #1B4770)',
            height: '100vh'
        }}>
            <div style={{ textAlign: 'center', paddingTop: '30vh' }}>
                <h1 style={{ color: 'white', fontSize: '48px' }}>Countigo</h1>
                <h2 style={{ color: 'white', fontSize: '36px' }}>404</h2>
                <p style={{ color: 'white', fontSize: '24px' }}>Page not found</p>
                <br />
                <Link to="/" style={{ color: 'white', fontSize: '18px' }}>Volver a la pagina principal</Link>
            </div>
        </div>
    );
};

export default NotFoundPage;
