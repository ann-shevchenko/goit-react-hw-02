import './App.css'
import "modern-normalize";
import Description from "../Description/Description.jsx";
import Options from "../Options/Options.jsx";
import Feedback from "../Feedback/Feedback.jsx";
import Notification from "../Notification/Notification.jsx";
import React, {useEffect, useState} from "react";


function App() {

    const [feedbackType, setFeedbackType] = useState(() => {
        const savedFeedback =  window.localStorage.getItem("saved-feedback");
        if (savedFeedback) {
            return JSON.parse(savedFeedback);
        }
        return {
            good: 0,
            neutral: 0,
            bad: 0,
        };
    });

    const totalFeedback = feedbackType.good + feedbackType.neutral + feedbackType.bad;
    const positiveFeedback = Math.round((feedbackType.good / totalFeedback) * 100)

    const updateFeedback = (feedbackType) => {

        setFeedbackType(prevState => ({
            ...prevState,
            [feedbackType]: prevState[feedbackType] + 1
        }));
    }

    const resetFeedback = () => {
        setFeedbackType({
            good: 0,
            neutral: 0,
            bad: 0,
        });
    }

    useEffect(() => {
        window.localStorage.setItem("saved-feedback", JSON.stringify(feedbackType));
    }, [feedbackType]);

    return (
        <>
            <Description/>
            <Options
                updatefeedback={updateFeedback}
                totalFeedback={totalFeedback}
                resetFeedback={resetFeedback}
            />
            {totalFeedback > 0 ?
                <Feedback
                    good={feedbackType.good}
                    neutral={feedbackType.neutral}
                    bad={feedbackType.bad}
                    total={totalFeedback}
                    positive={positiveFeedback}
                /> : <Notification/>}
        </>
    )
}

export default App
