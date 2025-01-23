import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';

const Logo = () => {
  return (
    <Link to="/search">
      <img src={logo} alt="logo do site" />
    </Link>
  );
};

export default Logo;
