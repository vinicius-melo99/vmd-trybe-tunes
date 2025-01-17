import { Box } from './styles';

type Test = {
  children: React.ReactNode;
};

const MenuBox = ({ children }: Test) => {
  return <Box>{children}</Box>;
};

export default MenuBox;
