import React from 'react';
import './App.css'

//COMPONETS
import Header from './componets/Header/Header';
import { Navbar } from './componets/NavBar/Navbar';
import CardWidget from './componets/CardWidget/CardWidget';


function App() {
        const tituloDelEncabezado = 'Mi Aplicación React';

        return (
          <div>
            <Header titulo={tituloDelEncabezado} />
          </div>
        );
      }


      
export default App;
