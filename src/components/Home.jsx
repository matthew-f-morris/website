import Navbar from './navbar/Navbar';
import Container from 'react-bootstrap/Container';
import HomeCard from './homecard/HomeCard';
import CardColumns from 'react-bootstrap/CardColumns';

function Home() {
  const cards = Array(10).fill({
    title: 'Hello',
    text: 'Help meeeee!'
  });

  const listCards = cards.map((card) => <HomeCard title={card.title} text={card.text} />)

  return (
    <div>
      <Navbar />
      <Container>
        <CardColumns>
          {listCards}
        </CardColumns>
      </Container>
    </div>
  );
}

export default Home;