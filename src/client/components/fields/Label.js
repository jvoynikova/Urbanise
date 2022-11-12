import React from "react";
import { getCamelCaseName } from "../../common/utilities";

const Label = ({text}) => {
return (
    <div className="label">{getCamelCaseName(text)}:</div>
)}

export default Label;