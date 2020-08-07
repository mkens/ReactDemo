import React, { Component } from "react";
import { Link } from 'react-router-dom'; 


class Sidebar extends Component {
  state = {};
  render() {
    return (
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        <a href="#" className="brand-link">
          <span className="brand-text font-weight-light">React CRUD</span>
        </a>

        <div className="sidebar">
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image"></div>
            <div className="info">
              <a href="#" className="d-block">
                Alexander Pierce
              </a>
            </div>
          </div>

          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              <li className="nav-item has-treeview menu-open">
                <ul className="nav nav-treeview">
                  <li className="nav-item">
               
                         <Link to={"/CustomerList"} className="nav-link active">
                         Dashboard{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                  
                    <Link to={"/AddNew"} className="nav-link">
                      Add Customer{" "}
                    </Link>
                  </li>
                  <li className="nav-item">
                  
                  <Link to={"ContactUs"} className="nav-link">
                    Contact Us{" "}
                  </Link>
                </li>
                </ul>
              </li>
            </ul>
          </nav>
        
        </div>
      </aside>
    );
  }
}

export default Sidebar;
