import React from "react";
import PopUp from "../BuyMovie/BuyMovieForm";

export default class test extends React.Component {
  state = {
    seen: false
  };

  togglePop = () => {
    this.setState({
      seen: !this.state.seen
    });
  };

  render() {
    return (
      <div>
        <div className="btn" onClick={this.togglePop}>
          <button>Buy Ticket</button>
        </div>
        {this.state.seen ? <PopUp movieId={'tetst'} toggle={this.togglePop} /> : null}
      </div>
    );
  }
}
