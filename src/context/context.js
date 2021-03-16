import React, { Component } from "react";
import axios from "axios";

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
  state = {
    products: [],
    sortedProducts: [],
    category: "all",
    detailProduct: [],
    cart: [],
    userInput: "",
    modalOpen: false,
    modalProduct: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0,
  };

  //Mounting the new set of values
  componentDidMount() {
    this.setProducts();
    // console.log("test");
  }

  setProducts = () => {
    axios.get("/api/products").then((res) => {
      this.setState({
        products: res.data,
      });
    });
  };

  getCart = () => {
    axios.get(`/api/cart`).then((res) => {
      console.log("cart", res.data);
      this.setState({
        cart: res.data,
      });
    });
  };

  getItem = (id) => {
    const product = this.state.products.find((item) => item.item_id === id);
    return product;
  };

  handleDetail = (item_id) => {
    axios.get(`/api/detailProduct/${item_id}`).then((res) => {
      console.log("prodDetail", res.data);
      this.setState({
        detailProduct: res.data,
      });
    });
  };

  addToCart = (item_id) => {
    console.log(item_id);
    axios.post(`/api/addToCart`, { item_id }).then((res) => {
      this.setState({
        cart: res.data,
      });
    });
  };

  openModal = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return {
        modalProduct: product,
        modalOpen: true,
      };
    });
  };

  closeModal = () => {
    this.setState(() => {
      return {
        modalOpen: false,
      };
    });
  };

  increment = (item_id) => {
    axios.put(`/api/increment/${item_id}`).then((res) => {
      this.setState({
        cart: res.data,
      });
    });
  };

  decrement = (item_id, quantity) => {
    axios.put(`/api/decrement/${item_id}`, { quantity }).then((res) => {
      this.setState({
        cart: res.data,
      });
    });
  };

  removeItem = (item_id) => {
    axios.delete(`/api/deleteItem/${item_id}`).then((res) => {
      this.setState({
        cart: res.data,
      });
    });
  };

  clearCart = () => {
    axios
      .delete(`/api/clearCart`)
      .then((res) => {
        this.setState({
          cart: res.data,
        });
      })
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          openModal: this.openModal,
          closeModal: this.closeModal,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart,
          handleChange: this.handleChange,
          getCart: this.getCart,
          cart: this.state.cart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

// export function withProductConsumer(Component){
//     return function ProductWrapper(props){
//         return <ProductConsumer>
//            {value => <Component{...props} context = {value}/>}
//         </ProductConsumer>
//     }
// }

export { ProductProvider, ProductConsumer, ProductContext };
//need to make a ProductConsumer and then add it to my export in order to handle search functions
