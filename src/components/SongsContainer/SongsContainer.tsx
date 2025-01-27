import { SongsContainerType } from '../../types';
import {
  AlbumPictureContainer,
  AlbumSongsContainer,
  Picture,
  Songs,
} from './styles';

const SongsContainer = ({ album }: SongsContainerType) => {
  return (
    <Songs>
      <AlbumPictureContainer>
        <Picture src={album?.artworkUrl100} alt={album?.collectionName} />
      </AlbumPictureContainer>
      <AlbumSongsContainer></AlbumSongsContainer>
    </Songs>
  );
};

export default SongsContainer;
