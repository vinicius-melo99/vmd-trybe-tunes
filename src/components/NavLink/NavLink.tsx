import { Link } from 'react-router-dom';
import { NavLinkProps } from '../../types';

const NavLink = ({ redirectsTo, Icon, text, highlight }: NavLinkProps) => {
  return (
    <Link to={redirectsTo}>
      <Icon size={23} color={highlight ? 'white' : ''} />
      <span style={{ color: highlight ? 'white' : '' }}>{text}</span>
    </Link>
  );
};

export default NavLink;
