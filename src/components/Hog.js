import React, { Component } from "react";

class Hog extends Component {
  state = { showDetails: false };

  handleHogClick = () => {
    this.setState({ showDetails: !this.state.showDetails });
  };

  renderDetails = (hog) => {
      const greased = hog.greased ? 'greased' : 'not greased'
    return (
      <div className="Details">
        <p className="hogSpeciality">{hog.specialty}</p>
        <p className="hogGreased">{greased}</p>
      </div>
    );
  };

  render() {
    const hog = this.props.hog;
    const hogImg = hog.name
      .toLowerCase()
      .split(" ")
      .join("_");

    return (
      <div className="pigTile">
        <div className="hogImg">
          <a onClick={this.handleHogClick}>
            <img src={require(`../hog-imgs/${hogImg}.jpg`)} alt={hog.name} />
          </a>
        </div>
        <div className="hogName">
          <p>{hog.name}</p>
        </div>
        {this.state.showDetails && this.renderDetails(hog)}
      </div>
    );
  }
}

// const Hog = ({hog}) => {

//     const renderDetails =
//         <div class="Details">
//         <p class="hogSpeciality">{hog.speciality}</p>
//         <p class="hogGreased">{hog.greased}</p>
//         </div>

//     return(
//         <div className="pigTile">
//                 <div className="hogImg">
//                     <a onClick={() => document.querySelector('.hogName').append(renderDetails)}><img src={require(`../hog-imgs/${hogImg}.jpg`)} alt={hog.name}/></a>
//                 </div>
//                 <div className="hogName">
//                     <p>{hog.name}</p>
//                 </div>
//             </div>
//     )
// }

export default Hog;
