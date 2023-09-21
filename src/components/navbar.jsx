import React from 'react';
import CartWidget from './CartWidget';

function Navbar({parametro}) {
  return (
    <nav class='navbar'>
      
        <a href="/" class='boton'>Inicio</a>
        <a href="/acerca" class='boton'>Acerca de</a>
        <a href="/contacto" class='boton'>Contacto</a>
      <CartWidget saludo={parametro}/>
    </nav>
  );
}

export default Navbar;