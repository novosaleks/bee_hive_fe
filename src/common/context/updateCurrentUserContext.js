import { createContext, useContext } from 'react';

const UpdateCurrentUser = createContext();

export const useUpdateCurrentUser = () => useContext(UpdateCurrentUser);

export default UpdateCurrentUser.Provider;
