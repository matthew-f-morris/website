import React, { useState } from 'react';
import Navbar from './navbar/Navbar';
import Container from 'react-bootstrap/Container';
import HomeCard from './homecard/HomeCard';
import CardColumns from 'react-bootstrap/CardColumns';

function Home() {

  const cards = Array(10).fill({
    id: 0,
    title: 'Hello',
    text: 'Help meeeee!'
  })

  const remove = (id) => {
    console.log("here");
    var newList = [...list];
    newList.splice(id, 1);
    setList(newList);
  }

  console.log(cards);
  const initlist = cards.map((card) => <HomeCard key={card.id++} title={card.title} text={card.text} handleClick={remove} />)
  const [list, setList] = useState(initlist);



  return (
    <div>
      <Navbar />
      <Container>
        <CardColumns>
          {list}
        </CardColumns>
      </Container>
    </div>
  );
}

export default Home;