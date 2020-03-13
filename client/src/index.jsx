import React from 'react';
import ReactDOM from 'react-dom';


import Authentication from './components/AuthenticationScreen.jsx';
import Admin from './Screen/AdminScreen.jsx';
import Dialogue from './Dialogue/Dialogue.js';
import FirstPage from './Screen/FirstPage.jsx';
import ChooseDonor from './Screen/ChooseDonorScreen.jsx';
import GameScreen from './Screen/GameScreen.jsx';
import ChooseCommunication from './Screen/ChooseCommunicationScreen.jsx';

// const address = 'http://192.168.1.100:3001';
const address = 'http://192.168.1.2:3001';
// const address = 'http://localhost:3001';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticate: 'login',
      userNameValid: true,
      passwordValid: true,
      warningStatus: '',
      id: '',
      userName: '',
      password: '',
      score: 0,
      progress: 0,
      tutorial: true,
      allUsers: [],
      currentVideo: "./assets/Franco1.1.mp4",
      currentPoster: "./assets/posterFranco.png",
      playerDialogues: [],
      donorDialogue: {},
      donorClickable: false,
      gameChoosen: '',
      subScore: 0,
    };
    this.trySignInWithCookie = this.trySignInWithCookie.bind(this);
    this.signinWithCookie = this.signinWithCookie.bind(this);
    this.getAllUsers = this.getAllUsers.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.submitHandler = this.submitHandler.bind(this);
    this.signupHandler = this.signupHandler.bind(this);
    this.signinHandler = this.signinHandler.bind(this);
    this.deleteHandler = this.deleteHandler.bind(this);
    this.authenticateSwitch = this.authenticateSwitch.bind(this);
    this.checkInputValidity = this.checkInputValidity.bind(this);
    this.buttonHandler = this.buttonHandler.bind(this);
    this.updateHandler = this.updateHandler.bind(this);
    this.logoutHandler = this.logoutHandler.bind(this);
    this.changeVideoHandler = this.changeVideoHandler.bind(this);
    this.dialogueHandler = this.dialogueHandler.bind(this);
  }

  componentDidMount() {
    this.trySignInWithCookie();
    var vid = document.getElementById("myVideo");
  }


  trySignInWithCookie() {
    let cookie = Cookies.get('cookie');
    let userName = localStorage.getItem('userName');
    if (!!cookie && cookie !== 'undefined') {
      this.signinWithCookie();
    } else {
      this.setState({
        userName,
        authenticate: "login"
      }, () => {
        this.getAllUsers();
      });
    }
  }

  signinWithCookie() {
    let cookie = Cookies.get('cookie');
    let userName = localStorage.getItem('userName');
    fetch(`${address}/api/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userName,
        cookie
      })
    })
      .then(res => {
        return res.json()
      })
      .then(({ id, cookie, cookieExpireTime, score, progress, tutorial }) => {
        let inAnHour = new Date(cookieExpireTime);
        window.Cookies.set('cookie', cookie, { expires: inAnHour });
        this.setState({
          userName,
          authenticate: 'passed',
          id,
          score: Number(score),
          progress: Number(progress),
          tutorial
        });
        this.getAllUsers();
      })
      .catch(err => {
        console.log(err)
      });
  }

  checkInputValidity(e) {
    let { userName, password } = this.state;
    var usernameRegex = /^[A-Za-z]\w{5,20}$/;
    var passwordRegex = /^[A-Za-z]\w{3,12}$/;

    if (e && e.target.name === 'password') {
      let passwordValid = password.match(passwordRegex) ? true : false;
      this.setState({ passwordValid });
    } else if (e && e.target.name === 'userName') {
      let userNameValid = userName.match(usernameRegex) ? true : false;
      this.setState({ userNameValid });
    } else {
      let userNameValid = userName.match(usernameRegex) ? true : false;
      let passwordValid = password.match(passwordRegex) ? true : false;
      this.setState({ userNameValid, passwordValid });
    }
  }

  getAllUsers() {
    fetch(`${address}/api/user`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          allUsers: data
        });
      })
      .catch(err => {
        console.log(err)
      })
  }

  changeHandler(e) {
    let { name, value } = e.target;
    this.setState({ [name]: value });
  }

  submitHandler() {
    const checkValidity = async () => {
      this.checkInputValidity();
      this.setState({ warningStatus: '' })
    };

    checkValidity()
      .then(() => {
        if (this.state.authenticate === 'signup') {
          this.signupHandler();
        } else {
          this.signinHandler();
        }
      })
      .catch(err => { console.log(err) })
  }

  signupHandler() {
    let { userName, password, userNameValid, passwordValid } = this.state;
    let lastRequest = new Date();
    if (userNameValid && passwordValid) {
      fetch(`${address}/api/user`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName,
          password: 'afdi34tdsf3r3.' + password,
          lastRequest
        })
      })
        .then((response) => {
          if (response.status === 409) {
            this.setState({ warningStatus: 409 });
            throw new Error('This user name exists, try something else')
          } else {
            return;
          }
        })
        .then(() => {
          document.getElementById("authentication").reset();
          this.getAllUsers();
        })
        .catch(err => {
          console.log("err", err)
        });
    }
  }

  signinHandler() {
    let { userName, password, userNameValid, passwordValid } = this.state;
    localStorage.setItem('userName', userName);
    if (userNameValid && passwordValid) {
      fetch(`${address}/api/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          userName,
          password: 'jhtrfg9876rg.' + password,
          lastRequest: new Date()
        })
      })
        .then((response) => {
          if (response.status === 403) {
            this.setState({ warningStatus: 403 });
            throw new Error('wrong password')
          } else if (response.status === 401) {
            this.setState({ warningStatus: 401 });
            throw new Error('no user with this name found')
          } else {
            return response.json();
          }
        })
        .then(({ id, cookie, cookieExpireTime, score, progress, tutorial }) => {
          let inAnHour = new Date(cookieExpireTime);
          window.Cookies.set('cookie', cookie, { expires: inAnHour });
          this.setState({
            authenticate: 'passed',
            id,
            score: Number(score),
            progress: Number(progress),
            tutorial
          });
          if (document.getElementById("authentication")) {
            document.getElementById("authentication").reset();
          }
          this.getAllUsers();
        })
        .catch(err => {
          console.log(err)
        });
    }
  }

  deleteHandler(id) {
    fetch(`${address}/api/user/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        this.getAllUsers();
      })
      .catch(err => {
        console.log("err", err)
      });
  }

  authenticateSwitch() {
    let { authenticate } = this.state;
    if (authenticate === 'signup') {
      this.setState({ authenticate: 'login' });
    } else {
      this.setState({ authenticate: 'signup' });
    }
    this.setState({
      userNameValid: true,
      passwordValid: true,
      warningStatus: '',
      id: '',
      userName: '',
      password: '',
      score: 0,
      progress: 0,
      tutorial: true,
    });
    document.getElementById("authentication").reset();
  }

  buttonHandler(e) {
    if (e === false || e === true) { // tutorial
      this.setState({
        tutorial: !this.state.tutorial
      });
    } else { // progress & score
      e.preventDefault();
      this.setState({
        [e.target.name]: this.state[e.target.name] + Number(e.target.value)
      })
    }
  }

  logoutHandler(e) {
    e.preventDefault();
    Cookies.remove('cookie');
    this.setState({
      authenticate: 'login',
      password: '',
      id: '',
      score: 0,
      progress: 0,
      tutorial: true
    }, () => {
      this.trySignInWithCookie();
    });
  }

  updateHandler(e) {
    e.preventDefault();
    let cookie = Cookies.get('cookie') || '';
    let { id, userName, score, progress, tutorial } = this.state;
    fetch(`${address}/api/user/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userName,
        cookie,
        score,
        progress,
        tutorial,
      })
    })
      .then((response) => {
        if (response.status === 440) {
          console.error("session expired");
          this.setState({ warningStatus: 440 });
        } else {
          return response.json();
        }
      })
      .then(({ cookieExpireTime, score, progress, tutorial }) => {
        let inAnHour = new Date(cookieExpireTime);
        let cookie = Cookies.get('cookie');
        Cookies.set('cookie', cookie, { expires: inAnHour });
        this.setState({
          score: Number(score),
          progress: Number(progress),
          tutorial
        }, () => {
          this.getAllUsers();
        });
      })
      .catch(err => console.log(err));
  }

  changeVideoHandler(newVid) {
    let vid = document.getElementById("myVideo");
    this.setState({
      currentVideo: newVid
    }, () => {
    });
    vid.load();
  }

  dialogueHandler(player, newDialogue, skip, point) {
    let { subScore, playerDialogues, gameChoosen } = this.state;
    if (newDialogue === 'End') {
      this.setState({
        donorDialogue: null,
        playerDialogues: [],
      })
    } else {
      if (player) {
        if (gameChoosen === 'FrancoPhone' && newDialogue === 'Gate1') {
          if (subScore + point <= 2) {
            newDialogue = 'Gate1-1';
            this.changeVideoHandler("./assets/Franco2.2.mp4");
          } else if (3 <= subScore + point && subScore + point <= 4) {
            newDialogue = 'Gate1-2'
          } else {
            newDialogue = 'Gate1-3'
          }
        } else if (gameChoosen === 'FrancoPhone' && newDialogue === 'Gate2') {
          if (subScore + point <= 4) {
            newDialogue = 'Gate2-1';
            this.changeVideoHandler("./assets/Franco2.2.mp4");
          } else if (5 <= subScore + point && subScore + point <= 6) {
            newDialogue = 'Gate2-2'
          } else {
            newDialogue = 'Gate2-3'
          }
        } else if (gameChoosen === 'FrancoMeeting' && newDialogue === 'Gate1') {
          if (subScore + point <= 4) {
            newDialogue = 'Gate1-4'
          } else if (5 <= subScore + point && subScore + point <= 7) {
            newDialogue = 'Gate1-1'
          } else if (8 <= subScore + point && subScore + point <= 12) {
            newDialogue = 'Gate1-2'
          } else {
            newDialogue = 'Gate1-3'
          }
        } else if (gameChoosen === 'SharrelPhone' && newDialogue === 'Gate1') {
          if (subScore + point <= 3) {
            newDialogue = 'Gate1-1';
            this.changeVideoHandler("./assets/Franco2.2.mp4");
          } else if (4 <= subScore + point && subScore + point <= 7) {
            newDialogue = 'Gate1-2'
          } else {
            newDialogue = 'Gate1-3'
          }
        } else if (gameChoosen === 'SharrelPhone' && newDialogue === 'Gate2') {
          if (subScore + point <= 11) {
            newDialogue = 'Gate2-1';
            this.changeVideoHandler("./assets/Franco2.2.mp4");
          } else if (12 <= subScore + point && subScore + point <= 17) {
            newDialogue = 'Gate2-2'
          } else {
            newDialogue = 'Gate2-3'
          }
        } else if (gameChoosen === 'SharrelMeeting' && newDialogue === 'Gate1') {
          if (subScore + point <= 3) {
            newDialogue = 'Gate1-1'
          } else if (4 === subScore + point) {
            newDialogue = 'Gate1-2'
          } else if (5 <= subScore + point && subScore + point <= 6) {
            newDialogue = 'Gate1-3'
          } else {
            newDialogue = 'Gate1-4'
          }
        }
        playerDialogues.forEach((e, i) => {
          e.addScore = 0
          if (skip != i) document.getElementById(String(i)).style.display = 'none';
        });
        this.setState({
          donorDialogue: Dialogue[gameChoosen][newDialogue],
          subScore: subScore + point,
          playerDialogues: playerDialogues,
          donorClickable: true
        });
      } else {
        let playerDialogues = [];
        for (let ix of newDialogue) {
          playerDialogues.push(Dialogue[gameChoosen][ix]);
        }
        document.getElementById("myVideo").play()
        this.setState({
          playerDialogues,
          donorClickable: false
        });
      }
    }
  }

  render() {
    let { playerDialogues, donorDialogue, donorClickable, subScore, warningStatus, authenticate, userNameValid, passwordValid, userName, score, progress, tutorial, allUsers, currentVideo, currentPoster, gameChoosen } = this.state;
    return (
      <div id='main'>
        <h3 style={{ position: "absolute", top: 0, left: "50%" }}>Score : {subScore}</h3>
        {authenticate !== 'passed' ?
          <div>
            <Authentication
              userName={userName}
              authenticate={authenticate}
              userNameValid={userNameValid}
              passwordValid={passwordValid}
              warningStatus={warningStatus}
              changeHandler={this.changeHandler}
              checkInputValidity={this.checkInputValidity}
              submitHandler={this.submitHandler}
              authenticateSwitch={this.authenticateSwitch}
            />
          </div> :
          // <div style={{ display: 'table', width: '100%' }}>
          //   <Admin
          //     userName={userName}
          //     score={score}
          //     progress={progress}
          //     tutorial={tutorial}
          //     buttonHandler={this.buttonHandler}
          //     updateHandler={this.updateHandler}
          //     logoutHandler={this.logoutHandler}
          //   />

          //   <div style={{ float: 'left', width: '50%' }}>
          //     <h2>List of Users</h2>
          //     <ol style={{ width: '100%' }}>
          //       {allUsers.map((user, idx) => (
          //         <li key={idx} >
          //           <div style={{ width: '100%', display: 'flex' }}>
          //             <p style={{ width: '50%' }}>{user.userName}, score: {user.score}, progress: {user.progress}, tutorial: {user.tutorial.toString()}, expire: {user.cookieExpireTime} </p>
          //             <button style={{ padding: '5px', height: '30px', margin: '20px 0' }} onClick={() => this.deleteHandler(user.id)}>del</button>
          //           </div>
          //         </li>
          //       ))}
          //     </ol>
          //   </div>
          // </div>
          gameChoosen === '' ?
            <FirstPage
              goToChooseDonor={() => this.setState({ gameChoosen: 'choose' })}
            /> :

            gameChoosen === 'choose' ?
              <ChooseDonor
                chooseDonor={(name) => {
                  this.setState({ gameChoosen: name });
                }}
              /> :

              gameChoosen === 'Franco' ?
                <ChooseCommunication
                  name='Franco'
                  chooseCom={(name) => {
                    if (name === 'FrancoPhone') {
                      this.setState({
                        gameChoosen: name,
                        // playerDialogues: [Dialogue[name][2], Dialogue[name][3], Dialogue[name][4]],
                        donorDialogue: Dialogue[name][1],
                        donorClickable: true
                      });
                    } else if (name === 'FrancoMeeting') {
                      this.setState({
                        gameChoosen: name,
                        playerDialogues: [Dialogue[name][1]],
                        // donorDialogue: Dialogue[name][2],
                        donorClickable: false
                      });
                    }
                  }}
                /> :

                gameChoosen === 'Sharrel' ?
                  <ChooseCommunication
                    name='Sharrel'
                    chooseCom={(name) => {
                      if (name === 'SharrelPhone') {
                        this.setState({
                          gameChoosen: name,
                          // playerDialogues: [Dialogue[name][2], Dialogue[name][3], Dialogue[name][4]],
                          donorDialogue: Dialogue[name][1],
                          donorClickable: true,
                        });
                      } else if (name === 'SharrelMeeting') {
                        this.setState({
                          gameChoosen: name,
                          playerDialogues: [Dialogue[name][1]],
                          // donorDialogue: Dialogue[name][2],
                          donorClickable: false,
                        });
                      }
                    }}
                  /> :

                  <GameScreen
                    playerDialogues={playerDialogues}
                    donorDialogue={donorDialogue}
                    donorClickable={donorClickable}
                    currentVideo={currentVideo}
                    currentPoster={currentPoster}
                    logoutHandler={this.logoutHandler}
                    changeVideoHandler={this.changeVideoHandler}
                    dialogueHandler={this.dialogueHandler}
                  />
        }
      </div>
    );
  }
};



ReactDOM.render(<App />, document.getElementById('app'))