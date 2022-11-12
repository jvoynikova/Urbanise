import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getProperty, setNote } from "../common/store";
import { noteTypes } from "../common/codes";

import { useParams } from "react-router-dom";
import Fields from "./fields/Fields";

const Edit = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getProperty(id))
    }, [])

    const onSubmitHandler = (values) => {
        axios.put(`${process.env.API_URL}/api/properties/${id}`, { ...values })
            .then(res => {
                navigate("/");
            })
            .catch((err) => {
                dispatch(setNote({ msg: err.response.data.msg, type: noteTypes.error }));
                console.log(err.response.data);
            });
    }

    return <Fields onSubmit={onSubmitHandler} id={id} />
}

export default Edit;