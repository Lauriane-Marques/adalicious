import {React, useState, useEffect} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './../styles/menu.css'

import MenuItem from './MenuItem';

//const items = require('../data.json')

function Menu() {
  const location = useLocation();
  const navigate = useNavigate();
  
  const { firstname } = location.state || {};  
  
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/menu')
      .then(response => response.json())
      .then(data => setMenuItems(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);


  if (!firstname) {
    navigate('/');
    return null;
  }

  return (
    <div className='menu-container'>
        <h1>Adalicious 🥦</h1>
      <h3>Bonjour {firstname} !</h3>

      {menuItems.map((item) => (
        <MenuItem key={item.id} item={item} />))}
    </div>
  );
}

export default Menu;
