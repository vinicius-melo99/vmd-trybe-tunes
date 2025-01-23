import { AlbumsContainerType } from '../../types';
import { AlbumCard, Albums } from './styles';

const AlbumsContainer = ({ albums, isLoading }: AlbumsContainerType) => {
  return (
    <Albums>
      {!isLoading
        ? albums.map((album) => (
            <AlbumCard key={album.collectionId}>
              <img src={album.artworkUrl100} />
              <h3>{album.collectionName}</h3>
              <p>{album.artistName}</p>
            </AlbumCard>
          ))
        : 'Carregando...'}
    </Albums>
  );
};

export default AlbumsContainer;
