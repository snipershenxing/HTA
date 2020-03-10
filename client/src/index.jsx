import React from 'react';
import ReactDOM from 'react-dom';


import Authentication from './components/AuthenticationScreen.jsx';
import Main from './components/MainScreen.jsx';
import Demo from './components/Demo.jsx';
import Dialogue from '../src/Dialogue/Dialogue.js';

const address = 'http://192.168.1.100:3001';
// const address = 'http://192.168.1.2:3001';


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
      currentVideo: "./assets/FrancoSittingAnsweingPhone.mp4",
      currentPoster: "./assets/posterFranco.png",
      playerDialogues: [],
      donorDialogue: {}
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
    this.setState({
      playerDialogues: [Dialogue[2], Dialogue[3], Dialogue[4]],
      donorDialogue: Dialogue[1]
    })
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

  changeVideoHandler() {
    let vid = document.getElementById("myVideo");
    this.setState({
      currentVideo: "./assets/FrancoSittingAnsweingPhone2.mp4"
    }, () => {
    });
    // setTimeout(() => { 
    vid.load();
    // }, 10);
  }

  dialogueHandler(player, newDialogue, skip) {
    if (player) {
      this.state.playerDialogues.forEach((e, i) => {
        if (skip != i)
          document.getElementById(`${i}`).style.opacity = 0;
      });
      this.setState({
        donorDialogue: Dialogue[newDialogue]
      });
    } else {
      let playerDialogues = [];
      for (let ix of newDialogue) {
        playerDialogues.push(Dialogue[ix]);
      }
      this.setState({
        playerDialogues,
      });
    }
  }

  render() {
    let { playerDialogues, donorDialogue, warningStatus, authenticate, userNameValid, passwordValid, userName, score, progress, tutorial, allUsers, currentVideo, currentPoster } = this.state;
    return (
      <div id='main'>
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
          //   <Main
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
          <Demo
            playerDialogues={playerDialogues}
            donorDialogue={donorDialogue}
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