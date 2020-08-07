import React, { Component } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

class CustomerTr extends Component {
    constructor(props) {  
        super(props);  
        
        }  
        
  DeleteCustomer= () =>{  
    axios.delete('https://localhost:44307/Api/Customer/Delete?id='+this.props.obj[1]._value)  
   .then(json => {  
     debugger;
   if(json.data.Status ==='Delete'){  
   alert('Record deleted successfully!!');  
   }  
   })  
   }  

    render() { 
   
  
      
      return ( 
     
        <tr>  
          <td>  
          {this.props.obj[1]._value}            
          </td>  
          <td>  
            {this.props.obj[2]._value}  
          </td>  
          <td>  
          {this.props.obj[3]._value}  
          </td>  
          <td>  
          {this.props.obj[4]._value}  
          </td>  
          <td>  
          {this.props.obj[5]._value}  
          </td>  
          <td>  
          <Link to={"/EditCustomer/"+this.props.obj[1]._value} className="btn btn-success">Edit</Link>          
          </td>  
          <td>  
            <button type="button" onClick={this.DeleteCustomer} className="btn btn-danger">Delete</button>  
          </td>  
        </tr>  
        );  
     // })}
    }
    
}
 
export default CustomerTr;