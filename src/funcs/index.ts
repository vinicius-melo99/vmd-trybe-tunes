import { AlbumType, UserInformationType } from '../types';

export const createUser = (username: string): Promise<string> =>
  new Promise((resolve, reject) => {
    const min = 1;
    const max = 100000;

    const randomNumber = Math.floor(Math.random() * (max - min)) + min;

    setTimeout(() => {
      if (randomNumber > 100) {
        const newUser = {
          username,
        };
        localStorage.setItem('userInformation', JSON.stringify(newUser));
        resolve('Usuário criado com sucesso.');
      } else {
        reject('Erro ao criar usuário: cheque sua conexão e tente novamente');
      }
    }, 1500);
  });

export const getUser = (): Promise<UserInformationType> =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const data = localStorage.getItem('userInformation');
        if (data) {
          const userInformation: UserInformationType = JSON.parse(data);
          resolve(userInformation as UserInformationType);
        } else {
          throw new Error(
            '404: não foi possível recuperar as informaçãoes de usuário'
          );
        }
      } catch (e) {
        reject(e);
      }
    }, 1500);
  });

export const searchAlbumsAPI = async (artist: string): Promise<AlbumType[]> => {
  const artistNameURL = encodeURI(artist).replace('%20', '+');

  const getAlbumsAPI = `https://itunes.apple.com/search?entity=album&term=${artistNameURL}`;

  const data = await fetch(getAlbumsAPI);

  const { results }: { results: AlbumType[] } = await data.json();
  const response = results.map((artistInfo) => ({ ...artistInfo }));

  return response;
};
