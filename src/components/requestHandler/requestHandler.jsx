import React ,{useState} from "react";
import { Button } from "@material-ui/core"
import "./requestHandler.css";
const request = (props) => {
    const [value,setValue] = useState("");
    const submitHandler = (e)=>{
        console.log(value);
        props.close();
    }
    const style = {
        display: props.show === "exiting" || props.show === "exited" || props.show === "entering" ? "none" : "block"
    }
    const buttonStyle = {
        display: props.show === "exiting" || props.show === "exited" || props.show === "entering" ? "none" : "block",
        position: "relative", top: "0.7rem", left: "32rem"

    }
    let classes;
    if (props.show === 'entering') {
        classes = 'mailer mailer-show'
    } else if (props.show === 'exiting') {
        classes = 'mailer-hide mailer'
    } else {
        classes = "mailer";
    }

    return (
        <div className={classes}>


            <textarea style={style} onChange={(event)=>setValue(event.target.value)} className="text-container" rows={10} cols={62} />
            <div style={buttonStyle}>
                <Button onClick={submitHandler} variant="contained" color="secondary">
                    Send
                </Button>
            </div>
        </div>
    )
}

export default request;