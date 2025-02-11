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
  email: string;
  description: string;
  profileImgLink: string;
};

export type UserBoxType = {
  username: string;
  isLoading: boolean;
  imgLink: string;
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

export type AlbumType = {
  artistId: number;
  artistName: string;
  collectionId: number;
  collectionName: string;
  collectionPrice: number;
  artworkUrl100: string;
  releaseDate: string;
  trackCount: number;
};

export type SongType = {
  trackId: number;
  trackName: string;
  previewUrl: string;
};

export type ArtistInputType = {
  getAlbums: (albums: AlbumType[]) => void;
  toggleLoading: (isLoading: boolean) => void;
};

export type AlbumsContainerType = {
  albums: AlbumType[];
  isLoading: boolean;
};

export type SongsContainerType = {
  album: AlbumType | undefined;
};
