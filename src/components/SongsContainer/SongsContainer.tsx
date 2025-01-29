import { SyntheticEvent, useEffect, useState } from 'react';
import { SongsContainerType, SongType } from '../../types';
import {
  AlbumPictureContainer,
  AlbumSongsContainer,
  FavoriteBtn,
  Picture,
  Songs,
} from './styles';
import {
  addMusicToFavorites,
  checkIfIsFavorite,
  getMusicsFromAPI,
  getMusicsFromFavorites,
  removeMusicFromFavorites,
} from '../../funcs';
import Swal from 'sweetalert2';
import { MdFavorite } from 'react-icons/md';
import { MdFavoriteBorder } from 'react-icons/md';

const SongsContainer = ({ album }: SongsContainerType) => {
  const [songs, setSongs] = useState<SongType[]>([]);
  const [favorites, setFavorites] = useState<SongType[]>([]);
  const [currentPlaying, setCurrentPlaying] = useState<HTMLAudioElement>();

  useEffect(() => {
    const getSongs = async () => {
      try {
        if (album) {
          const albumId = album.collectionId.toString();
          const response = await getMusicsFromAPI(albumId);
          setSongs(response);
        }
      } catch {
        Swal.fire({
          icon: 'error',
          title: 'Ooops..',
          text: '500: fail to fetch',
          timerProgressBar: true,
          timer: 2000,
        });
      }
    };

    getSongs();
  }, [album]);

  useEffect(() => {
    const favoriteSongs = getMusicsFromFavorites();

    if (favoriteSongs) setFavorites(favoriteSongs);
  }, []);

  const handlePlay = (e: SyntheticEvent<HTMLAudioElement>) => {
    const audioPlayed = e.target as HTMLAudioElement;

    if (currentPlaying && currentPlaying !== audioPlayed) {
      currentPlaying.pause();
      currentPlaying.currentTime = 0;

      return setCurrentPlaying(audioPlayed);
    }

    setCurrentPlaying(audioPlayed);
  };

  const handleFavorite = (trackId: number) => {
    const songToFavorite: SongType = songs.find(
      (song) => song.trackId === trackId
    ) as SongType;

    const alreadyFavorited = checkIfIsFavorite(trackId);

    if (alreadyFavorited) {
      const newFavorites = removeMusicFromFavorites(trackId);

      return setFavorites(newFavorites);
    }

    const newFavorites = addMusicToFavorites(songToFavorite);
    setFavorites(newFavorites);
  };

  const handleTimeUpdate = (e: SyntheticEvent<HTMLAudioElement>) => {
    const audioPlaying = e.target as HTMLAudioElement;
    const currentTime = audioPlaying.currentTime;
    const duration = audioPlaying.duration;

    if (currentTime === duration) audioPlaying.currentTime = 0;
  };

  return (
    <Songs>
      <AlbumPictureContainer>
        <Picture src={album?.artworkUrl100} alt={album?.collectionName} />
      </AlbumPictureContainer>
      <AlbumSongsContainer>
        {songs.map(({ previewUrl, trackId, trackName }) => (
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
      </AlbumSongsContainer>
    </Songs>
  );
};

export default SongsContainer;
