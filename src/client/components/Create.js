import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { noteTypes } from "../common/codes";
import { useDispatch } from "react-redux";
import { setNote } from "../common/store";
import Fields from "./fields/Fields";

const Create = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const onSubmitHandler = (values) => {
        axios.post(`${process.env.API_URL}/api/properties`, { ...values })
            .then(res => {
                navigate("/");
            })
            .catch((err) => {
                dispatch(setNote({ msg: err.response.data.msg, type: noteTypes.error }));
                console.log(err.response.data);
            });
    }
    return <Fields onSubmit={onSubmitHandler} />
}

export default Create;