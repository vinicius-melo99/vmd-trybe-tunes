import { NameInputProps } from '../../types';

const NameInput = ({ name, handleInput }: NameInputProps) => {
  return (
    <input
      type="text"
      placeholder="qual é seu nome?"
      value={name}
      onChange={handleInput}
      maxLength={13}
    />
  );
};

export default NameInput;
