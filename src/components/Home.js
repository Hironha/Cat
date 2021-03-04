import '../css/Home.css';
import Nina from '../img/nina-dormindo.jpeg';
import { useState } from 'react';
import Modal from './Modal';

const Home = () => {
  const [source, setSource] = useState(null);
  const [alt, setAlt] = useState(null);
  const [modal, setModal] = useState(false);
  return (
    <div className='content-container'>
      <fieldset className='fieldset'>
        <legend className='legenda'><h2>A Gata Meiga<br></br><span id='nina'><i>Nina</i></span></h2></legend>
        <div className='nina-review'>
          <picture className='nina-img-container'>
            <img
              src={Nina}
              alt='Nina dormindo'
              id='nina-img'
              onClick ={() => {
                setSource(document.getElementById('nina-img').src);
                setAlt(document.getElementById('nina-img').alt);
                setModal(true);
              }}/>
              <legend><i>Nina dormindo com carinha fofa</i></legend>
          </picture>
          <article className='nina-descricao'>
            <section className='nina-descricao-secao'>
              <h2 className='nina-historia-titulo'>Nina</h2>
              <p className='nina-historia-texto'>Nina é uma gatinha doméstica comum com as cores laranja e branco. Sua personalidade é meiga, sendo tanto boazinha quanto brincalhona, além de um pouco preguiçosa.</p>
              <p className='nina-historia-texto'>Ninguém sabe sua origem, se tinha dono ou se era uma cria de rua. No entanto, certo dia ela apareceu em casa, com fome, quando ainda pequena. Ao miar e fazer graças, mostrando toda sua fofura, nós não conseguimos resistir e a alimentamos. De barriga cheia e no conforto de um lar, ela caiu no sono. Mais uma vez pegos pela sua fofura, tomamos a decisão de adotá-la.</p>
            </section>
            <hr></hr>
            <section className='nina-descricao-secao'>
              <h2>Preferências</h2>
              <p>Assim como todo ser, Nina possui seus gostos e preferências, como mostrado na lista abaixo.</p>
              <ul>
                <li>Patê de Carne;</li>
                <li>Água de torneira;</li>
                <li>Caçar bichos que encontra pelo jardim;</li>
                <li>Dormir (provavelmente o que ela mais faz);</li>
              </ul>
            </section>
          </article>
        </div>
      </fieldset>
      {modal && <Modal source={source} alt={alt} setModal={setModal}/>}
    </div>
  );
};

export default Home;
