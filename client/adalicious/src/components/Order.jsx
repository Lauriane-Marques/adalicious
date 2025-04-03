import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import "../styles/order.css"

function Order() {
  const { id } = useParams();  // Récupérer l'ID de la commande dans l'URL
  const [order, setOrder] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      const response = await fetch(`http://localhost:3000/orders/${id}`);
      if (response.ok) {
        const orderData = await response.json();
        //console.log(orderData)
        setOrder(orderData);
      } else {
        console.error('Commande non trouvée');
      }
    };

    fetchOrder();
    console.log(order)
  }, [id]);

  if (!order) {
    return <p>Chargement de la commande...</p>;
  }

  return (
    <div className='order-container'>
      <h1>Adalicious 🥦</h1>
      <div className='order-header'>
        <h2 className='order-num'>Commande #{order.id}</h2>
        <h3>Merci pour ta commande {order.user_name}!</h3>
        <h3>Suivi :</h3>
      </div>
        <div className='order-info'>
          <p>Status : {order.status}</p>
          <p className='order-image'>{order.product_image}</p>
          <h2>{order.product_name} x1</h2>
        </div>
    </div>
  );
}

export default Order;
