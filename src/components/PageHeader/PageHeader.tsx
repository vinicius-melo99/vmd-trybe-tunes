import { ReactNodeType } from '../../types';
import { Header } from './styles';

const PageHeader = ({ children }: ReactNodeType) => {
  return <Header>{children}</Header>;
};

export default PageHeader;
