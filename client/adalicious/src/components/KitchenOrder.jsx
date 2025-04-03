import { useState } from 'react';
import "../styles/kitchenOrders.css"

function KitchenOrder({ item }) {

    const [isReady, setIsReady] = useState(false)
    const [isDeleted, setIsDeleted] = useState(false)

    const updateOrder = async () => {
        try {
            const response = await fetch(`http://localhost:3000/orders/update/${item.id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
            });

            if(response.ok){
            setIsReady(true)
            console.log("Commande mise à jour avec succès")
            }

        } catch (error) {
        console.error('Erreur réseau:', error);
        }
    }

    const deleteOrder = async () => {
        try {
            const response = await fetch(`http://localhost:3000/orders/delete/${item.id}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }
            })

            if(response.ok){
                setIsDeleted(true)
                console.log("Commande supprimée avec succès")
            }

        } catch (error){
            console.error("Erreur réseau:", error)
        }

    }

    if (isReady) {
        return null
      }
    
    if (isDeleted){
        return null
    }

    return (
    <div className='menu-item'>
        <p className='image'>{item.product_image}</p>
        <div className='product'>
            <h3>Commande #{item.id} pour {item.user_name}</h3>
            <h4>1x {item.product_name}</h4>
            <div className='buttons'>
                <button className='ready-btn' onClick={() => updateOrder()}>Prête !</button>
                <button className='cancel-btn' onClick={() => deleteOrder()}>Annuler la commande</button>
            </div>
        </div>
    </div>
    );
    }
export default KitchenOrder;