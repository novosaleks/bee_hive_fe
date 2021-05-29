import { NotificationWrapper } from './notification.style';
import { useEffect, useState } from 'react';
import { SlideInDown } from '../../common/animatedComponents';

const Notification = ({ children, type, timeout }) => {
    const animationDuration = 400;

    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoaded(true);
        }, 0);

        const id = setTimeout(() => {
            setLoaded(false);
        }, timeout - animationDuration);

        return () => clearTimeout(id);
    }, []);

    return (
        <SlideInDown animationDuration={animationDuration} in={loaded}>
            <NotificationWrapper>{children}</NotificationWrapper>
        </SlideInDown>
    );
};

export default Notification;
