import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

function OrderHistory(){

    const [history, setHistory] = useState([]);
    const navigate = useNavigate(); 

  
    useEffect(() => {
      fetch('http://localhost:3000/history')
        .then(response => response.json())
        .then(data => setHistory(data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  

  
    return (
      <div className='menu-container'>
        <button className="kitchen-btn" onClick={()=> navigate('/kitchen')}>Interface cuisine 🍴</button>
          <h1>Adalicious 🥦</h1>
        <h3>Historique des commandes</h3>
        <ul>
        {history.map((item) => (
          <li>Commande #{item.order_id} passée par {item.user_name} : {item.product_name}</li>))}
          </ul>
      </div>
    );
  }
  
  export default OrderHistory;