import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './HomeCard.css'

function homecard(props) {

  return (
    <Card className="home-card">
      <Card.Body className="home-card-body">
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.text}</Card.Text>
        <Button variant="danger" onClick={props.handleClick}>Delete</Button>
      </Card.Body>

    </Card>
  );
}

export default homecard;