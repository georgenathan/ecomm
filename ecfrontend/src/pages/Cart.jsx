import React from 'react'
import { useCart } from 'react-use-cart';
import Navbar from '../components/Navbar/Navbar';

const Cart = () => {
        const { 
            isEmpty, 
            totalUniqueItems,
            items,
            totalItems,
            cartTotal,
            updateItemQuantity,
            removeItem,
            emptyCart,
        } = useCart();
        if (isEmpty) return <h1 className='text-center'> Your Cart Is Empty</h1> 
  return (
    <div>
    <div>
    <Navbar />
         <section className='p-4 container'>
            <div className='row justify-content-center'>
                <div className='col-12'>
                    <h5>Cart ({totalUniqueItems}) Total Items: ({totalItems})</h5>
                    <table className='table table-light table-hover m-0'>
                        <tbody>
                            {items.map((item, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>
                                            <img src={item.img} style={{height: '6rem'}} />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>QTY {item.quantity}</td>
                                        <td>
                                            <button 
                                                className='btn btn-info ms-2'
                                                onClick={()=> updateItemQuantity(item.id,item.quantity -1)}>-</button>
                                            <button 
                                                className='btn btn-info ms-2'
                                                onClick={()=> updateItemQuantity(item.id,item.quantity +1)}>+</button>
                                            <button 
                                                className='btn btn-danger ms-2'
                                                onClick={()=> removeItem(item.id)}
                                                >Remove Items</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                    <div className='col-auto m-4'>
                        <h2>Total Items: ({totalItems})</h2>
                    </div>  
                    <div className='col-auto m-4'>
                        <h2>Total Price: $({cartTotal})</h2>
                    </div>  
                    <button 
                        className='btn btn-danger ms-2 m-4'
                        onClick={()=> emptyCart()}>Clear Cart</button>
                    <button className='btn btn-primary ms-2 m-4'>Submit Order</button>
                </div> 
                     
            </div>
        </section>
    </div>
    </div>
  )
}

export default Cart