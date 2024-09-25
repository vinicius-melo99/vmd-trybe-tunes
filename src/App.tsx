import Login from './pages/Login/Login';
import Search from './pages/Search/Search';
import Album from './pages/Album/Album';
import Favorites from './pages/Favorites/Favorites';
import ProfileEdit from './pages/ProfileEdit/ProfileEdit';
import Profile from './pages/Profile/Profile';
import NotFound from './pages/NotFound/NotFound';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/search" element={<Search />} />
      <Route path="/album/:id" element={<Album />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/profile/edit" element={<ProfileEdit />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
