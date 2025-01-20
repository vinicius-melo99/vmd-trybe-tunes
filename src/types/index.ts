import { ChangeEvent } from 'react';
import { IconType } from 'react-icons';

export type NameInputProps = {
  name: string;
  handleInput: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type ButtonProps = {
  handleButton: () => void;
  isDisabled: boolean;
  isLoading: boolean;
};

export type NavLinkProps = {
  redirectsTo: string;
  Icon: IconType;
  text: string;
  highlight: boolean;
};

export type UserInformationType = {
  username: string;
};

export type UserBoxType = {
  username: string;
  isLoading: boolean;
};

export type ReactNodeType = {
  children: React.ReactNode;
};

export type MenuBoxType = {
  children: React.ReactNode;
};

export type ContentContainerType = {
  children: React.ReactNode;
};

export type PageHeaderType = {
  children: React.ReactNode;
};
