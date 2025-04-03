import { useState } from 'react';
import "../styles/kitchenOrders.css"

function KitchenOrder({ item }) {

    const updateOrder = async () => {
        try {
        const response = await fetch(`http://localhost:3000/orders/update/${item.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        });

        } catch (error) {
        console.error('Erreur réseau:', error);
        }
    }
    return (
    <div className='menu-item'>
        <p className='image'>{item.product_image}</p>
        <div className='product'>
            <h3>Commande de {item.user_name}</h3>
            <h4>1x {item.product_name}</h4>
            <div className='buttons'>
                <button className='ready-btn' onClick={() => updateOrder()}>Prête !</button>
                <button className='cancel-btn'>Annuler la commande</button>
            </div>
        </div>
    </div>
    );
    }
export default KitchenOrder;