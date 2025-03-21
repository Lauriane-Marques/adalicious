import { useNavigate } from 'react-router-dom';
import "./../styles/menuItem.css"


function Card({ product }) {
    const navigate = useNavigate();

    return (
        <div className="container-card transition-transform duration-300 ease-in-out transform cursor-pointer hover:scale-105 hover:shadow-lg">

            {/* <div className="image-container">
                <img className="img-card"/>
                <button className="shopping-cart-button" onClick={(e) => {
                    e.stopPropagation(); // Empêche la propagation du clic vers le container
                    navigate('/panier');
                }}></button>
            </div>

            <div className="description-card" onClick={() => navigate(`/product/${product.id}`)}>
                <div className="container-name-price-card">
                    <p className="name-card">{product.name}</p>
                    <p className="price-card">{product.price}€</p>
                </div>
                <div className='description-card-details'>
                <p className="description-text-card">{product.description}</p>
                </div>
            </div> */}
        </div>
    );
}

export default Card;
