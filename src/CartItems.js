import React from 'react'
import CartItem from './CartItem'

function CartItems(props){
    return (
        <div className="container">
            <h1>Items</h1>
            <div className="list-group">
                <div className="list-group-item">
                    <div className="row">
                        <div className="col-md-8">Product</div>
                        <div className="col-md-2">Price</div>
                        <div className="col-md-2">Quantity</div>
                    </div>
                </div>
                {props.cartItemsList.map(({product:{name, priceInCents}, quantity, id}) => <CartItem 
                        key={id} 
                        name={name} 
                        priceInCents={priceInCents} 
                        quantity={quantity} 
                />)}
            </div>
        </div>
    )
}

export default CartItems