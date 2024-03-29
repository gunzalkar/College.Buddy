import React from 'react'

export default function CartItem(item,value) {
    const{id,title,img,price,total,count} = item;
    const {increment,decrement,removeItem} = value
    return (
        <div>
            <div className="row my-1 text-capitalize text-center">
                <div className=" col-19 mx-auto col-lg-2">
                    <img src={img} style={{width:"5rem", height:"5rem"}} className="img-fluid" alt="product"/>

                </div>
                <div className="row my-1 text-capitalize text-center">
                    <span className="d-lg-none">product : </span>
                    {title}
                </div>
                <div className="row my-1 text-capitalize text-center">
                    <span className="d-lg-none">price : </span>
                    {price}
                </div>
        
            </div>
        </div>
    )
}
