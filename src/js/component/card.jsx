import React from "react";


const Card = (props) => {

    return (
      <div className="card" style= {{width: "18rem"}}>
      <img src={props.src} className="card-img-top" alt="..." style={{width:"286px",height:"150px"}}/>
      <div className="card-body">
        <h5 className="card-title">{props.title} </h5>
        <p className="card-text">{props.text}</p>
        <a className="btn btn-primary">More Info</a>
      </div>
    </div>
    )
}

export default Card;