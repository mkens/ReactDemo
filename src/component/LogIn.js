import React, { Component } from "react";
import axios from "axios";

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Cid: "",
      Name: "",
      Email: "",
      Password: "",
      msg :""
      
    };
   
  }
 
  onEmailChange = (e) => {
    this.setState({ Email: e.target.value });
  };
  onPasswordChange = (e) => {
    this.setState({ Password: e.target.value });
  };
  onSubmitClick = (e) => {

    debugger;
  
    axios
      .get(
        "http://localhost:44307/Api/Customer/CheckCustomerLogin?Email=" +
          this.state.Email +
          "&password=" +
          this.state.Password
      )
      .then((response) => {
        debugger;
        if(response.data){
        this.setState({
          Cid: response.data.Cid,
          Name: response.data.Name         
        });      
       
        this.props.setLoginDetailProps(response.data);              

      }else{this.setState({msg:"Oops, Check your credentials again !!"});
    }
  });
  };

  render() {
    return (
      <div className="hold-transition login-page">
        <div className="login-box">
          <div className="login-logo">
             <a href="#">
              <b>Stemmons</b>Co.
            </a>
          </div>

          <div className="card">
            <div className="card-body login-card-body">
              <p className="login-box-msg">Sign in to start your session</p>

              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={this.state.Email}
                  onChange={this.onEmailChange}
                ></input>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-envelope"></span>
                  </div>
                </div>
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={this.state.Password}
                  onChange={this.onPasswordChange}
                ></input>
                <div className="input-group-append">
                  <div className="input-group-text">
                    <span className="fas fa-lock"></span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                <label for="remember">
                {this.state.msg}
              </label>
                
                </div>
              </div>
              <div className="col-4">
                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  onClick={this.onSubmitClick}
                >
                  Sign In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;
