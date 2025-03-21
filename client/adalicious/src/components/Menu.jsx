import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './../styles/menu.css'

import MenuItem from './MenuItem';

import {items} from './../data'

function Menu() {
  const location = useLocation();
  const navigate = useNavigate();

  const { firstname } = location.state || {};  


  if (!firstname) {
    navigate('/');
    return null;
  }

  return (
    <div className='menu-container'>
        <h1>Adalicious 🥦</h1>
      <h3>Bonjour {firstname} !</h3>

      {items.map((item) => (
        <MenuItem key={item.id} item={item} />))}
    </div>
  );
}

export default Menu;
