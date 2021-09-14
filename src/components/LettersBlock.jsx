import React  from 'react';

const LettersBlock = ({ path, changeOpen, index, changeIndex }) => {


  const getUrlImage = () => {
    return require('../assets/letters/' + path);
  }


  return (
    <div className="letters-block">
      <div className="letters-photo"
           onClick={() => {
             changeOpen();
             changeIndex(index);
           }}
      >
        <img src={getUrlImage().default} alt="Письмо благодарности" className="letters__img" />
      </div>
    </div>
  )
}

export default LettersBlock;