import { useEffect } from 'react';
import '../css/Modal.css';
const Modal = ({ source, alt, setModal }) => {
  //effect on mount
  useEffect(() => {
    //anonymous function
    (() => {
      const img = document.getElementById('modal-img');
      const proporcao = img.naturalHeight / img.naturalWidth;
      if(img.naturalHeight > window.innerHeight && img.naturalWidth > window.innerWidth){
        img.height = window.innerHeight - 30;
        img.width = window.innerWidth - 30;
      }else if(img.naturalHeight > window.innerHeight && img.naturalWidth < window.innerWidth){
        img.height = window.innerHeight - 30;
        img.width = img.naturalWidth;
      }else if(img.naturalHeight < window.innerHeight && img.naturalWidth > window.innerWidth){
        img.width = window.innerWidth - 60;
        img.height = img.naturalHeight;
      }else{
        img.width = img.naturalWidth;
        img.height = img.naturalHeight;
      }
    })();
  }, []);
  return (
    <div className='modal-container'>
      <button onClick={
        () => {
          setModal(false);
        }
      }>
      <svg id='button-icon' xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-x-circle" viewBox="0 0 16 16">
        <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
      </button>
      <img id='modal-img'src={source} alt={alt} />
    </div>
  );
};

export default  Modal;
