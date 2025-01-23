import { UserBoxType } from '../../types';
import { Box, BoxContainer } from './styles';
import loading from '../../assets/loading.png';
import { HiMiniUserCircle } from 'react-icons/hi2';

const UserBox = ({ username, isLoading }: UserBoxType) => {
  return (
    <BoxContainer>
      {isLoading ? (
        <img src={loading} alt="Carregando" />
      ) : (
        <Box>
          <HiMiniUserCircle size={38} />
          {username}
        </Box>
      )}
    </BoxContainer>
  );
};

export default UserBox;
