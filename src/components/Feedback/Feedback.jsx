import React from 'react';
import s from './Feedback.module.css'

function Feedback({good, neutral, bad, total, positive}) {

    return (
        <ul className={s.feedbackList}>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total}</li>
            <li>Positive: {positive}</li>
        </ul>
    );
}

export default Feedback;