import React, { Component } from "react";
import {
  Card,
  CardBody,
  CardTitle,  
  CardText,
  Button,
} from "reactstrap";

class ContectInner extends Component {
    constructor(props){
        super(props);

       
    }

    componentDidMount() {
        console.log("Start Inn")
    }
  
    componentWillUnmount() {
        console.log("End Inn")
    }

  render() {
    return (
      <div>
        <Card>
          
          <CardBody>
            <CardTitle>{this.props.CTitle}</CardTitle>
         
            <CardText>
           {this.props.CText}
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default ContectInner;
