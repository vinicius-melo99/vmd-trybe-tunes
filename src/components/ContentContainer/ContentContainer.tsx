import { ReactNodeType } from '../../types';
import { Content } from './styles';

const ContentContainer = ({ children }: ReactNodeType) => {
  return <Content>{children}</Content>;
};

export default ContentContainer;
