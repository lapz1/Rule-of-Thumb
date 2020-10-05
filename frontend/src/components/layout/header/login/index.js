import React, {useState, useContext} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import { useHistory } from "react-router-dom";

import {AuthContext} from './../../../../contexts/AuthContext';
import 'react-notifications/lib/notifications.css';
import './index.css';

function Login() {
  const auth = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = () => {
    const user = {
      username: username,
      password: password
    };
    const url = `${process.env.REACT_APP_API_URL}/api/users/login`;
    axios.post(url,user)
    .then(response => {
      const token = response.data.token;
      const name = response.data.name;
      const id = response.data.id;
      const username = response.data.username;
      if(!!token){
        
        setTimeout(()=>{
          const user = {
            token,
            name,
            id, 
            username
          };
          auth.login(user);
          history.push("/");
        }, 3000);
        
      }
    })
    .catch(err=>{
      
    })    
  }

  return (
    <Row className="login">
		<Col md={5}>
			<Form className="form">
				<Form.Group controlId="formBasicEmail">
				<Form.Control 
				  type="text" 
				  placeholder="Username*"
				  value={username} 
				  onChange={event => {setUsername(event.target.value)}}
				  />
				</Form.Group>

				<Form.Group controlId="formBasicPassword">
				<Form.Control 
				  type="password" 
				  placeholder="Password*"
				  value={password} 
				  onChange={event => {setPassword(event.target.value)}}
				/>
				</Form.Group>
				<Button onClick={()=>{handleSubmit()}} variant="primary" type="button" className="button button-primary">
					Login
				</Button>
			</Form>
		</Col>
    </Row> 
  );
}

export default Login;