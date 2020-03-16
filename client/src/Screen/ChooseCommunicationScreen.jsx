import React from 'react';
import BackButton from '../components/BackButton.jsx';


class ChooseCommunication extends React.Component { //({ chooseCom, name }) => {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }

  render() {
    let { chooseCom, name, navigateBack } = this.props;
    let { text } = this.state;
    return (
      <div className='chooseDonor'>
        <div className='chooseDonorTitle'>
          <h1>Part Select</h1>
          <div className='TitleUnderline'></div>
        </div>

        <div className='chooseDonorBody'>
          <div className="telephone"
            onClick={() => chooseCom(`${name}Phone`)}
          >
            <img
              id='phone'
              className='phone'
              src='./assets/TheCall.png'
              onLoad={() => {
                document.getElementById('phone').style.opacity = 1;
              }}
              onError={() => console.log('error loading image on first page')}
              onMouseEnter={() => {
                document.getElementById('phone').src = './assets/TheCallHover.png';
                this.setState({ text: 'Call the donor to secure an in-person meeting' });
              }}
              onMouseLeave={() => {
                document.getElementById('phone').src = './assets/TheCall.png';
                this.setState({ text: '' });
              }}
              onMouseDown={() => {
                document.getElementById('phone').src = './assets/TheCallPressed.png'
              }}
            />
          </div>
          <div className="meeting"
            onClick={() => chooseCom(`${name}Meeting`)}
          >
            <img
              id='meet'
              className='meet'
              src={`./assets/TheAskBase${name}.png`}
              onLoad={() => {
                document.getElementById('meet').style.opacity = 1;
              }}
              onError={() => console.log('error loading image on first page')}
              onMouseEnter={() => {
                document.getElementById('meet').src = `./assets/TheAskHover${name}.png`;
                this.setState({ text: 'Go to in-person meeting after the call.' });
              }}
              onMouseLeave={() => {
                document.getElementById('meet').src = `./assets/TheAskBase${name}.png`;
                this.setState({ text: '' });
              }}
              onMouseDown={() => {
                document.getElementById('meet').src = `./assets/TheAskPressed${name}.png`;
              }}
            />
          </div>
        </div>

        <div className='chooseDonorFooter'>
          <h1>{text}</h1>
          <div className='footerUnderline'></div>
        </div>

        <BackButton
          navigateBack={navigateBack}
        />
      </div>
    );
  }
};

export default ChooseCommunication;