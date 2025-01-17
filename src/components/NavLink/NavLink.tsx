import { Link } from 'react-router-dom';
import { NavLinkProps } from '../../types';

const NavLink = ({ redirectTo }: NavLinkProps) => {
  return <Link to={redirectTo}>teste porra</Link>;
};

export default NavLink;
