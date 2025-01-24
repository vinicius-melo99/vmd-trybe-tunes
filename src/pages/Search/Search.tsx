import { PageContainer } from './styles';
import SideMenu from '../../components/SideMenu/SideMenu';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import PageHeader from '../../components/PageHeader/PageHeader';
import ArtistInput from '../../components/ArtistInput/ArtistInput';
import { useEffect, useState } from 'react';
import { AlbumType } from '../../types';
import AlbumsContainer from '../../components/AlbumsContainer/AlbumsContainer';
import { getAlbumsFromLS, setAlbumsToLS } from '../../funcs';

const Search = () => {
  const [albums, setAlbums] = useState<AlbumType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const albumsFromLS = getAlbumsFromLS();
    if (albumsFromLS.length) {
      setAlbums(albumsFromLS);
    }
  }, []);

  const getAlbums = (albums: AlbumType[]) => {
    setAlbumsToLS(albums);
    setAlbums(albums);
  };

  const toggleLoading = (isLoading: boolean) => {
    setIsLoading(isLoading);
  };

  return (
    <PageContainer>
      <SideMenu />
      <ContentContainer>
        <PageHeader>
          <ArtistInput getAlbums={getAlbums} toggleLoading={toggleLoading} />
        </PageHeader>
        <AlbumsContainer albums={albums} isLoading={isLoading} />
      </ContentContainer>
    </PageContainer>
  );
};

export default Search;
