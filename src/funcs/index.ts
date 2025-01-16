export const createUser = (username: string) =>
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
