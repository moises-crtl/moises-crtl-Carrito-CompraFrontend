import 'bootstrap/dist/css/bootstrap.css';
import React,{useEffect, useState} from 'react'
import Hello from './Hello';
import { CartProvider } from 'react-use-cart'
import Cart from './Cart';

function App() {
  const [data, setData] = useState([])
  // Here goes the http request 
  //I should store the value of the response inside the state 
    const cargarDatos = async () => {
        try{ 
            const response = await axios('localhost:8080/list');
            setData(response);
        }catch(e){ 
            console.log(e);
        }

    }
  // as soon as the component loads a get request should be executed
    useEffect(() => {
        if(!data) cargarDatos()
        
    }, [data]);

  return (
    <CartProvider>
      <Hello 
        data={data}
        setData={setData}
      />
      <Cart 
        data={data}
        setData={setData}
      />
    </CartProvider>
  );
}

export default App;
