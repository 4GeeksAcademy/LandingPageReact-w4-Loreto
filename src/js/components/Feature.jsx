import React from "react";
import PropTypes from "prop-types";


const Feature = (props) => {
    return (
        <div className="col-md-6 mb-4">
            <div className="p-4 border rounded bg-light h-100">
                <h4 className="text-primary">{props.text}</h4>
                <p>{props.message}</p>
                {/* <span className="fs-2">{props.icon}</span> */}
                <i className={props.icon}></i>
            </div>
        </div>
    );

}


Feature.propTypes = {
    text: PropTypes.string,
    message: PropTypes.string,
    icon: PropTypes.string
}

export default Feature;