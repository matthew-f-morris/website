import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import HomeCard from '../homecard/HomeCard';
import { Row, Col } from 'react-bootstrap';
import { StoreContext } from '../../store';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase';
import './Home.css';

function Home() {
  const history = useHistory();
  const { state } = React.useContext(StoreContext);

  if (!state.user) history.push("/login");

  const [cards, setCards] = useState([]);

  useEffect(() => {
    let temp = [];
    const onValueChange = firebase.database()
      .ref('/list')
      .on('value', snapshot => {
        temp = snapshot.val();
      });
    setCards(temp);
    return onValueChange;
  }, [])

  const remove = (id) => {
    firebase.database().ref('/list/' + id).remove();
  }

  return (
    <div className="page">
      <Container fluid={true} >
        <Row>
          {firebase.auth().currentUser && <Col className="display-user">Hi {firebase.auth().currentUser.email}</Col>}
        </Row>
        <Row className="main-row">
          {cards.map((card, idx) => (
            <Col xs={12} md={3} key={idx}>
              <HomeCard
                title={card.title}
                text={card.text}
                handleClick={() => remove(idx)}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
