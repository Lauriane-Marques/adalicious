import { useNavigate } from 'react-router-dom';
import "./../styles/menuItem.css"

function MenuItem({ item }) {
    const navigate = useNavigate();

    return (
    <div className='menu-item'>
        <p className='image'>{item.image}</p>
        <div className='product'>
          <h3>{item.plate}</h3>
          <p>{item.description}</p>
          <button>Commander</button>
        </div>
    </div>
    );
}

export default MenuItem;