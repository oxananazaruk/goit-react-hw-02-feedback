import { Button, ButtonsContainer } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ButtonsContainer>
      {options.map(option => {
        return (
          <Button key={option} onClick={onLeaveFeedback}>
            {option}
          </Button>
        );
      })}
    </ButtonsContainer>
  );
};
