import Logo from '../svg/logo.svg';
import '../css/Nav.css';

const Nav = () => {
  return (
    <nav className='nav'>
      <ul className='list-links'>
        <li className='link-container' id='logo-container'>
          <img id='logo' src={Logo} alt='Cat logo'/>
          <button>Início</button>
        </li>
        <li className='link-container'><button href='#'>Sobre</button></li>
        <li className='link-container'><button href='#'>Fotos</button></li>
        <li className='link-container'><button href='#'>Contato</button></li>
      </ul>
    </nav>
  );
};

export default Nav;
