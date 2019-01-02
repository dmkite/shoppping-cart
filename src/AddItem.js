import React , { Component } from 'react'

const DEFAULT_OPTION = 'Select an option...'

class AddItem extends Component{
    constructor(props){
        super(props)
        this.state = {
            quantity: 0,
            product: DEFAULT_OPTION,
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addItemToCart(this.state.product, Number(this.state.quantity))
        this.setState({
            quantity:0,
            product: DEFAULT_OPTION
        })
    } 

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    
    render(){
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="quantity">Quantity</label>
                        <input type="number" min="1" max="99" id="quantity" name="quantity" onChange={this.handleChange} value={this.state.quantity} style={{width:'100%'}}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="products">Products</label>
                        <select className="custom-select custom-select-lg mb-3" id="products" name="product" onChange={this.handleChange} value={this.state.product}>
                            <option>{DEFAULT_OPTION}</option>
                            {this.props.products.map(product => <option key={product.id} value={product.name}>{product.name}</option>)}
                        </select>
                    </div>
                    <button className="btn btn-primary" type="submit">submit</button>
                </form>
            </div>
        )
    }
}

export default AddItem