import { createGlobalStyle } from "styled-components";
export const Styles = createGlobalStyle`

*::after,
*::before {
    box-sizing: border-box;
}

html,
body {
    font-family: Trebuchet MS, sans-serif;
}

input,
select {
    height: 30px;
    border-radius: 4px;
    ${({theme}) => (`
        color : ${theme.primary};
        border: 1px solid ${theme.primary};
    `)};
}

button {
    cursor: pointer;
    outline: 0;
    box-shadow: none;
    background-color: #FFF;
    width: 100px;
    height: 30px;
    border-radius: 4px;
    ${({theme}) => (`
        color : ${theme.primary};
        border: 1px solid ${theme.primary};
        background: ${theme.secondary};
    `)};
}

table {
    width: 100%;
    margin: auto;
    border-spacing: 0px;
    border-collapse: collapse;
    border: none;
    ${({theme}) => (`
        color : ${theme.primary};
    `)};
}

th {
    padding: 10px;
    border-bottom: 1px solid #919191;
    aling: left !important;
}

td {
    border: none;
    padding: 10px;
}

.actions {
    text-align: right;
    margin: 20px 0;
}

.action {
    margin-left: 10px;
    display: inline-block;
}

.cursor {
    cursor: pointer;
}

.link {
    cursor: pointer;
    font-weight: bold;
}

.note {
    position: fixed;
    top: 10;
    left: 40%;
    background: #fff;
    border: solid 1px;
    padding: 10px;
    height: 20px;
    min-width: 200px;
    font-size: 1.2rem;
    text-align: center;
}

.success {
    color: green;
}

.error {
    color: red;
}

.add {
    font-weight: bold;
    display: flex;
    padding: 0 10px;
    justify-content: space-between;
    ${({theme}) => (`
        color : ${theme.primary};
    `)};
}

.unit {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
    font-weight: bold;
}
.label {
    width: 100%;
    text-align: right;
    font-weight: bold;
}

a {
    text-decoration: none;
    color: inherit;
}

input,
select {
    width: 200px;
}`