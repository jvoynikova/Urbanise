import React from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { useManager, useRegion } from "../common/hooks";
import { useDispatch } from "react-redux";
import { getProperties, setNote } from "../common/store";
import { noteTypes } from "../common/codes";

const Row = (props) => {
    const dispatch = useDispatch();
    const getRegion = useRegion();
    const getManager = useManager();
    const { property } = props;
    const region = getRegion(property.region)
    const { name: managerName, since: managerSince } = getManager(property.manager);

    const deletePropertyHandler = () => {
        // should have confirmation with modal, "YES, "NO", etc
        axios.delete(`${process.env.API_URL}/api/properties/${property.id}`, {})
            .then(res => {
                dispatch(getProperties());
            })
            .catch((err) => {
                dispatch(setNote({ msg: err.response.data.msg, type: noteTypes.error }));
                console.log(err)
            });
    }

    return (
        <tr>
            <td>{property.name}</td>
            <td>{property.plan}</td>
            <td>{property.units}</td>
            <td>{property.city}</td>
            <td>{region}</td>
            <td>{managerName}</td>
            <td>{managerSince}</td>
            <td>
                {<NavLink to={`/edit/${property.id}`}>&#x0270E;</NavLink>}
                <div className="action link" onClick={deletePropertyHandler}>&#x02702;</div>
            </td>
        </tr>
    )
}

export default Row;