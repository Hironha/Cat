import chillingCat from '../svg/chilling-cat.svg';
import Paw from '../svg/cat-paw.svg';
import '../css/Header.css';

const Header = () => {
  return (
    <header className='header'>
      <h1 id='titulo'>Minha Gatinha<span id='laranja'>Laranja <img id='cat-paw' src={Paw} alt='cat-paw'/></span></h1>
      <img id='gato-preguica' src={chillingCat} alt='Gato tirando uma preguiça'/>
    </header>
  );
};

export default Header;
