import { createContext, useContext } from 'react';

const UpdatePublicationsContext = createContext();

export const useUpdatePublications = () =>
    useContext(UpdatePublicationsContext);

export const UpdatePublicationsProvider = ({
    updatePublications,
    children,
}) => {
    return (
        <UpdatePublicationsContext.Provider value={updatePublications}>
            {children}
        </UpdatePublicationsContext.Provider>
    );
};
