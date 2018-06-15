import React from 'react';

export class AreYouThereAlert extends React.Component {
  constructor(props) {
    super(props);
    this.state = { time: 0 };
  }
  componentDidMount() {
    this.timer = setInterval(this.updateTimer, 1000);
  }
  updateTimer = () => {
    const time = this.state.time + 1;
    if (time > this.props.timeout) {
      this.closeAlert();
      return this.props.onTimeout();
    }
    this.setState({ ...this.state, time });
  }
  closeAlert = () => {
    clearInterval(this.timer);
    this.props.displayAlert(null);
  }
  onClickYes = () => {
    this.closeAlert();
    this.props.onClickYes();
  }
  render() {
    return (
      <div>
        <h3>Are You Still There?</h3>
        <button onClick={this.onClickYes}>Yup!</button>
        <span>({ this.props.timeout - this.state.time })</span>
      </div>
    )
  }
}
