import React from 'react';
import './Search.css';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';



const Search = (props) => {
 
  const searchType = () => {
   
    return (
      <Row>
        <Col>
          <div>
            Search by Title</div>
        </Col>
        <Col>
          <div >
            Search by Author</div>
        </Col>
      </Row>
    );
  };

  return (
    <>
      <Container>
        
        <Form>
          <Form.Control size="sm"
            
            type="text" placeholder="Ex"/>
        </Form>
      </Container>
      <Button 
      className="button" type="submit">Submit</Button>
    </>
  );
};

export default Search;