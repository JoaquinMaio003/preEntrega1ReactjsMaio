import React, { useState } from 'react';
import './App.css'

//COMPONETS
import Header from './componets/Header/Header';
import { Navbar } from './componets/NavBar/Navbar';
import CardWidget from './componets/CardWidget/CardWidget';
import Catalogo from './componets/Catalogo/Catalogo';
import DetallesProducto from './componets/DetallesProductos/DetallesProducto';


const App = () => {
  const tituloDelEncabezado = 'Mi Aplicación React';

  const [productos] = useState([
    { id: 1, nombre: 'Lavadora 3500', descripcion: 'Muy buena lavadora mejor que su anterior modelo al 2700 te viene con un valde para poner la ropa.', precio: 50 },
    { id: 2, nombre: 'Heladera zlatan', descripcion: 'Si no te enfria las cosas te hace una pirueta de 1.000.000 de dolares.', precio: 75 },
  ]);

  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const seleccionarProducto = producto => {
    setProductoSeleccionado(producto);
  };

  return (
    <div>
      <Header titulo={tituloDelEncabezado} />
      <Catalogo productos={productos} seleccionarProducto={seleccionarProducto} />
      <DetallesProducto producto={productoSeleccionado} />
    </div>
  );
};


      


      
export default App;
