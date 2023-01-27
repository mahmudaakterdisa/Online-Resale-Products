import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect } from 'react';
import { Authcontext } from '../../../../Shared/Authprovider/Authprovider';
import AOS from "aos";
import "aos/dist/aos.css";
const Myproducts = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    const { user } = useContext(Authcontext);

    const url = `https://y-omega-two.vercel.app/catagories?email=${user?.email}`;

    const { data: catagories = [], refetch } = useQuery({
        queryKey: ['catagories', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    });
    return (
        <div>
            <h1>my products</h1>
        </div>
    );
};

export default Myproducts;