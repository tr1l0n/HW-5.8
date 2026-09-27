export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div>
      <button onClick={() => onLeaveFeedback('good')} type="button">
        good
      </button>

      <button onClick={() => onLeaveFeedback('neutral')} type="button">
        neutral
      </button>

      <button onClick={() => onLeaveFeedback('bad')} type="button">
        bad
      </button>
    </div>
  )
}