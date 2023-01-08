// seeding is a process of inserting dummy data
// data aayega parent component ke pass usko child component ko dena hai 
// passing this data is done through attributes (par isse attributes nhi bolte isse khete hai passing data through props (properties) ku props bolte)
// jsx = javascript expressions isshe hum {} mai likhte ha
/*
baap mai event ka fn bana aur bete ko bhej de as a prop

*/

// props and state dono object hai Component ke 

// koi bhi chiz change karna hai usshe state mai daalo jo baap ke pass ho...

import React from "react";
import Product from "./Product";
import Seed from "../seed";



class ProductList extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            products: []
        };
        this.handleProductUpVote = this.handleProductUpVote.bind(this);
    }
    handleProductUpVote(productId) {
        let nextProducts = this.state.products;
        nextProducts = nextProducts.map((product) => {
            if(product.id === productId) {
                return ({
                    ...product,
                    votes:product.votes + 1
                });
            }

            return product;
        });
        this.setState({products: nextProducts});
    }

    //Lifecycle method
    componentDidMount() {
        this.setState({products: Seed.products});
    }

    render() {
        // const product = Seed.products[0];

        const products =this.state.products.sort((product1,product2) => product2.votes - product1.votes)
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