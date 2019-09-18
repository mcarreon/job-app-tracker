import { useState } from "react";
import { Container, Form } from "semantic-ui-react";
import fetch from 'isomorphic-unfetch'

import useAuth from "../utils/hooks/useAuth";

const defaults = {
  email: "",
  password: "",
  remember: false
}

const Login = props => {
  const [user, setUser] = useState(defaults);
  const { loginUser } = useAuth();
  const { email, password, remember } = user;
  
  const handleChange = (e, { name, value }) => {
    if (name === 'remember') {
      setUser({
        ...user,
        remember: !remember 
      })
    } else {
      setUser({
        ...user, 
        [name]: value
      })
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = props.apiUrl;

    try {
      fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': "application/json" },
        body: JSON.stringify(user),
        mode: "cors",
        credentials: 'include'
      }).then(res => {
        const data = res.json();
        return data;
      }).then(data => {
        loginUser(data.user);
      })
      .catch(error => {
        console.error(error);
      })
      
    } catch (error) {
      console.error('There was an error or Network issues', error);
      throw new Error(error);
    }
  }

  return (
    <Container className="login">
      <Form onSubmit={handleSubmit}>
        <Form.Input label="Email" name="email" value={email} onChange={handleChange}required />
        <Form.Input label="Password" name="password" value={password} onChange={handleChange} required />
        <Form.Checkbox label="Remember Me" name="remember" checked={remember} onChange={handleChange} />
        <Form.Button>Login</Form.Button>
      </Form>
    </Container>
  );
};

Login.getInitialProps = async function({ req }) {
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";

  const apiUrl = process.browser
    ? `${protocol}://${window.location.host}/user/login`
    : `${protocol}://${"localhost:3001"}/user/login`;

  return { apiUrl };
};

export default Login;
