import React from 'react';
import s from "./Options.module.css";


function Options({updatefeedback, totalFeedback, resetFeedback}) {

    return (
        <div className={s.options}>
            <button onClick={() => updatefeedback("good")}>Good</button>
            <button onClick={() => updatefeedback("neutral")}>Neutral</button>
            <button onClick={() => updatefeedback("bad")}>Bad</button>
            {totalFeedback > 0 && <button  onClick={resetFeedback}>Reset</button>}

        </div>
    );
}

export default Options;