import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getProperties, setNote } from "../../common/store";
import { noteTypes } from "../../common/codes";

const fields = [
    "name", "plan", "city",
    "region", "manager", "previousManager",
    "managementCompany", "planRegistered",
    "address", "account", "abn"
];

const Actions = (props) => {
    const { onSubmit } = props;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const property = useSelector((state) => state.property);
    const properties = useSelector((state) => state.properties);

    const submitHandler = () => {
        // primitive example validation, more needed according to business logic
        // date validation, don't call if nothing changed, uniqe fields, input length, etc.
        const validate = [];
        if (properties.filter(f => f.name === property.name && f.id != property.id).length) {
            validate.push('Name already esists!')
        };

        if (properties.filter(f => f.plan === property.plan && f.id != property.id).length) {
            validate.push('Plan already esists!')
        };

        if (fields.some(f => !Object.keys(property).includes(f)) ||
            Object.values(property).some(f => !f)) {
            validate.push('All fields are required!')
        }

        if (validate.length) {
            dispatch(setNote({ msg: validate.join(" "), type: noteTypes.error }))
            return;
        }
        onSubmit(property);
    }

    const backHandler = () => {
        navigate("/");
    }

    return (
        <div className="actions">
            <div className="action"><button onClick={backHandler}>Back</button></div>
            <div className="action"><button onClick={submitHandler}>Submit</button></div>
        </div>
    )
}

export default Actions;