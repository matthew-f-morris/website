import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import HomeCard from './homecard/HomeCard';
import { Row, Col } from 'react-bootstrap';
import { StoreContext } from '../store';
import { useHistory } from 'react-router-dom';

function Home() {
  const history = useHistory();
  const { state } = React.useContext(StoreContext);
  console.log("test ", state.user)

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
    <div>
      <Container>
        <Row>
          {cards.length > 0
            ? cards.map((card, idx) => (
              <Col xs={12} md={4} key={card.id}>
                <HomeCard
                  title={card.title}
                  text={card.text}
                  handleClick={() => remove(idx)}
                />
              </Col>))
            : <div>{"8======> --"}</div>
          }
        </Row>
      </Container>
    </div>
  );
}

export default Home;