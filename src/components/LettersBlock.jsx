import React, {useState} from 'react';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import image from '../assets/letters/letters_1.jpeg';

const LettersBlock = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="letters-block">
      <div className="letters-photo" onClick={() => setIsOpen(true)}>
        <img src={image} alt="Письмо благодарности" className="letters__img" />
      </div>
      {
        isOpen
          ?
          <Lightbox
            mainSrc={image}
            onCloseRequest={() => setIsOpen(false)}
          />
          :
          null
      }
    </div>
  )
}

export default LettersBlock;