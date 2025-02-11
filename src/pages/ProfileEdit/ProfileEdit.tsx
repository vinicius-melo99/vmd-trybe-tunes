import { ChangeEvent, useEffect, useState } from 'react';
import {
  Profile,
  ProfileInformation,
  ProfilePicture,
} from '../../components/ProfileContainer/styles';
import { getUser, updateUser } from '../../funcs';
import Swal from 'sweetalert2';
import { UserInformationType } from '../../types';
import profileIcon from '../../assets/profile.png';
import loading from '../../assets/loading64.png';
import { useNavigate } from 'react-router-dom';

const ProfileEdit = () => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [profileImg, setProfileImg] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [descriptionCharsRemaining, setDescriptionCharsRemaining] =
    useState<number>(250 - description.length);

  const navigate = useNavigate();

  useEffect(() => {
    getUserInformation();
  }, []);

  const handleInput = ({
    target: { id, value },
  }: ChangeEvent<HTMLInputElement>) => {
    switch (id) {
      case 'profile-img':
        setProfileImg(value);
        break;
      case 'username':
        setUsername(value);
        break;
      case 'email':
        setEmail(value);
        break;
      default:
        return;
    }
  };

  const handleTextArea = ({
    target: { value },
  }: ChangeEvent<HTMLTextAreaElement>) => {
    const limit = 250;
    const descriptionChars = value.length;

    if (descriptionChars <= limit) {
      setDescriptionCharsRemaining(limit - descriptionChars);
      setDescription(value);
    }
  };

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

  const handleUpdate = async () => {
    const user: UserInformationType = {
      username,
      email,
      description,
      profileImgLink: profileImg,
    };

    setIsLoading(true);
    try {
      await updateUser(user);
      Swal.fire({
        icon: 'success',
        title: 'Usuário alterado com sucesso!',
        timer: 2500,
        timerProgressBar: true,
      });
    } catch (e) {
      Swal.fire({
        icon: 'error',
        title: 'Ooops...',
        text: `${e}`,
        timer: 2500,
        timerProgressBar: true,
      });
    } finally {
      setIsLoading(false);
      navigate('/profile');
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
          <p>Link da Imagem</p>
          <input
            id="profile-img"
            type="text"
            value={profileImg}
            onChange={handleInput}
            autoComplete="false"
          />
        </div>
        <div>
          <p>Nome</p>
          <input
            id="username"
            type="text"
            value={username}
            onChange={handleInput}
            autoComplete="false"
          />
        </div>
        <div>
          <p>Email</p>
          <input
            id="email"
            type="text"
            value={email}
            onChange={handleInput}
            autoComplete="false"
          />
        </div>
        <div>
          <p>Descrição</p>
          <textarea
            id="description"
            value={description}
            onChange={handleTextArea}
          ></textarea>
          <span>{descriptionCharsRemaining}</span>
        </div>

        <div>
          <button onClick={handleUpdate}>Salvar</button>
        </div>
      </ProfileInformation>
    </Profile>
  );
};

export default ProfileEdit;
