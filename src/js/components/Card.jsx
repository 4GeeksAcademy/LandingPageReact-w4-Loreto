import React from "react";
import PropTypes from "prop-types";


const Card = (props) => {
    return (
        <div className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm d-flex flex-column">
                <img className="card-img-top" src={props.image} alt="Card image cap" />
                <div className="card-body d-flex flex-column">
                    <h5 className="card-title text-center">{props.title}</h5>
                    <p className="card-text flex-grow-1">{props.text}</p>
                    <a href={props.hrefLink} className="btn btn-primary mt-auto">{props.buttonLabel}</a>
                </div>
            </div>
        </div>
    );
}

Card.propTypes = {

    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    hrefLink: PropTypes.string,
    buttonLabel: PropTypes.string,
}

export default Card;