import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ 
    isAuthenticated,
    component: Component,
    ...rest
}) => {
    const lastPath = rest.location.pathname;
    localStorage.setItem('lastPath',lastPath);
    return (
        <Route { ...rest } 
            component={ (props) =>
                (isAuthenticated)
                ? (<Component { ...props } />)
                : (<Redirect to='/login' />)
            }        
        />
    )
}


PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired
}
