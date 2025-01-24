import { useEffect, useState } from 'react';
import ContentContainer from '../../components/ContentContainer/ContentContainer';
import PageHeader from '../../components/PageHeader/PageHeader';
import SideMenu from '../../components/SideMenu/SideMenu';
import { PageContainer } from '../Search/styles';
import { AlbumType } from '../../types';
import { useParams } from 'react-router-dom';
import { getAlbumsFromLS } from '../../funcs';
import { AlbumHeaderContainer } from './styles';

const Album = () => {
  const [album, setAlbum] = useState<AlbumType>();
  const { id: albumId } = useParams();

  useEffect(() => {
    const albumsFromLS: AlbumType[] = getAlbumsFromLS();

    const filteredAlbum = albumsFromLS.find(
      ({ collectionId }) => collectionId === Number(albumId)
    );

    setAlbum(filteredAlbum);
  }, [albumId]);

  return (
    <PageContainer>
      <SideMenu />
      <ContentContainer>
        <PageHeader>
          <AlbumHeaderContainer>
            <div>
              <span>{album?.collectionName}</span>
              <span>{album?.artistName}</span>
            </div>
          </AlbumHeaderContainer>
        </PageHeader>
      </ContentContainer>
    </PageContainer>
  );
};

export default Album;
