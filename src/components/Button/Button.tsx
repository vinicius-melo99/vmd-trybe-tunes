import { ButtonProps } from '../../types';
import loading from '../../assets/loading.png';

const Button = ({ handleButton, isDisabled, isLoading }: ButtonProps) => {
  return (
    <button onClick={handleButton} disabled={isDisabled}>
      {!isLoading ? 'Entrar' : <img src={loading} alt="Carregando" />}
    </button>
  );
};

export default Button;
