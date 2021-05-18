import React from 'react';
import { NotificationWrapper } from './notification.style';

const Notification = ({ children, type }) => {
    return (
        <NotificationWrapper>
            {children}
        </NotificationWrapper>
    );
};

export default Notification;
