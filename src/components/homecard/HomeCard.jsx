import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './HomeCard.css'
import background from '../../images/cardbackground.png';

function homecard(props) {

  return (
    <Card>
      <Card.Img src={background} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <Button variant="danger" onClick={props.handleClick}>Delete</Button>
        </Card.Body>
      </Card.ImgOverlay >
    </Card>
  );
}

export default homecard;