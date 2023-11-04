import { Component } from 'react';

const Button = ({ feedback, onUpdate }) => {
  return <button onClick={onUpdate}>{feedback}</button>;
};

export class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateGood;

  render() {
    return (
      <div>
        <Button feedback="Good" onUpdate={this.updateA} />
        <Button feedback="Neutral" onUpdate={this.updateB} />
        <Button feedback="Bad" onUpdate={this.updateB} />
      </div>
    );
  }
}
