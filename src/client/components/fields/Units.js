import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPropertyItem } from "../../common/store";
import Unit from "./Unit"

const Units = (props) => {
    const dispatch = useDispatch();
    const { id } = props;
    const units = useSelector((state) => state.property.units) || [];

    const onChangeHandler = (value) => {
        const result = [...units];
        const ind = result.findIndex(i => i.id === value.id);
        result[ind] = value;
        dispatch(setPropertyItem({ units: result }));
    }

    const onAddHandler = () => {
        const result = [...units];
        let id = 0;
        if (result && result.length) {
            id = Math.max(...result.map(i => i.id)) + 1;
        }
        result.push({ id, lotAlpha: "", floor: "", type: "" });
        dispatch(setPropertyItem({ units: result }));
    }

    const onDeleteHandler = (id) => {
        const result = [...units];
        const ind = result.findIndex(i => i.id === id);
        if (ind !== -1) {
            result.splice(ind, 1);
        }
        dispatch(setPropertyItem({ units: result }));
    }

    return (
        <div style={{width: "90%", margin: "10px auto" }}>
        <div className="add"><div>Units</div> <div className="cursor" onClick={onAddHandler}>	&#x2B; add</div></div>
        <table style={{ borderTop: "solid 1px"}}>
            <tbody>
                <tr>
                    <td>{units.map(i => (
                        <Unit
                            key={`unit-${id}-${i.id}`}
                            unit={i}
                            onChange={onChangeHandler}
                            onDelete={onDeleteHandler} />
                    ))}</td>
                </tr>
            </tbody>
        </table>
        </div>       
    )
}

export default Units;