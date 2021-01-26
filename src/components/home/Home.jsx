import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import HomeCard from '../homecard/HomeCard';
import { Row, Col } from 'react-bootstrap';
import { StoreContext } from '../../store';
import { useHistory } from 'react-router-dom';
import './Home.css';
import homepage from '../../images/homepage.png';

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
      <div className="bg">
        <Container fluid={true} >
          <Row >
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
      </div >
    </div>
  );
}

export default Home;
