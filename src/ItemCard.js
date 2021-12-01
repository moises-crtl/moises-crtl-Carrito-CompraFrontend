import React from 'react'
import { useCart } from 'react-use-cart'
import axios from 'axios'
import PropTypes from 'prop-types';


const ItemCard = ({item, setData}) => {
    
    // This function will add the items to the library  
    const {addItem} = useCart();

    //  Destructure values from item variable
   const {title, desc, price} = item;

   //post request
   const handleSubmit = async data => { 
        try{
            const response = await axios.post('localhost:8080/created', data); 
            setData(response); 
            addItem(data);
        }catch(e){
            console.log(e);
        }   
   }

    return (
        <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
             <div className="card">
                {/* <img className="card-img-top"  alt="Card image cap" /> */}
                <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h5 className="card-title">{price}$</h5>
                <p className="card-text">{desc}</p>
                <button 
                    className="btn btn-warning"
                    onClick={()=> handleSubmit(item)}
                    >Añadir al carrito</button>
                </div>
            </div>
        </div>             

    )
} 
ItemCard.propTypes = {
    item: PropTypes.array.isRequired
}

export default ItemCard
