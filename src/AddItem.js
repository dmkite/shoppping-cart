import React , { Component } from 'react'

class AddItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            quantity: 0,
            product: 'Select an option...',
            products: props.products,
            submit: props.addItemToCart
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.state.submit(this.state.product, Number(this.state.quantity))
        this.setState({
            quantity:0,
            product: 'Select an option...'
        })
    } 

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="quantity">Quantity</label>
                    <input type="number" min="1" max="99" id="quantity" name="quantity" onChange={this.handleChange} value={this.state.quantity}/>
                </div>
                <div className="form-group">
                    <label htmlFor="products">Products</label>
                    <select className="custom-select custom-select-lg mb-3" id="products" name="product" onChange={this.handleChange} value={this.state.product}>
                        <option>Select an option...</option>
                        {this.state.products.map(product => <option key={product.id} value={product.name}>{product.name}</option>)}
                    </select>
                </div>
                <button className="btn btn-primary" type="submit">submit</button>
            </form>
        )
    }
}

export default AddItem