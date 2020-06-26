import React ,{useState} from "react";
import { Button } from "@material-ui/core"
import "./requestHandler.css"; 
const request = (props) => {
    const submitHandler = (e)=>{
        props.close();
    }
    const style = {
        display: props.show === "exiting" || props.show === "exited" || props.show === "entering" ? "none" : "block"
    }
    const buttonStyle = {
        display: props.show === "exiting" || props.show === "exited" || props.show === "entering" ? "none" : "flex",
        position: "relative", top: "0.7rem", left: "24rem",justifyContent:"space-between",width:"32%"

    }
    let classes;
    if (props.show === 'entering') {
        classes = 'Request Request-show'
    } else if (props.show === 'exiting') {
        classes = 'Request-hide Request'
    } else {
        classes = "Request";
    }

    return (
        <div className={classes}>


            <textarea value="I am sorry" readOnly style={style} className="text-container" rows={10} cols={62} />
            <div style={buttonStyle}>
                <Button variant="contained" color="primary">Accept</Button>
                <Button onClick={submitHandler} variant="contained" color="secondary">
                    Reject
                </Button>
            </div>
        </div>
    )
}

export default request;