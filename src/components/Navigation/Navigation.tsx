import NavLink from '../NavLink/NavLink';
import { Nav } from './styles';
import { FaSearch } from 'react-icons/fa';
import { GoStar } from 'react-icons/go';
import { CgProfile } from 'react-icons/cg';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
// import { GoStarFill } from 'react-icons/go';

const Navigation = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <Nav>
      <NavLink
        redirectsTo="/search"
        Icon={FaSearch}
        text="Pesquisar"
        highlight={pathname === '/search' ? true : false}
      />
      <NavLink
        redirectsTo="/favorites"
        Icon={GoStar}
        text="Favoritos"
        highlight={pathname === '/favorites' ? true : false}
      />
      <NavLink
        redirectsTo="/profile"
        Icon={CgProfile}
        text="Perfil"
        highlight={pathname === '/profile' ? true : false}
      />
    </Nav>
  );
};

export default Navigation;
