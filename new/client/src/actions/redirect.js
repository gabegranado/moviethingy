import React from 'react';
import { Button, Card, CardBody, CardGroup, Col, Container, Input, InputGroup, InputGroupAddon, InputGroupText, Row, NavLink  } from 'reactstrap';
import { useNavigate } from "react-router-dom";
function LoginLayout() {
  
//   const history = useNavigate();
    const navigate = useNavigate();

  
  const routeChange = () =>{ 
    navigate('/App')
    // let path = `newPath`; 
    // history.push('/');
  }

  return (
      <div className="app flex-row align-items-center">
        <Container>
          ...
          <Row>
            <Col xs="6">                      
              <Button color="primary" className="px-4"
                onClick={routeChange}
                  >
                  Login
                </Button>
            </Col>
            <Col xs="6" className="text-right">
              <Button color="link" className="px-0">Forgot password?</Button>
            </Col>
          </Row>
          ...
        </Container>
      </div>
  );
}
export default LoginLayout;