import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const Portal = ({ children, id = '' }) => {
    const container = document.createElement('div');
    container.id = id;

    useEffect(() => {
        document.body.prepend(container);

        return () => container.remove();
    });

    return createPortal(children, container);
};

export default Portal;
