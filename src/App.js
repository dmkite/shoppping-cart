import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CartHeader from './CartHeader'
import CartFooter from './CartFooter'
import CartItems from './CartItems'
import AddItem from './AddItem'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      products: [
        { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
        { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
        { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
        { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
        { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
        { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
        { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
        { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
        { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
      ],
      cartItemsList: [
        { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
        { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
        { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
      ]
    }
  }
  render() {
    return (
      <div>
        <CartHeader/>
        <CartItems cartItemsList={this.state.cartItemsList}/>
        <AddItem products={this.state.products} handleClick={this.handleClick}/>
        <CartFooter copyright="2016"/>
      </div>
      )
  }

  handleClick = (e) => {
    e.preventDefault()
    let product = e.target.parentElement.children[1].children[1].value
    let quantity = e.target.parentElement.children[0].children[1].value
    
    if(!quantity || product === 'Select an option...') return false

    const {id, name, priceInCents} = this.state.products.filter(item => item.name === product)[0]

    const newCartItem = {
      product: {id, name, priceInCents},
      quantity
    }
    const productInCart = !!this.state.cartItemsList.filter(item => item.product.name === product)[0]
    const newCartItemsList = this.state.cartItemsList
    console.log(productInCart)
    if (productInCart){
      newCartItemsList.forEach(item => {
        if(item.product.name === product) item.quantity += Number(quantity)
      }) 
    }
    else{
      newCartItemsList.push(newCartItem)
    }
    e.target.parentElement.children[1].children[1].value = 'Select an option...'
    e.target.parentElement.children[0].children[1].value = ''
    this.setState({
      cartItemsList: newCartItemsList
    })
  }
}

export default App;
