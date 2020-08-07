import React, { Component } from "react";
import axios from "axios";
import {
  Input  
} from "reactstrap";


class AddNew extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      CID: "",
      Name: "",
      Password: "",
      Email: "",
      Mobile: "",
      Address: "",
    };
   
  }

 
  AddCustomer = () => {
    // alert("test");
    
    //this.props.history.push('/CustomerList') 
    axios
      .post("http://localhost:44307/api/customer", {
        Cid: this.state.CID,
        Name: this.state.Name,
        Password: this.state.Password,
        Email: this.state.Email,
        Mobile: this.state.Mobile,
        Address: this.state.Address,
      })
      .then((json) => {
        if (json.data.Status === "Success") {
          alert("Inserted Successfully");
          this.history.push("/CustomerList");
        } else {
          alert("There is some error !!!");
        }
      });
  };

  handleChange= (e)=> {  
    this.setState({[e.target.name]:e.target.value});  
    }

  render() {
    return (
      <div >
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Add New </h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">Add New</li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6">
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">Add New</h3>
                  </div>
                  <div className="card-body">
                  <div className="form-group">
                      <label htmlFor="cid">CID</label>
                      <Input
                        type="text"
                        name="Cid"
                        className="form-control"
                        id="cid"
                        placeholder="Customer Id"
                        onChange={this.handleChange}
                        value={this.state.Cid}
                      ></Input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="Name">Customer Name</label>
                      <Input
                        type="text"
                        name="Name"
                        className="form-control"
                        id="Name"
                        placeholder="Customer Name"
                        onChange={this.handleChange}
                        value={this.state.Name}
                      ></Input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="custPassword">Customer Password</label>
                      <Input
                        type="text"
                        name="Password"
                        className="form-control"
                        id="custPassword"
                        placeholder="Customer Password"
                        onChange={this.handleChange}
                        value={this.state.Password}
                      ></Input>
                    </div>
                    <div className="form-group">
                      <label htmlFor="custEmail">Customer Email</label>
                      <Input
                        type="text"
                        name="Email"
                        className="form-control"
                        id="custEmail"
                        placeholder="Customer Email"
                        onChange={this.handleChange}
                        value={this.state.Email}
                      ></Input>
                      <div className="form-group">
                        <label htmlFor="custMobile">Customer Mobile</label>
                        <Input
                          type="text"
                          name="Mobile"
                          className="form-control"
                          id="custMobile"
                          placeholder="Customer Mobile"
                          onChange={this.handleChange}
                          value={this.state.Mobile}
                        ></Input>
                        <div className="form-group">
                          <label htmlFor="custAddress">Customer Address</label>
                          <Input
                            type="text"
                            name="Address"
                            className="form-control"
                            id="custAddress"
                            placeholder="Customer Address"
                            onChange={this.handleChange}
                            value={this.state.Address}
                          ></Input>
                        </div>
                      </div>
                    </div>

                    <div className="card-footer">
                      <button
                        type="submit"
                        className="btn btn-primary"
                        onClick={this.AddCustomer}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default AddNew;
