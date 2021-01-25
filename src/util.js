export const playAudio =(isPlaying, audioRef)=>{
    //check if the song is playing
    if (isPlaying) {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          //wait moment and play
          playPromise.then((audio) => {
            audioRef.current.play();
          });
        }
      }
};

