import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Note from "./components/Note";
import Properties from "./components/Properties";
import Edit from "./components/Edit";
import Create from "./components/Create";
import { getRegions ,getManager, getProperties } from "./common/store";
import {theme} from "./styling/theme";
import { Styles } from './styling/styles';

const App = () => {
    const dispatch = useDispatch();
    const regions = useSelector((state) => state.regions);

    useEffect(() => {
        dispatch(getRegions());
    }, [])

    // there should be error handling if API call is not successful
    // behavior depends on business logic, more requirements are needed
    if (!regions.length) return 'loading...';

    return (
        <ThemeProvider theme={theme}>
            <Styles/>
            <Note />
            <Routes>
                <Route
                    key={'home'}
                    path={'/'}
                    element={<Properties />}
                />
                <Route
                    key={'edit'}
                    path={'/create/'}
                    element={<Create />}
                />
                <Route
                    key={'edit'}
                    path={'/edit/:id'}
                    element={<Edit />}
                />
            </Routes>
        </ThemeProvider>
    )
}

export default App;