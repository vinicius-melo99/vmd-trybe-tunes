import { useNavigate } from 'react-router-dom';
import { AlbumsContainerType, AlbumType } from '../../types';
import { AlbumCard, Albums } from './styles';
import loading from '../../assets/loading64.png';
import { useEffect, useRef, useState } from 'react';

const AlbumsContainer = ({ albums, isLoading }: AlbumsContainerType) => {
  const [albumsList, setAlbumsList] = useState<AlbumType[]>([]);
  const navigate = useNavigate();
  const scrollableSection = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setAlbumsList(albums);
  }, [albums]);

  useEffect(() => {
    const scrollYPositionJSON: string | null = localStorage.getItem(
      'AlbumsContainerScrollPosition'
    );

    if (scrollYPositionJSON && scrollableSection.current) {
      const scrollYPosition: number = JSON.parse(scrollYPositionJSON);
      scrollableSection.current.scrollTo({
        top: scrollYPosition,
        behavior: 'smooth',
      });
    }
  });

  const handleClick = (albumId: number) => {
    navigate(`/album/${albumId}`);
  };

  const handleScroll = () => {
    if (scrollableSection.current) {
      const scrollYPosition: number = scrollableSection.current.scrollTop;
      const scrollYPositionJSON: string = JSON.stringify(scrollYPosition);

      localStorage.setItem(
        'AlbumsContainerScrollPosition',
        scrollYPositionJSON
      );
    }
  };

  return (
    <Albums ref={scrollableSection} onScroll={handleScroll}>
      {!isLoading ? (
        albumsList.map((album) => (
          <AlbumCard
            key={album.collectionId}
            onClick={() => handleClick(album.collectionId)}
          >
            <img src={album.artworkUrl100} />
            <h3>{album.collectionName}</h3>
            <p>{album.artistName}</p>
          </AlbumCard>
        ))
      ) : (
        <img src={loading} alt="Carregando" />
      )}
    </Albums>
  );
};

export default AlbumsContainer;
