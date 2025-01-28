import { useEffect, useState } from 'react';
import { SongsContainerType, SongType } from '../../types';
import {
  AlbumPictureContainer,
  AlbumSongsContainer,
  FavoriteBtn,
  Picture,
  Songs,
} from './styles';
import { getMusicsFromAPI } from '../../funcs';
import Swal from 'sweetalert2';
import { MdFavorite } from 'react-icons/md';
import { MdFavoriteBorder } from 'react-icons/md';

const SongsContainer = ({ album }: SongsContainerType) => {
  const [songs, setSongs] = useState<SongType[]>([]);
  const [favorites, setFavorites] = useState<SongType[]>([]);

  useEffect(() => {
    if (album) {
      const albumId = album.collectionId.toString();
      getMusicsFromAPI(albumId)
        .then((data) => setSongs(data))
        .catch(() => {
          return Swal.fire({
            icon: 'error',
            title: 'Ooops..',
            text: '500: fail to fetch',
            timerProgressBar: true,
            timer: 2000,
          });
        });
    }
  }, [album]);

  useEffect(() => {
    if (!localStorage.getItem('favoriteSongs')) {
      return localStorage.setItem('favoriteSongs', JSON.stringify([]));
    }

    const favoriteSongs = localStorage.getItem('favoriteSongs');
    if (favoriteSongs) {
      setFavorites(JSON.parse(favoriteSongs));
    }
  }, []);

  const handleFavorite = (trackId: number) => {
    const songToFavorite: SongType = songs.find(
      (song) => song.trackId === trackId
    ) as SongType;

    const favoriteSongsLSJSON = localStorage.getItem('favoriteSongs');
    if (favoriteSongsLSJSON) {
      const favoriteSongsLS: SongType[] = JSON.parse(favoriteSongsLSJSON);

      const alreadyFavorited = favoriteSongsLS.find(
        (song) => song.trackId === trackId
      );

      if (alreadyFavorited) {
        const updatedFavorites = favoriteSongsLS.filter(
          (song) => song.trackId !== trackId
        );

        const newFavorites = [...updatedFavorites];
        localStorage.setItem('favoriteSongs', JSON.stringify(newFavorites));
        return setFavorites(newFavorites);
      }

      const newFavorites = [...favoriteSongsLS, songToFavorite];

      localStorage.setItem('favoriteSongs', JSON.stringify(newFavorites));
      setFavorites(newFavorites);
    }
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
            <audio controls>
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
