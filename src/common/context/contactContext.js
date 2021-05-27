import { createContext, useContext } from 'react';

const ContactContext = createContext(null);

export const useContactContext = () => useContext(ContactContext);

export default ContactContext.Provider;
