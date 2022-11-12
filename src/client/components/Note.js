import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNote } from "../common/store";

const Note = () => {
    const dispatch = useDispatch();
    const note = useSelector((state) => state.note);
    useEffect(() => {
        if (note.msg) {
            let timer = setTimeout(function () {
                dispatch(setNote({ msg: null, type: null }))
            }, 1500);
            return () => {
                clearTimeout(timer);
            };
        }

    }, [note.msg])

    return (
        note.msg &&
        <div className={`note ${note.type}`}>
            {note.msg}
        </div>
    )
}

export default Note;