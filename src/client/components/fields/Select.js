import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPropertyItem } from "../../common/store";

const Select = (props) => {
    const dispatch = useDispatch();
    const { name, options, id } = props;
    const item = useSelector((state) => state.property[name]);

    const onChange = (event) => {
        const result = {};
        result[name] = Number(event.target.value);
        dispatch(setPropertyItem(result));
    }

    return (
        <select value={item || ""} onChange={onChange}>
            {!id && <option value=""></option>}
            {options.map(opt => (
                <option
                    key={opt.id}
                    value={opt.id}>
                    {opt.name}
                </option>))}
        </select>
    )
}

export default Select;