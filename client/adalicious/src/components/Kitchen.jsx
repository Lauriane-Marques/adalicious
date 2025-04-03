import {React, useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './../styles/kitchen.css'

import KitchenOrder from './KitchenOrder';

function Kitchen() {
  const [kitchenOrders, setKitchenOrders] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch('http://localhost:3000/orders')
      .then(response => response.json())
      .then(data => setKitchenOrders(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

 

  return (
    <div className='orders-container'>
      <button className="user-btn" onClick={()=> navigate('/')}>Interface utilisateur 🥦</button>
      <button className="history-btn" onClick={()=> navigate('/history')}>Historique des commandes 📝</button>
        <h1>Adalicious 🥦</h1>
      <h2 className="kitchen-view">Vue Cuisine</h2>

      {kitchenOrders.map((item) => (
        <KitchenOrder key={item.id} item={item}/>))}
    </div>
  );
}

export default Kitchen;
