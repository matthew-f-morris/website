import React, { useState } from 'react';
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

  const [cards, setCards] = useState(() => {
    const temp = [];
    for (let i = 0; i < 10; i++) {
      temp.push({
        id: i,
        title: 'Hello',
        text: i
      })
    }
    return temp;
  });

  const remove = (id) => {
    var newList = [...cards];
    newList.splice(id, 1);
    setCards(newList);
  }

  return (
    <div className="page">
      <Container fluid={true} >
        <Row>
          <Col className="display-user">Hi {firebase.auth().currentUser.email}</Col>
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
