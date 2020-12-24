import React, { useContext } from 'react';
import { typeAuth } from '../../types/typesAuth';
import { AuthContext } from '../../auth/AuthContext';

export const LoginScreen = ({ history }) => {
    
    const { dispatch } = useContext(AuthContext);

    const handleLogin = () => {
        
        const lastPath  = localStorage.getItem('lastPath') || '/';

        dispatch({
            type: typeAuth.login,
            payload: { name: 'Javier', email: 'wjortizcq@integrait.com.mx '}
        });

        history.replace(lastPath);
    }

    return (
        <div className="container mt-5">
            <h1>Login</h1>
            <hr />

            <button 
                onClick={ handleLogin }
                className="btn btn-primary">
                Ingresar
            </button>
        </div>
    )
}
