import React from 'react'
import { Link } from 'react-router-dom'

export const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form>
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="auth__input"
          autoComplete="off"

        />
        <input
          type="email"
          placeholder="Email"
          name="email"
          autoComplete="off"
          className="auth__input"
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          className="auth__input"
          autoComplete="off"
        />
        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          className="auth__input"
          autoComplete="off"
        />

        <button type="submit" className="btn btn-primary btn-block mb-5">
          Register
        </button>

        <Link to="/auth/login" className="link">
          Alredy registered?
        </Link>
      </form>
    </>
  )
}
