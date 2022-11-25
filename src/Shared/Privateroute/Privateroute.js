import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Authcontext } from '../Authprovider/Authprovider';

const Privateroute = ({ children }) => {
    const { user, loading } = useContext(Authcontext);
    const location = useLocation();

    if (loading) {
        return <p>Loading...</p>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default Privateroute;