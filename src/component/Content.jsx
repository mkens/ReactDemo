import React, { Component } from "react";
import AddNew from "./crud-component/AddNew";
import EditCustomer from "./crud-component/EditCustomer";
import CustomerList from "./crud-component/CustomerList";
import { Switch, Route } from 'react-router-dom'; 
import ContactUs from "./ContactUs";

class Content extends Component {
  state = {};
  render() {
    return (
      <div className="content-wrapper">
        {/* <AddNew></AddNew> */}
        {/* <CustomerList></CustomerList> */}
        <Switch>
            <Route exact path="/AddNew" component={AddNew} />
            <Route path="/EditCustomer/:id" component={EditCustomer} />
            <Route path="/CustomerList" component={CustomerList} />
            <Route path="/ContactUs" component={ContactUs} />
        </Switch>
      </div>
    );
  }
}

export default Content;
