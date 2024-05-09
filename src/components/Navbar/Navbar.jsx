import React from 'react';
import './Navbar.css'
const Navbar = ({data}) => {
const product = data?.map(item =>(
    <div className="card" key={item.id}>
    <img src={item.images[0]} alt="" />
    <h2>{item.title}</h2>
    <p>{item.description}</p>
</div>
))
    return (
        <div>

            <div className="wrappir container">
               {product}
            </div>
        </div>
    );
}

export default Navbar;
