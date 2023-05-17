import Card from 'react-bootstrap/Card';
import './Colors.css';

export const ColorsExample = ({wcag, number, hexcode}) => {
  return (
    <Card style={{ width: '18rem', backgroundColor: hexcode }}>
      <Card.Body>
        <Card.Title>{wcag}</Card.Title>
      </Card.Body>
      <Card.Body>
        <Card.Text>{number}</Card.Text>
        <Card.Text>{hexcode}</Card.Text>
      </Card.Body>
    </Card>
  );
}; 

export default ColorsExample;
