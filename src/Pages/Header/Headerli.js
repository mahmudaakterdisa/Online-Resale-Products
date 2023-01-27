import React from 'react';
import { Link } from 'react-router-dom';

const Headerli = (category) => {
    const { catagory_name, _id } = category;


    return (
        <div>

            {/* <Link to={`/allcatagories/${catagory_name}`}>
                <li className='btn-outline hover:btn-secondary'>{catagory_name}</li>
            </Link> */}



        </div>
    );
};

export default Headerli;