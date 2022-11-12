import React from "react";

const Regions = (props) => {
    const { options, onChange } = props;
    return (
        <select onChange={(e) => onChange(e.target.value)}>
            <option value={""}>All</option>
            {options.map(option => (<option key={option.id} value={option.id}>{option.name}</option>))}
        </select>
    )
}

export default Regions;