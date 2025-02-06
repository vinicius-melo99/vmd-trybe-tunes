import { useEffect, useState } from 'react';
import { Profile, ProfileInformation, ProfilePicture } from './styles';
import { getUser } from '../../funcs';
import Swal from 'sweetalert2';
import { UserInformationType } from '../../types';
import profileIcon from '../../assets/profile.png';

const ProfileContainer = () => {
  const [userInformation, setUserInformation] = useState<UserInformationType>();

  useEffect(() => {
    getUserInformation();
  }, []);

  const getUserInformation = async () => {
    try {
      const information: UserInformationType = await getUser();
      setUserInformation(information);
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${e}`,
        timer: 3500,
        timerProgressBar: true,
      });
    }
  };

  return (
    <Profile>
      <ProfilePicture>
        <img
          src={
            userInformation?.username === ''
              ? userInformation.profileImgLink
              : profileIcon
          }
          alt="Imagem do perfil"
        />
      </ProfilePicture>
      <ProfileInformation>
        <div>
          <p>Nome</p>
          <span>{userInformation?.username}</span>
        </div>
        <div>
          <p>Email</p>
          <span>{userInformation?.email}</span>
        </div>
        <div>
          <p>Descrição</p>
          <span>{userInformation?.description}</span>
        </div>
      </ProfileInformation>
    </Profile>
  );
};

export default ProfileContainer;
