import { useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAlbumImage, napster } from '../util';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';
import PlayerProgressBar from './PlayerProgressBar';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.25);
  const audioPlayer = useRef();
  const [track, setTrack] = useState({});
  const trackId = useSelector(state => state.playingTrack);

  useEffect(() => {
    (async _ => {
      if (trackId === "") {
        return false;
      }
      setIsPlaying(false);
      const response = await napster.get(`/tracks/${trackId}`);
      setTrack(response.data?.tracks[0]);
      audioPlayer.current.src = response.data?.tracks[0]?.previewURL;
      setIsPlaying(true);
    })();
  }, [trackId]);

  const togglePlayPause = () => {
    setIsPlaying(e => !e);
  }

  useEffect(() => {
    if (isPlaying) {
      audioPlayer.current.play();
    } else {
      audioPlayer.current.pause();
    }
  }, [isPlaying]);

  const playerCurrentTimeUpdate = e => {
    const currentTime = e.target.currentTime;
    setCurrentTime(currentTime);
  }

  const changeCurrentTime = currentTime => {
    setCurrentTime(currentTime);
    audioPlayer.current.currentTime = currentTime;
  }

  const changeVolume = e => {
    const volume = e.target.value;
    setVolume(volume);
  }

  useEffect(() => {
    audioPlayer.current.volume = volume;
  }, [volume])

  return (
    <>
      <footer className={`fixed bottom-0 w-full ${trackId === "" ? "hidden" : ""}`}>
        <audio ref={audioPlayer} onTimeUpdate={playerCurrentTimeUpdate}>
        </audio>
        <input type="range" className="w-full -mb-4 hidden"  max={30} />
        <PlayerProgressBar value={currentTime} changeFn={changeCurrentTime}  />
        <div className='bg-gray-800'>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <img className="h-full p-2" src={getAlbumImage(track?.albumId)} alt="Album Cover" />
                <h3 className="text-white">{track?.name}</h3>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <button className='text-white z-50' onClick={togglePlayPause}>
                  {isPlaying ? (
                    <FontAwesomeIcon icon={faPause} />
                  ) : (
                    <FontAwesomeIcon icon={faPlay} />
                  )}
                </button>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <input className='w-24 cursor-pointer' type="range" value={volume} onChange={changeVolume} max={1} step={0.01} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Player