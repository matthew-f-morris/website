import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './HomeCard.css'
import background from '../../images/cardbackground.png';

function homecard(props) {

  return (
    <Card>
      <Card.Img src={background} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Header>
          <div className="title">{props.title}</div>
          <div className="delete"><Button variant="danger" onClick={props.handleClick}>Delete</Button></div>
        </Card.Header>
        <Card.Body>
          <Card.Text>{props.text}</Card.Text>
        </Card.Body>
      </Card.ImgOverlay >
    </Card>
  );
}

export default homecard;