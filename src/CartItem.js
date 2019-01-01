import React from 'react'

function CartItem({name, priceInCents, quantity}){
    return <div className="collection-item">
        <div className="row">
            <div className="col-md-8">{name}</div>
            <div className="col-md-2">${(priceInCents / 100).toLocaleString('USD')}</div>
            <div className="col-md-2">{quantity}</div>
        </div>
    </div>
}

export default CartItem