import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './AddCard.css';
import background from '../../images/cardbackground.png';

function AddCard(props) {
  return (
    <Card className="add-card">
      <Card.Img src={background} alt="Card image" />
      <Card.ImgOverlay className="add-card">
        <Card.Body className="add-card">
          <Button className="button" onClick={props.handleClick}>Add New Card</Button>
        </Card.Body>
      </Card.ImgOverlay >
    </Card>
  );
}

export default AddCard;