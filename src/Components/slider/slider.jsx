import React from 'react';
import Slider from 'react-slider';
import im1 from '../../img/background_main.jpg';

class MySlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 0 };
  }

  handleOnChange = (value) => {
    this.setState({ value });
  }

  renderThumb = (props, state) => {
    const { index } = state;
    const images = [
      im1
    ];
    return (
      <div {...props}>
        <img src={images[index]} alt="Error" />
      </div>
    );
  }

  render() {
    return (
      <div>
        <Slider
          value={this.state.value}
          onChange={this.handleOnChange}
          renderThumb={this.renderThumb}
        />
        <p>Value: {this.state.value}</p>
      </div>
    );
  }
}

export default MySlider;