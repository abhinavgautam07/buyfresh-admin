import React from "react";
import {Row, Col } from "reactstrap";
import "./userpage.css";
import {Table} from "react-bootstrap";
import {Transition} from "react-transition-group"
import Menu from "../../components/menuDots/menu.jsx";
import Backdrop from "../../components/UI/Backdrop/Backdrop.jsx";
import Mailer from "../../components/menuDots/mail.jsx";
import FarmerChart from '../../components/charts/farmersChart';
// import { getfirebase } from "../../firebase";



class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user:null,
      show:false,
      actionType:null
    }
  }
  modalClose= ()=>{
    this.setState({
      show:false
    })
  }
  modalOpen = (type)=>{
    this.setState({
      show:true,
      actionType:type
    });
  }
  render() {
    return (
      <div>
      
        {
          this.state.show === true ? <Backdrop show={this.state.show} close={this.modalClose}/>:null
        }
        <div className="content">
          <Row>

            <Col md={5} xs={12}>
              <div className="card-container">


                <div className = "profile-info">

                  <img alt="profile" className="profile-image" src={require("../../assets/img/farmer.png")} />
                  <div className = "profile-details">
                    <span>
                      <b>Name: </b><i>Mr. Kisan</i>
                    </span>
                  <br/>
                    <span>
                      <b>Age: </b><i>42</i>

                    </span>
                    
                    <br />
                    <span>
                      <b>District: </b><i>Dehradun</i>

                    </span>

                  </div>
                </div>
                <div className = "chart-container" >
        <h4>PRODUCES</h4>

                  <FarmerChart />
                </div>


              </div>
            </Col >
            <Col md={7} xs={12}>
              <h4 style={{marginTop:"1.1rem",paddingLeft:"9rem",display:"inline"}}>Complaints</h4>
              <Menu open={this.modalOpen}/>
            <Table className="table-width" striped={true} borderless={true} responsive="md" style={{overflowX:'hidden'}}>
                    <thead className="text-primary">
                      <tr style={{textAlign:'center'}}>
                      </tr>
                    </thead>
                    <tbody>
                    <tr>
                     <td>
                         the product was not fresh as always
                       </td>
                     </tr><tr>
                     <td>
                         the product was not fresh as always
                       </td>
                     </tr><tr>
                     <td>
                         the product was not fresh as always
                       </td>
                     </tr><tr>
                     <td>
                         the product was not fresh as always
                       </td>
                     </tr><tr>
                     <td>
                         the product was not fresh as always
                       </td>
                     </tr><tr>
                     <td>
                         the product was not fresh as always
                       </td>
                     </tr><tr>
                     <td>
                         the product was not fresh as always
                       </td>
                     </tr><tr>
                     <td>
                         the product was not fresh as always
                       </td>
                     </tr><tr>
                     <td>
                         the product was not fresh as always
                       </td>
                     </tr>
                    </tbody>
                  </Table>
            </Col>

          </Row>
        </div>
        <Transition
          mountOnEnter
          unmountOnExit
          in={this.state.show}
          timeout={200}
        >
          {(state) => (<Mailer type={this.state.actionType} show={state} close={this.modalClose} />)}
        </Transition>
      </div>
    );
  }
}

export default User;
