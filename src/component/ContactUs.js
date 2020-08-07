import React, { Component } from 'react';   

import ContactInner from './ContactInner';
import { Container, Row, Col } from 'reactstrap';

class ContactUs extends Component {
    state = { 
        CTitle:'Sample Title',
        CText:'Some quick example text to build on the card title and make up the bulk of the cards content.111'

     }
     
    componentDidMount() {
        console.log("Start")
    }
  
    componentWillUnmount() {
        console.log("End")
    }

    handleClickOnSubmit =() =>{
        alert("this");
    }
    render() { 
        return ( 
            <div>
                <h1>
              Contact Us </h1>
              <Container>
                  <Row sm='12'>
                      <Col sm='6'>
                      <ContactInner 
                      CTitle={this.state.CTitle} 
                      CText={this.state.CText}
                       ></ContactInner>
                      </Col>
                  </Row>
              </Container>
              
             
            </div>
         );
    }
}
 
export default ContactUs;