import React from 'react'
import { useCart } from 'react-use-cart'
import PropTypes from 'prop-types';
import axios from 'axios'

const Cart = ({setData}) => {
    //  Destructure values from item variable
   const {
    isEmpty,
    totalUniqueItems,
    totalItems,  
    items,
    updateItemQuantity,
    removeItem,
  } = useCart();
  
  // create a function to delete from DB and UI
  const handleDelete = async id => { 
    try{
        const response = await axios.delete(`localhost:8080/delete/id/{id}`); 
        setData(response); 
        removeItem(id)
    }catch(e){
        console.log(e)
    }   
}

  
  if(isEmpty) return <h1>El carrito esta vacio</h1>    

    return (
        <section className="py-4 container">
            <div className="row justify-content-center">
                <div className="col-12">
                    <h5>Carrito ({totalUniqueItems}) Numero de articulos: ({totalItems})</h5>
                    <table className="table table-light table-hover m-0">
                        <tbody>
                        {items.map((item, index)=>(
                            <tr key={index}>
                                <td>
                                    <img style={{height: '6rem'}}/>
                                </td>
                                <td>{item.title}</td>
                                <td>{item.price}</td>
                                <td>Cantidad: ({item.quantity})</td>
                                <td>
                                    <button
                                        className="btn btn-info ms-2"
                                        onClick={()=> updateItemQuantity(item.id, item.quantity - 1)}
                                    >
                                        -
                                    </button>
                                    <button
                                        className="btn btn-info ms-2"
                                        onClick={()=> updateItemQuantity(item.id, item.quantity + 1)}
                                    >
                                        +                                       
                                    </button>
                                    <button
                                        className="btn btn-danger ms-2"
                                        onClick={()=> handleDelete(item.id)}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>    
        </section>
    )
}

export default Cart
