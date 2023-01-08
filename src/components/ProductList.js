// seeding is a process of inserting dummy data
// data aayega parent component ke pass usko child component ko dena hai 
// passing this data is done through attributes (par isse attributes nhi bolte isse khete hai passing data through props (properties) ku props bolte)
// jsx = javascript expressions isshe hum {} mai likhte ha

import React from "react";
import Product from "./Product";
import Seed from "../seed";

class ProductList extends React.Component {
    render() {
        const product = Seed.products[0];

        return(
            <div className="ui unstackable items">
                <Product 
                id = {product.id}
                title = {product.title}
                description = {product.description}
                url = {product.url}
                votes = {product.votes}
                submittedAvatarUrl = {product.submittedAvatarUrl}
                productImageUrl = {product.productImageUrl}
                
                />
            </div>
        )
    }
}

export default ProductList;