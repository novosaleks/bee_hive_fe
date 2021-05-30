import { createContext, useContext } from 'react';

const newCommentContext = createContext();

export const useNewComment = () => useContext(newCommentContext);

export const NewCommentProvider = ({ updateComments, children }) => {
    return (
        <newCommentContext.Provider value={updateComments}>
            {children}
        </newCommentContext.Provider>
    );
};
