import { useNavigate } from 'react-router-dom';
import "../styles/menuItem.css"

function MenuItem({ item, firstname }) {
  const navigate = useNavigate();
  
  const handleOrder = async () => {
    const orderData = {
      product_name: item.plate, 
      user_name: firstname,
      product_image: item.image
    };
    
    try {
      const response = await fetch('http://localhost:3000/orders/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(orderData),
      });
      
      if (response.ok) {
        const newOrder = await response.json();
        navigate(`/orders/${newOrder.id}`);
      } else {
        const errorData = await response.json().catch(() => ({}));
        console.error('Erreur lors de la création de la commande:', errorData);
      }
    } catch (error) {
      console.error('Erreur réseau:', error);
    }
  }
  
  return (
    <div className='menu-item'>
      <p className='image'>{item.image}</p>
      <div className='product'>
        <h3>{item.plate}</h3>
        <p>{item.description}</p>
        <button onClick={handleOrder}>Commander</button>
      </div>
    </div>
  );
}

export default MenuItem;
