import { ChangeEvent, useEffect, useState } from 'react';
import { LoginPage, LoginContainer, Logo, InputContainer } from './styles';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../funcs';
import NameInput from '../../components/NameInput/NameInput';
import Button from '../../components/Button/Button';
import Swal from 'sweetalert2';

const Login = () => {
  const [name, setName] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const userInformation = localStorage.getItem('userInformation');

    if (userInformation) navigate('/search');
  }, [navigate]);

  useEffect(() => {
    const minCharacters = name.length >= 3;
    setIsDisabled(!minCharacters);
  }, [name]);

  const handleInput = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setName(value);
  };

  const handleButton = async () => {
    try {
      setIsLoading(true);
      await createUser(name);
      navigate('/search');
      Swal.fire({
        icon: 'success',
        title: 'Usuário criado com sucesso!',
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
      });
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${e}`,
        timer: 3500,
        timerProgressBar: true,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <LoginPage>
      <LoginContainer>
        <Logo></Logo>
        <InputContainer>
          <NameInput name={name} handleInput={handleInput} />
          <Button
            handleButton={handleButton}
            isDisabled={isDisabled}
            isLoading={isLoading}
          />
        </InputContainer>
      </LoginContainer>
    </LoginPage>
  );
};

export default Login;
