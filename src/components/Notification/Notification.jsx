import React from 'react';
import s from './Notification.module.css'

function Notification(props) {
    return (
        <div className={s.notification}>
            <p>No feedback yet</p>
        </div>
    );
}

export default Notification;
