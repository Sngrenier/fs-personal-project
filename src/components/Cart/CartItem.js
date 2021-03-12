import React from 'react'

export default function CartItem({item, value}) {
    const{item_id, title, img, price, quantity} = item
    const {increment, decrement, removeItem} = value
    return (
        <div className="row my-5 text-capitalize text-center">
            <div className="col-5 mx-auto col-lg-2">
                <img src={img} style={{width:'7rem', height:'7rem'}} className="img-fluid" alt="product"/>
            </div>
            <div className="col-5 mx-auto col-lg-2">
                <span className="d-lg-none">product: </span>{title}
            </div>
            <div className="col-5 mx-auto col-lg-2">
                <span className="d-lg-none">price </span> $ {price}
            </div>
            <div className="col-5 mx-auto col-lg-2 my-2 my-lg-2">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={() => decrement(item_id, quantity)}> - </span>
                        <span className="btn btn-black mx-1" >{quantity}</span>
                        <span className="btn btn-black mx-1" onClick={() => increment(item_id)}> + </span>
                    </div>
                </div>
            </div>
            <div className="col-5 mx-auto col-lg-2">
                <div className="cart-icon" onClick={()=> removeItem(item_id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className="col-5 mx-auto col-lg-2">
                <span className="d-lg-none">price </span><strong>item total: ${quantity * price} </strong>
            </div>
        </div>
    )
}
