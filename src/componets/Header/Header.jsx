import { Navbar } from '../NavBar/Navbar';
import './Header.css';

function Header(props) {
  return (
    <header><Navbar>
      <h1>{props.titulo}</h1>
      {""}
      </Navbar>
    </header>
  );
}

export default Header;



