import React from 'react';

const AudioPlayer = ({ mobile }) => {
  return (
    <iframe frameBorder="0"
            style={{ border: 'none' }}
            title="The Business Pill"
            className={mobile ? 'm-iframe' : 'iframe'}
            src="https://music.yandex.ru/iframe/#playlist/im@follow-up.su/1000"
    >Слушайте
      <a
        href='https://music.yandex.ru/users/im@follow-up.su/playlists/1000'>The Business Pill</a> —
      <a
        href='https://music.yandex.ru/users/im@follow-up.su'>Игорь Малинин</a> на Яндекс.Музыке
    </iframe>
  )
}

export default AudioPlayer;