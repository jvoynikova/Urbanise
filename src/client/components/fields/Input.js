import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPropertyItem } from "../../common/store";

const Input = (props) => {
    const dispatch = useDispatch();
    const { name } = props;
    const item = useSelector((state) => state.property[name]);
    const onChange = (event) => {
        const result = {};
        result[name] = event.target.value;
        dispatch(setPropertyItem(result));
    }

    return (
        <input type="text" value={item || ""} onChange={onChange} />
    )
}

export default Input;