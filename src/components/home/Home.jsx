import React, { useEffect } from 'react';
import HomeCard from '../homecard/HomeCard';
import CardCreate from './CardCreate';
import { Button, CardColumns } from 'react-bootstrap';
import { StoreContext } from '../../store';
import { useHistory } from 'react-router-dom';
import './Home.css';

function Home() {
  const history = useHistory();
  const { state } = React.useContext(StoreContext);

  if (!state.user) history.push("/login");

  const add = () => {
    let newCards = [...state.cards];
    newCards.push({
      text: 'please',
      title: 'sucurnan',
      id: Date.now()
    });
    state.firebaseApp.firestore().collection("cards").doc('cardData').update({
      data: newCards
    });
  }

  const remove = (idx) => {
    let newCards = [...state.cards];
    newCards.splice(idx, 1);
    state.firebaseApp.firestore().collection("cards").doc('cardData').update({
      data: newCards
    });
  }

  return (
    <div className="page">

      <CardCreate />
      {state.cards.length !== 0 && <CardColumns className="cols">
        {state.cards.map((card, idx) => (
          <HomeCard
            key={idx}
            title={card.title}
            text={card.text}
            handleClick={() => remove(idx)}
          />
        ))}
      </CardColumns>}
    </div>
  );
}

export default Home;

{/* <Row>
{firebase.auth().currentUser && <Col className="display-user">Hi {firebase.auth().currentUser.email}</Col>}
</Row> */}