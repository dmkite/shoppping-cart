import React from 'react'

function AddItem(props){
    return (
        <form >
            <div className="form-group">
                <label htmlFor="quantity">Quantity</label>
                <input type="number" min="1" max="99" id="quantity"/>
            </div>
            <div className="form-group">
                <label htmlFor="products">Products</label>
                <select className="custom-select custom-select-lg mb-3" id="products">
                    <option selected>Select an option...</option>
                    {props.products.map(product => <option value={product.name}>{product.name}</option>)}
                </select>
            </div>
            <button className="btn btn-primary" type="submit" onClick={props.handleClick}>submit</button>
        </form>
    )
}

export default AddItem