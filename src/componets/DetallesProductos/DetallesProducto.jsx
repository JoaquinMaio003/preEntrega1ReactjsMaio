import React from 'react';
import './DetallesProducto.css';

const DetallesProducto = ({ producto }) => {
  return (
    <div className="detalles-container">
      <h2 className="detalles-title">Detalles del Producto</h2>
      <div className="product-details">
        {producto ? (
          <div>
            <h3>{producto.nombre}</h3>
            <p>{producto.descripcion}</p>
            <p className="product-details-price">Precio: ${producto.precio}</p>
          </div>
        ) : (
          <p>Selecciona un producto para ver los detalles.</p>
        )}
      </div>
    </div>
  );
};

export default DetallesProducto;