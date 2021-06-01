import { createContext, useContext } from 'react';

const UpdateWallContext = createContext();

export const useUpdateWall = () => useContext(UpdateWallContext);

export const UpdateWallProvider = ({ updateWall, children }) => {
    return (
        <UpdateWallContext.Provider value={updateWall}>
            {children}
        </UpdateWallContext.Provider>
    );
};
