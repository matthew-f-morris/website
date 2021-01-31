import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import './CardCreate.css';
import { StoreContext } from '../../store';
import firebase from 'firebase';

function CardCreate() {
  const { state } = React.useContext(StoreContext);
  const [data, setData] = useState({
    title: '',
    text: ''
  });

  const add = (e) => {
    e.preventDefault();
    let newCards = [...state.cards];
    newCards.push({
      text: data.text,
      title: data.title,
      id: Date.now()
    });
    state.firebaseApp.firestore().collection("cards").doc('cardData').update({
      data: newCards
    });
  };

  const handleInput = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="bar">{firebase.auth().currentUser && <div className="display-user">Hi {firebase.auth().currentUser.email}</div>}
      < Navbar className="card-create-nav" expand="lg" >
        <Form inline onSubmit={add}>
          <InputGroup>
            <FormControl
              name="title"
              placeholder="Title"
              onChange={handleInput}
            />
          </InputGroup>
          <FormControl name="text" placeholder="Text" onChange={handleInput} className=" mr-sm-2" />
          <Button variant="light" type="submit">Add New Card</Button>
        </Form>
      </Navbar >
    </div>
  )
}

export default CardCreate;