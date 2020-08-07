import React, { Component } from 'react';
import axios from 'axios';
import {Input} from 'reactstrap';

class EditCustomer extends Component {
  constructor(props) {  
    super(props)  
   
   this.state = {       
    Cid: '',
    Name:'',
    Password:'',
    Email: '',
    Mobile:'',
    Address: ''  }

  }
   
   componentDidMount() {  
   
     console.log(this.props.Cid);
     
    axios.get('https://localhost:44307/Api/Customer/CustomerdetailById?id='+this.props.match.params.id)//'+this.props.match.params.CId)  
        .then(response => {  
          debugger;
            this.setState({   
                Cid: response.data.Cid,
                Name: response.data.Name,
                Password: response.data.Password,
                Email: response.data.Email,
                Mobile: response.data.MobileNo,
                Address: response.data.Address, });  

        })  
        .catch(function (error) {  
            console.log(error);  
        })  
  }  

  onChangeName = (e) => {  
    this.setState({  
        Name: e.target.value  
    });  
  }  
  onChangeEmail=(e) =>{  
    this.setState({  
        Email: e.target.value  
    });  
  }  
  onChangeMobile=(e) => {  
    this.setState({  
      Mobile: e.target.value  
    });  
  }  
  onChangeAddress=(e)=> {  
    this.setState({  
      Address: e.target.value  
    });  
  } 

  onSubmit=(e) =>{  
    debugger;  
    e.preventDefault();  
   console.log(this.state.Cid);
    const obj = {  
        Cid: this.state.Cid,
        Name: this.state.Name,
        Password: this.state.Password,
        Email: this.state.Email,
        MobileNo: this.state.Mobile,
        Address: this.state.Address,
  
    };  

    axios.put('https://localhost:44307/Api/Customer', obj)  
        .then(res => console.log(res.data));  
        debugger;  
        this.props.history.push('/CustomerList')  
  }  

    render() { 
        return (   <div >
            <section className="content-header">
              <div className="container-fluid">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1>Edit Customer </h1>
                  </div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item">
                        <a href="#">Home</a>
                      </li>
                      <li className="breadcrumb-item active">Edit Customer</li>
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
                        <h3 className="card-title">Edit Customer</h3>
                      </div>
                      <div className="card-body">
                      <div className="form-group">
                          <label htmlFor="cid">CID</label>
                          <Input
                            type="text"
                            name="Cid"
                            className="form-control"
                            id="Cid"
                            disabled
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
                            onChange={this.onChangeName}
                            value={this.state.Name}
                          ></Input>
                        </div>                
                        <div className="form-group">
                          <label htmlFor="custEmail">Customer Email</label>
                          <Input
                            type="text"
                            name="Email"
                            className="form-control"
                            id="Email"
                            placeholder="Customer Email"
                            onChange={this.onChangeEmail}
                            value={this.state.Email}
                          ></Input>
                          <div className="form-group">
                            <label htmlFor="custMobile">Customer Mobile</label>
                            <Input
                              type="text"
                              name="Mobile"
                              className="form-control"
                              id="Mobile"
                              placeholder="Customer Mobile"
                              onChange={this.onChangeMobile}
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
                                onChange={this.onChangeAddress}
                                value={this.state.Address}
                              ></Input>
                            </div>
                          </div>
                        </div>
    
                        <div className="card-footer">
                          <button
                            type="submit"
                            className="btn btn-primary"
                            onClick={this.onSubmit}
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
          </div>  );
    }
}
 
export default EditCustomer;