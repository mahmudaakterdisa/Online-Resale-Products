import React, { Children, useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAdmin from '../../hook/useAdmin';
import { Authcontext } from '../../Shared/Authprovider/Authprovider';

const Adminroute = ({ Children }) => {
    const { user, loading } = useContext(Authcontext);
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <p>Loading...</p>
    }

    if (user && isAdmin) {
        return Children;

    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default Adminroute;