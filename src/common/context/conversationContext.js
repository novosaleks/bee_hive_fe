import { createContext, useContext } from 'react';

const ConversationContext = createContext(null);

export const useConversationContext = () => useContext(ConversationContext);

export default ConversationContext.Provider;


