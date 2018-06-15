import React from 'react';
import { HOME_VIEW } from './Home';
import { AreYouThereAlert } from './AreYouThereAlert';

export const SUBMIT_KITTEN_VIEW = 'SUBMIT_KITTEN_VIEW'
export class SubmitKitten extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.startAreYouThereTimer();
  }
  componentWillUnmount() {
    clearTimeout(this.timer);
  }
  startAreYouThereTimer = () => {
    this.timer = setTimeout(this.displayAreYouThereAlert, 2000 /* 2 seconds rather than 10, just for sake of testing */);
  }
  goToHomeView = () => {
    this.props.changeCurrentView(HOME_VIEW);
  }
  displayAreYouThereAlert = () => {
    this.props.displayAlert(
      <AreYouThereAlert
        timeout={5.0}
        onTimeout={this.goToHomeView}
        displayAlert={this.props.displayAlert}
        onClickYes={this.startAreYouThereTimer}
        />
    );
  }
  render() {
    return (
      <div>
        <h4>
          Submit Kitten View (View #1)
          <form action="#">
            <input placeholder="imaginary kitten form"/>
            <button>Just For Show</button>
          </form>
        </h4>
        <a href="#" onClick={this.goToHomeView}>View Our Kittens</a>
      </div>
    )
  }
}
