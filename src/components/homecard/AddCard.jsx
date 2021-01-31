import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './AddCard.css';


function Homecard(props) {

  return (
    <Button className="button" onClick={props.handleClick}>Add New Card</Button>
  );
}

export default Homecard;