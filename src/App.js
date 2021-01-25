import React, { useState } from 'react';
//styles
import './styles/app.scss';
//components
import Player from './components/Player';
import Song from './components/Song';
import Library from './components/Library';

//Import Util
import data from './util';

function App() {
  //State
  // eslint-disable-next-line
  const [songs, setSongs] = useState(data());
  // eslint-disable-next-line
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className='App'>
      <Song currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
      <Library songs={songs} setCurrentSong={setCurrentSong}/>
    </div>
  );
}

export default App;
