import { useEffect, useState } from 'react';
import { Profile, ProfileInformation, ProfilePicture } from './styles';
import { getUser } from '../../funcs';
import Swal from 'sweetalert2';
import { UserInformationType } from '../../types';
import profileIcon from '../../assets/profile.png';
import loading from '../../assets/loading64.png';
import { useNavigate } from 'react-router-dom';

const ProfileContainer = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [profileImg, setProfileImg] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleButton = () => {
    navigate('/profile/edit');
  };

  useEffect(() => {
    getUserInformation();
  }, []);

  const getUserInformation = async () => {
    try {
      setIsLoading(true);
      const information: UserInformationType = await getUser();
      setUsername(information.username);
      setEmail(information.email);
      setDescription(information.description);
      setProfileImg(information.profileImgLink);
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

  if (isLoading)
    return (
      <Profile>
        <img src={loading} alt="Carregando" />
      </Profile>
    );

  return (
    <Profile>
      <ProfilePicture>
        <img
          src={!profileImg ? profileIcon : profileImg}
          alt="Imagem do perfil"
        />
      </ProfilePicture>
      <ProfileInformation>
        <div>
          <p>Nome</p>
          <span>{username}</span>
        </div>
        <div>
          <p>Email</p>
          <span>{email}</span>
        </div>
        <div>
          <p>Descrição</p>
          <span>{description}</span>
        </div>
        <div>
          <button onClick={handleButton}>Editar Perfil</button>
        </div>
      </ProfileInformation>
    </Profile>
  );
};

export default ProfileContainer;
