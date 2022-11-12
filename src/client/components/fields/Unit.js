import React from "react";

const Unit = (props) => {
    const { unit, onChange, onDelete } = props;

    const onChangeHandler = (event) => {
        // just example that some kind of validation is needed
        if (event.target.name === "lotAlpha" || event.target.name === "floor") {
            if (!event.target.value.match(/^\d*$/)) {
                return;
            }
        }
        const result = { ...unit };
        result[event.target.name] = event.target.value;
        onChange(result);
    }

    const onDeleteHandler = () => {
        onDelete(unit.id);
    }

    return (
            <div className="unit">
                <div>
                <span>lotAlpha: </span>
                    <input type="text" name="lotAlpha" value={unit.lotAlpha} onChange={onChangeHandler} />
                </div>
                <div>
                <span>floor: </span>
                    <input type="text" name="floor" value={unit.floor} onChange={onChangeHandler} />
                </div>
                {/* Probably should be a list, but no API is provided */}
                <div>
                <span>type: </span>
                    <input type="text" name="type" value={unit.type} onChange={onChangeHandler} />
                </div>
                <div className="unit-label cursor" onClick={onDeleteHandler}>
                    &#10006;
                </div>
            </div>
    )
}

export default Unit;