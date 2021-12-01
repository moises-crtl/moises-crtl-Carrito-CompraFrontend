import React from 'react'
import ItemCard from './ItemCard'
import PropTypes from 'prop-types';

// import data from './data'

const Hello = ({data, setData}) => { 
    return (
        <>
           <h1 className="text-center mt-3 ">Productos</h1>
           <section className="py-4 container">
               <div className="row">
                   
                  {data.map((item) =>(
                       <ItemCard
                            key={item.id} 
                            item={item}
                            setData={setData}
                        />
                  ))}
               </div>
           </section> 
        </>
    )
}
hello.propTypes = {
    item: PropTypes.data.isRequired, 
}
export default Hello
