import { SyntheticEvent, useEffect, useState } from 'react';
import { Favorites } from './styles';
import { SongType } from '../../types';
import { getMusicsFromFavorites, removeMusicFromFavorites } from '../../funcs';
import { FavoriteBtn } from '../SongsContainer/styles';
import { MdFavorite } from 'react-icons/md';
import { MdFavoriteBorder } from 'react-icons/md';

const FavoritesContainer = () => {
  const [favorites, setFavorites] = useState<SongType[]>([]);
  const [currentPlaying, setCurrentPlaying] = useState<HTMLAudioElement>();

  const handleFavorite = (trackId: number) => {
    const newFavorites = removeMusicFromFavorites(trackId);

    return setFavorites(newFavorites);
  };

  useEffect(() => {
    const favoritesFromLS = getMusicsFromFavorites();
    setFavorites(favoritesFromLS);
  }, []);

  const handlePlay = (e: SyntheticEvent<HTMLAudioElement>): void => {
    const audioPlayed = e.target as HTMLAudioElement;

    if (currentPlaying && currentPlaying !== audioPlayed) {
      currentPlaying.pause();
      currentPlaying.currentTime = 0;

      return setCurrentPlaying(audioPlayed);
    }

    setCurrentPlaying(audioPlayed);
  };

  const handleTimeUpdate = (e: SyntheticEvent<HTMLAudioElement>) => {
    const audioPlaying = e.target as HTMLAudioElement;
    const currentTime = audioPlaying.currentTime;
    const duration = audioPlaying.duration;

    if (currentTime === duration) audioPlaying.currentTime = 0;
  };

  return (
    <Favorites>
      {favorites.map(({ previewUrl, trackId, trackName }) => (
        <div key={trackId}>
          <p>{trackName}</p>
          <audio controls onPlay={handlePlay} onTimeUpdate={handleTimeUpdate}>
            <source src={previewUrl} />
            Your browser does not support the audio element.
          </audio>
          <FavoriteBtn onClick={() => handleFavorite(trackId)}>
            {favorites?.find((song) => song.trackId === trackId) ? (
              <MdFavorite color="red" />
            ) : (
              <MdFavoriteBorder />
            )}
          </FavoriteBtn>
        </div>
      ))}
    </Favorites>
  );
};

export default FavoritesContainer;
