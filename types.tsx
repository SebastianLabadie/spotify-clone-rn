/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type AlbumModel = {
  AlbumId: string;
  AlbumImageUri: string;
  AlbumArtistHeadLine: string;
};

export type AlbumDetailModel={
  AlbumId: string;
  AlbumName: string;
  Albumby: string;
  AlbumNumberOfLikes: string;
  AlbumImageUri: string;
  AlbumArtistHeadLine:string;
  songs:Song[];
}

export type Song={
  SongId: string,
  SongImageUri: string,
  SongTitle: string ,
  SongArtist: string
}