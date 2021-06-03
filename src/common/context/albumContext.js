import { createContext, useContext } from 'react';

const AlbumContext = createContext(null);

export const useAlbumContext = () => useContext(AlbumContext);

export default AlbumContext.Provider;
