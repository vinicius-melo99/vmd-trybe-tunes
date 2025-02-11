import { UserBoxType } from '../../types';
import { Box, BoxContainer } from './styles';
import loading from '../../assets/loading.png';
import { HiMiniUserCircle } from 'react-icons/hi2';

const UserBox = ({ username, isLoading, imgLink }: UserBoxType) => {
  return (
    <BoxContainer>
      {isLoading ? (
        <img src={loading} alt="Carregando" />
      ) : (
        <Box>
          {!imgLink ? (
            <HiMiniUserCircle size={38} />
          ) : (
            <img src={imgLink} alt="Imagem de perfil" />
          )}
          {username}
        </Box>
      )}
    </BoxContainer>
  );
};

export default UserBox;
