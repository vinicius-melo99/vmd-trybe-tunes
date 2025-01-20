import { ChangeEvent, FormEvent, useState } from 'react';
import { InputForm } from './styles';

const ArtistInput = () => {
  const [artistName, setArtistName] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
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
      />
      <button>Procurar</button>
    </InputForm>
  );
};

export default ArtistInput;
