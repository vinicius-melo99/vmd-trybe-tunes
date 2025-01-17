import NavLink from '../NavLink/NavLink';
import { Nav } from './styles';

const Navigation = () => {
  return (
    <Nav>
      <NavLink redirectsTo="/search" />
      <NavLink redirectsTo="/favorites" />
      <NavLink redirectsTo="/profile" />
    </Nav>
  );
};

export default Navigation;
