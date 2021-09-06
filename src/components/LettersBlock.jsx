import React from 'react';
import image from '../assets/letters/letters_1.jpeg';

const LettersBlock = () => {
  return (
    <div className="letters-block">
      <div className="letters-photo">
        <img src={image} alt="Письмо благодарности" className="letters__img" />
        <div className="letters-hide">
          <p className="letters-hide__text"><span>Благодарственные письма</span> о нашей работе </p>
        </div>
      </div>
    </div>
  )
}

export default LettersBlock;