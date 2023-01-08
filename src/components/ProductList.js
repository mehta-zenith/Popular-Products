// seeding is a process of inserting dummy data
// data aayega parent component ke pass usko child component ko dena hai 
// passing this data is done through attributes (par isse attributes nhi bolte isse khete hai passing data through props (properties) ku props bolte)
// jsx = javascript expressions isshe hum {} mai likhte ha
/*
baap mai event ka fn bana aur bete ko bhej de as a prop

*/

import React from "react";
import Product from "./Product";
import Seed from "../seed";



class ProductList extends React.Component {
    handleProductUpVote(productId) {
        console.log(productId + " was up voted by the user!");
    }
    render() {
        // const product = Seed.products[0];

        const products = Seed.products.sort((product1,product2) => product2.votes - product1.votes)
        const productComponents = products.map((product) => (
            <Product 
            key={product.id} // ye daala ku ki diffing algo pata chalega jab same components aaye toh har ek ka key alag ho toh difference samjega
            id = {product.id}
            title = {product.title}
            description = {product.description}
            url = {product.url}
            votes = {product.votes}
            submittedAvatarUrl = {product.submittedAvatarUrl}
            productImageUrl = {product.productImageUrl}
            onVote = {this.handleProductUpVote}
            
            />
        ));
        console.log(productComponents);

        return(
            <div className="ui unstackable items">
              {productComponents}
            </div>
        )
    }
}

export default ProductList;


/*
baap mai event ka fn bana aur bete ko bhej de as a prop

*/