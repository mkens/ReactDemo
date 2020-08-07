import React, { Component } from "react";
import CustomerTr from "./customerTr";
import axios from "axios";



class CustomerList extends Component {
    constructor(props) {  
        super(props);  
        this.state = {business:[]};
        }  



  componentDidMount(){  
 
    axios.get('http://localhost:44307/Api/Customer')  
      .then(response => {  
        this.setState({ business: response.data });  
        debugger;  

      })  
      .catch(function (error) {  
        console.log(error);  
      })  
  }  
  
  tabRow(){  
   return this.state.business.map(function(object, i){       
       return <CustomerTr obj={object} key={i} ></CustomerTr>;      
     });         
  } 
  
  render() {
    return (      
      <div >
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>List of All Customers</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">
                    List of all Customers
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
        <section className="content">
          <div className="container-fluid">
            <div className="row">
            <div className="col-12">
            <div className="card">
              <div className="card-header">
                <h3 className="card-title">Fixed Header Table</h3>
                <div className="card-tools">
                  <div className="input-group input-group-sm" >
                    <input type="text" name="table_search" className="form-control float-right" placeholder="Search"></input>

                    <div className="input-group-append">
                      <button type="submit" className="btn btn-default"><i className="fas fa-search"></i></button>
                    </div>
                  </div>
                </div>
              </div>            
              <div className="card-body table-responsive p-0" >
                <table className="table table-head-fixed text-nowrap">
                  <thead>
                    <tr>
                      <th>CID</th>
                      <th>User Name</th>
                      <th>Email</th>
                      <th>Mobile No</th>
                      <th>Address</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
            <tbody>  
            { this.tabRow() }   
            </tbody>  
          </table>  
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

export default CustomerList;
