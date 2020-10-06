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

function Register() {
  const auth = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [age, setAge] = useState('');
  const [marital, setMarital] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleSubmit = () => {
    const user = {
      username: username,
      name: name,
      lastname: lastname,
	  age: age,
      marital: marital,
      email: email,
      password: password
    };
    const url = `${process.env.REACT_APP_API_URL}/api/users`;
    axios.post(url,user)
    .then(response => {
       alert(response.data.resp);
    })
    .catch(err=>{
      alert(err);
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
				
				<Form.Group controlId="formBasicEmail">
				<Form.Control 
				  type="text" 
				  placeholder="Name*"
				  value={name} 
				  onChange={event => {setName(event.target.value)}}
				  />
				</Form.Group>
				
				<Form.Group controlId="formBasicEmail">
				<Form.Control 
				  type="text" 
				  placeholder="Lastname*"
				  value={lastname} 
				  onChange={event => {setLastname(event.target.value)}}
				  />
				</Form.Group>
				
				<Form.Group controlId="formBasicEmail">
				<Form.Control 
				  type="text" 
				  placeholder="Age*"
				  value={age} 
				  onChange={event => {setAge(event.target.value)}}
				  />
				</Form.Group>
				
				<Form.Group controlId="formBasicEmail">
				<Form.Control 
				  type="text" 
				  placeholder="Marital Status*"
				  value={marital} 
				  onChange={event => {setMarital(event.target.value)}}
				  />
				</Form.Group>
				
				<Form.Group controlId="formBasicEmail">
				<Form.Control 
				  type="text" 
				  placeholder="Email*"
				  value={email} 
				  onChange={event => {setEmail(event.target.value)}}
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

export default Register;