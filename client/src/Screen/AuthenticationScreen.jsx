import React from 'react';


const Authentication = ({ userName, warningStatus, authenticate, userNameValid, passwordValid, changeHandler, checkInputValidity, submitHandler, authenticateSwitch }) => {
  return (
    <div style={{ float: 'left', width: 'calc(50% - 20px)', paddingLeft: '20px' }}>
      <form id="authentication">
        {authenticate === 'signup' ?
          <h2>Please Sign Up</h2> :
          <h2>Please Login</h2>}
        <h4>User Name:</h4>
        <input
          style={{ width: 400 }}
          name="userName"
          type="text"
          defaultValue={userName}
          onChange={changeHandler}
          onBlur={checkInputValidity}
          autoCapitalize="username"
        />
        {!userNameValid ? <p style={{ color: 'red', fontSize: 11 }}>
          User name must be 6 to 20 characters which contain only characters, numeric digits, underscore and first character must be a letter.
          </p> :
          warningStatus === 409 ? <p style={{ color: 'red', fontSize: 11 }}>This user name already exists, try something else</p> :
            warningStatus === 401 ? <p style={{ color: 'red', fontSize: 11 }}>No user with this name found</p> :
              <p style={{ color: 'transparent', fontSize: 11 }}>. </p>}
        <h4>Password:</h4>
        <input
          style={{ width: 400 }}
          name="password"
          type="password"
          onChange={changeHandler}
          autoComplete="new-password"
          onBlur={checkInputValidity}
        />
        {!passwordValid ? <p style={{ color: 'red', fontSize: 11 }}>
          Password must be 4 to 12 characters which contain only characters, numeric digits, underscore and first character must be a letter.
          </p> :
          warningStatus === 403 ? <p style={{ color: 'red', fontSize: 11 }}>Wrong password</p> :
            <p style={{ color: 'transparent', fontSize: 11 }}>. </p>}
      </form>
      <span style={{ display: 'inline-block', width: 400, height: 100 }}>
        <button
          style={{ width: '100%', height: 25 }}
          onClick={submitHandler}>
          Submit
          </button>
        <button
          style={{ width: '100%', height: 25, backgroundColor: 'transparent', border: 'none', color: 'blue', textDecoration: 'underline' }}
          onClick={authenticateSwitch}>
          Switch to {authenticate === 'login' ? 'Sign Up' : 'Log-In'}
        </button>
      </span>
    </div>
  )
};

export default Authentication;