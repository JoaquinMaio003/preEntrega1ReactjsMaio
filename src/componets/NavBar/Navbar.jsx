import CardWidget from "../CardWidget/CardWidget"

export const Navbar = () => {
  return (
    <nav>
     <h1>Como no Hacer un Header</h1>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/acerca">Acerca de</a></li>
        <li><a href="/contacto">Contacto</a></li>
        <CardWidget></CardWidget>
      </ul>
    </nav>
  );
}
