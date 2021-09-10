import React, {useState} from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

const LettersBlock = ({path}) => {
  const [isOpen, setIsOpen] = useState(false);
  const getUrlImage = () => {
    return require('../assets/letters/' + path);
  }
  return (
    <div className="letters-block">
      <div className="letters-photo" onClick={() => setIsOpen(true)}>
        <img src={getUrlImage().default} alt="Письмо благодарности" className="letters__img" />
      </div>
      {
        isOpen
          ?
          <Lightbox
            mainSrc={getUrlImage().default}
            onCloseRequest={() => setIsOpen(false)}
          />
          :
          null
      }
    </div>
  )
}

export default LettersBlock;