import { ChangeEvent } from 'react';

export type NameInputProps = {
  name: string;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type ButtonProps = {
  handleButton: () => void;
  isDisabled: boolean;
  isLoading: boolean;
};

export type SideMenuProps = {
  username: string;
};

export type NavLinkProps = {
  redirectsTo: string;
};
