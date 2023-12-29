import React from 'react';
import './Catalogo.css';


const Catalogo = ({ productos, seleccionarProducto }) => {
  return (
    <div className="catalogo-container">
      <h2 className="catalogo-title">Catálogo de Productos</h2>
      <ul className="product-list">
        {productos.map(producto => (
          <li key={producto.id} className="product-item">
            <span className="product-name">{producto.nombre}</span>
            <button className="product-button" onClick={() => seleccionarProducto(producto)}>
              Ver Detalles
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};


  


export default Catalogo;