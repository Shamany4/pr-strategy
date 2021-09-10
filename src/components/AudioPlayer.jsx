import React from 'react';

const AudioPlayer = () => {
  return (
    <iframe
      frameBorder="0"
      style={{ border: 'none' }}
      title="player"
      src="https://music.yandex.ru/iframe/#playlist/shamanyyy4/1000"
    >Слушайте <a
      href='https://music.yandex.ru/users/shamanyyy4/playlists/1000'>Player</a> — <a
        href='https://music.yandex.ru/users/shamanyyy4'>shamanyyy4</a> на Яндекс.Музыке
    </iframe>
  )
}

export default AudioPlayer;