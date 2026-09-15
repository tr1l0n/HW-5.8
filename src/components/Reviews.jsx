import { useState } from "react";

function Reviews() {
    const [feedback, setFeedback] = useState({
        good: 0,
         neutral: 0,
        bad: 0
    })
    function countTotalFeedback() {
        return feedback.good + feedback.neutral + feedback.bad
    }
    function countPositiveFeedbackPercentage() {
        const total = countTotalFeedback();
        return Math.floor((feedback.good / total) * 100);
    }
    return (
        <>
            <h1>Please leave us feedback</h1>
            <button onClick={() => setFeedback(prev => ({
                ...prev,
                good: prev.good + 1,
            }))}>Good</button>
            <button onClick={() => setFeedback(prev => ({
                ...prev,
                neutral: prev.neutral + 1,
            }))}>Neutral</button>
            <button onClick={() => setFeedback(prev => ({
                ...prev,
                bad: prev.bad + 1,
            }))}>Bad</button>
            <h2>Statistics</h2>
            <p>Good: {feedback.good}</p>
            <p>Neutral: {feedback.neutral}</p>
            <p>Bad: {feedback.bad}</p>
            <p>Total: {countTotalFeedback()}</p>
            <p>Positive feedback: {isNaN(countPositiveFeedbackPercentage()) ? <p>No feedback given</p> : <p>{countPositiveFeedbackPercentage()}%</p>}</p>
        </>
    )
}
export default Reviews