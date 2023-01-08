import React from 'react';
class Product extends React.Component {
    render() {
        return ( 
            <div className = 'item' >
            <div className = 'image' >
                <img src='images/products/image.png' alt='hello'></img>
            </div> 
            <div className = 'middle aligned content' >
                <div className = 'description' >
                    <a > Author Name </a> <p > A short description about the product </p> 
                </div > 
                <div className = 'extra' >
                    <span > Submitted By: </span> 
                    <img className = "ui avatar image" src = 'images/avatars/daniel.jpg'></img> 
                </div > 
            </div>
        </div>
        );
    }
}

export default Product;