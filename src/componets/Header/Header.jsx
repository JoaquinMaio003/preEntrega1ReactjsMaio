import './Header.css';
import CardWidget from '../CardWidget/CardWidget';

const Header = () => {
    return (
          <header className='Header'>
      <h1>Como no Hacer un Header</h1>
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/acerca">Acerca de</a></li>
          <li><a href="/contacto">Contacto</a></li>
          <li><CardWidget/></li>
        </ul>
      </nav>
    </header>
    );
}

export default Header;