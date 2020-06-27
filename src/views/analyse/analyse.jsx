import React , {useState} from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
import {Transition} from "react-transition-group"

import Request from "../../components/requestHandler/requestHandler";
import { Table } from "react-bootstrap";
import Loader from "react-loader-spinner";
import PanelHeader from "../../layouts/PanelHeader/PanelHeader"
import Backdrop from "../../components/UI/Backdrop/Backdrop.jsx";
import { thead } from "variables/general";
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import { connect } from "react-redux";
import Example from "./new";
const FARMERS_QUERY = gql`
query($role:String!,$crop:String!,$category:String!){
  farmers(role:$role,crop:$crop,category:$category){
    first_name
    last_name
    phone
    avg_rating
    ratings
    complaints
    }
}

`

const Analytics = React.memo(props => {
// console.log(props)
//   const { data, error, loading } = useQuery(FARMERS_QUERY, {
//     variables: { role: 'Farmer', crop: props.crop, category: props.category }
//   });
const [show,toggleShow] = useState(false);
const error = false;
const loading = false;

  const selectionHandler = (itemId) => {
    toggleShow(true);
  }
const modalClose = ()=>{
    toggleShow(false);
}


  if (error) {
    console.log(error);
    return <p>...........</p>
  }

  return (
    <div>
         {
          show === true ? <Backdrop show={show} close={modalClose}/>:null
        }
      <PanelHeader size="sm" />
      <div className="content">
        <Row>
          <Col xs={12}>
            <Card style={{ height: "max-content" }}>
              <CardHeader>
                <CardTitle tag="h5">Business Analytics</CardTitle>
              </CardHeader>
              <CardBody>
              <Example/>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

      <Transition
          mountOnEnter
          unmountOnExit
          in={show}
          timeout={200}
        >
          {(state) => (<Request  show={state} close={modalClose} />)}
        </Transition>


    </div>
  );

});
const mapStateToProps = state => ({
  crop: state.crop.selectedCrop,
  category: state.crop.cropQuality
});
export default connect(mapStateToProps)(Analytics);
