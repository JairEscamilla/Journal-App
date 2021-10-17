import React from 'react'
import { Redirect, Route, Switch } from 'react-router'
import { RegisterScreen } from './../components/auth/RegisterScreen';
import { LoginScreen } from './../components/auth/LoginScreen';


export const AuthRouter = () => {
  return (
    <div className="auth__main">
      <div className="auth__box-container">
        <Switch>
          <Route exact path="/auth/login" component={LoginScreen} />
          <Route exact path="/auth/register" component={RegisterScreen} />
          <Redirect to="/auth/login" />
        </Switch>
      </div>
    </div>
  )
}
