import { useEffect, useState } from 'react';
import { SongsContainerType, SongType } from '../../types';
import {
  AlbumPictureContainer,
  AlbumSongsContainer,
  Picture,
  Songs,
} from './styles';
import { getMusicsFromAPI } from '../../funcs';
import Swal from 'sweetalert2';

const SongsContainer = ({ album }: SongsContainerType) => {
  const [songs, setSongs] = useState<SongType[]>([]);

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

  return (
    <Songs>
      <AlbumPictureContainer>
        <Picture src={album?.artworkUrl100} alt={album?.collectionName} />
      </AlbumPictureContainer>
      <AlbumSongsContainer>
        {songs.map(({ previewUrl, trackId }) => (
          <audio key={trackId} controls>
            <source src={previewUrl} />
            Your browser does not support the audio element.
          </audio>
        ))}
      </AlbumSongsContainer>
    </Songs>
  );
};

export default SongsContainer;
