import React from 'react';
import {NavLink} from 'react-router-dom'
import ListaMedicamentoAno from '../listaAno/ListaMedicamentoAno';
import { useState } from 'react';

function NavBar() {
  const [isOpen,setIsOpen]=useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          aria-controls="navbar01"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={handleToggle}
        ><span className='text-white'>Menu</span>
        </button>
        <div className={`${isOpen ? 'show' : ''} collapse navbar-collapse`} id="navbar01">
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <NavLink to="/ListaMedicamentoAno" className="nav-link" onClick={handleToggle}>Lista por nome</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/BuscaCodigo" className="nav-link" onClick={handleToggle}>Busca por Código</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/ComparativoCredito" className="nav-link" onClick={handleToggle}>Comparativo</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;