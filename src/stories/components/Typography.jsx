import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

export const ListGroupExample = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>something</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default ListGroupExample;
