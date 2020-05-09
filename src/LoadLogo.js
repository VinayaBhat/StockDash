import React from "react";
import './LoadLogo.css';

const LoadLogo = ({
    url
}) => {

    return (
        <div className="d-flex justify-content-center ">
            <img src={url} alt="Company Logo"></img>
      </div>
    )
}
export default LoadLogo;




