const Button = ({ userFeedback, onUpdate }) => {
  return <button onClick={onUpdate}>{userFeedback}</button>;
};

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <Button userFeedback="Good" onUpdate={onLeaveFeedback} />
      <Button userFeedback="Neutral" onUpdate={onLeaveFeedback} />
      <Button userFeedback="Bad" onUpdate={onLeaveFeedback} />
    </div>
  );
};
