import { ChangeEvent, FormEvent, useRef, useState } from 'react';
import { InputForm } from './styles';
import { searchAlbumsAPI } from '../../funcs';
import { ArtistInputType } from '../../types';
import Swal from 'sweetalert2';

const ArtistInput = ({ getAlbums, toggleLoading }: ArtistInputType) => {
  const [artistName, setArtistName] = useState('');
  const artistInput = useRef<HTMLInputElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toggleLoading(true);
    try {
      const albums = await searchAlbumsAPI(artistName);
      setArtistName('');
      artistInput.current?.focus();
      getAlbums(albums);
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${e}`,
        timer: 3500,
        timerProgressBar: true,
      });
    } finally {
      toggleLoading(false);
    }
  };

  const handleInput = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setArtistName(value);
  };

  return (
    <InputForm onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nome do artista"
        autoFocus
        onChange={handleInput}
        value={artistName}
        ref={artistInput}
      />
      <button>Procurar</button>
    </InputForm>
  );
};

export default ArtistInput;
