import React from 'react';
class Product extends React.Component {
    render() {
        return ( 
            <div className = 'item' >
            <div className = 'image' >
                <img src={this.props.productImageUrl} alt='hello'></img>
            </div> 
            <div className = 'middle aligned content' >
                <div className='header'>
                    <a>
                        <i className='icon caret up large'></i>
                    </a>
                    {this.props.votes}
                </div>
                <div className = 'description' >
                    <a >{this.props.title} </a> <p > {this.props.description} </p> 
                </div > 
                <div className = 'extra' >
                    <span > Submitted By: </span> 
                    <img className = "ui avatar image" src = {this.props.submittedAvatarUrl}></img> 
                </div > 
            </div>
        </div>
        );
    }
}

export default Product;

