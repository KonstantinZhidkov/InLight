import React from 'react';
import { Field, reduxForm } from "redux-form";


const LoginForm = ({ handleSubmit }) => {
  return (
      <form onSubmit={handleSubmit}>
          <div>
              <Field component={"input"} name={"Login"} placeholder="Login" type="text" />
          </div>
          <div>
              <Field component={"input"} name={"Password"} placeholder="Password" type="password" />
          </div>
          <div>
              <label htmlFor="remember">Remember me</label>
              <Field component={"input"} id="remember" name={"rememberMe"} type="checkbox" />
          </div>
          <div>
              <button type="submit">
                  Log in
              </button>
          </div>
      </form>
  );
};

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm);

const Login = () => {
    const onSubmit = formData => {
        console.log(formData);
    }

    return (
        <>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </>
    );
};

export default Login;
