import React, { useState, useEffect } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './Login.css';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../js/actions/auth';
import logo from 'assets/img/logoProject.png';
import { Redirect } from 'react-router-dom';
import { loadUser } from '../js/actions/auth';
export default function Login() {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  function validateForm() {
    const { email, password } = user;
    return email.length > 0 && password.length > 0;
  }
  const dispatch = useDispatch();
  function handleSubmit(event) {
    event.preventDefault();
    dispatch(loginUser(user));
  }

  const isAuth = useSelector(state => state.auth.isAuth);
  useEffect(() => {
    dispatch(loadUser(localStorage.getItem('token')));
  }, [isAuth]);
  return isAuth ? (
    <Redirect to='/admin' />
  ) : (
    <div className='Login'>
      <form onSubmit={handleSubmit}>
        <img src={logo} style={{ width: '200px', marginLeft: '10px' }} />
        <div className='Formulair'>
          <FormGroup controlId='email' bsSize='large'>
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type='email'
              value={user.email}
              onChange={e => setUser({ ...user, email: e.target.value })}
            />
          </FormGroup>
          <FormGroup controlId='password' bsSize='large'>
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={user.password}
              onChange={e => setUser({ ...user, password: e.target.value })}
              type='password'
            />
          </FormGroup>
          <Button
            className='submitForm'
            block
            bsSize='large'
            disabled={!validateForm()}
            type='submit'
          >
            Login
          </Button>
        </div>
      </form>
    </div>
  );
}
