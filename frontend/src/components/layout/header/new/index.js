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

function New() {
  const auth = useContext(AuthContext);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [imagesrc, setImagesrc] = useState('');
  const history = useHistory();

  const handleSubmit = () => {
    const token = auth.user.token;
    const person = {
      name: name,
      category: category,
	  description: description,
      imagesrc: imagesrc
    };
    const url = `${process.env.REACT_APP_API_URL}/api/persons`;
    axios.post(url,person, {
	  headers: {
		"content-type": "application/json",
		"x-access-token": token,
	  },
	})
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
				  placeholder="Name*"
				  value={name} 
				  onChange={event => {setName(event.target.value)}}
				  />
				</Form.Group>
				
				<Form.Group controlId="formBasicEmail">
				<Form.Control 
				  type="text" 
				  placeholder="Category*"
				  value={category} 
				  onChange={event => {setCategory(event.target.value)}}
				  />
				</Form.Group>
				
				<Form.Group controlId="formBasicEmail">
				<Form.Control 
				  type="text" 
				  placeholder="Description*"
				  value={description} 
				  onChange={event => {setDescription(event.target.value)}}
				  />
				</Form.Group>
				
				<Form.Group controlId="formBasicEmail">
				<Form.Control 
				  type="text" 
				  placeholder="Image Sources*"
				  value={imagesrc} 
				  onChange={event => {setImagesrc(event.target.value)}}
				  />
				</Form.Group>
								
				<Button onClick={()=>{handleSubmit()}} variant="primary" type="button" className="button button-primary">
					Create Person
				</Button>
			</Form>
		</Col>
    </Row> 
  );
}

export default New;