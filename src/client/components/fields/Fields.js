import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProperties, getManager } from "../../common/store";
import Units from "./Units";
import Input from "./Input";
import Select from "./Select";
import Actions from "./Actions";
import Label from "./Label";

// NB! there is no API to get all managers
// in this case dropdown can only show managers that are already assigned to some property

// Component assums that all fields exist in DB and has values
const Fields = (props) => {
    const dispatch = useDispatch();
    const { id, onSubmit } = props;
    const regions = useSelector((state) => state.regions);
    const managers = useSelector((state) => state.managers);
    const properties = useSelector((state) => state.properties);
    // not ideal, wiil reload the whole page if the value of previousManager is changed
    // needed to take previousManager if not existing in managers list
    // if possible to change API, would at least add this field in GET /api/properties
    // probbly will add API with all managers, in case there is, for example, a new manager
    // who is not assinged yet
    const previousManager = useSelector((state) => state.property.previousManager);

    // in case of refresh of edit page
    // need properties for some FE validations
    // might not need the said validations if all validations are in BE
    // depends on bussines logic and app behaviour
    useEffect(() => {
        if (!properties.length) {
            dispatch(getProperties());
        }
    }, [])

    // in case of refresh
    useEffect(() => {
        if (properties.length) {
            if (properties.length) {
                const manager = properties.map(i => i.manager);
                if (previousManager) {manager.push(previousManager)};
                manager.filter((v, i, a) => a.indexOf(v) === i).forEach(i => {
                    if (!managers.filter(f => f.id === i).length) {
                        dispatch(getManager(i));
                    }
                })
            }
        }
    }, [properties, previousManager])

    const managerOptions = managers.map(i => ({ id: i.id, name: `${i.firstName} ${i.lastName}` }));

    const _Input = (name) => (
        <>
            <td width="20%"><Label text={name} /></td>
            <td width="20%"><Input name={name} /></td>
        </>
    )

    return (
        <div style={{ width: '90%', margin: "auto" }}>
            <h1>Property</h1>
            <table>
                <tbody>
                    <tr>
                        <td width="20%"><Label text="id" /></td>
                        <td width="20%">{id}</td>
                        {_Input("plan")}
                    </tr>
                    <tr>
                        {_Input("name")}
                        {_Input("planRegistered")}
                    </tr>
                    <tr>

                        <td ><Label text={"region"} /></td>
                        <td><Select name="region" options={regions} id={id} /></td>
                        <td ><Label text={"manager"} /></td>
                        <td><Select name="manager" options={managerOptions} id={id} /></td>
                    </tr>
                    <tr>
                        {_Input("city")}

                        <td ><Label text={"previousManager"} /></td>
                        <td><Select name="previousManager" options={managerOptions} id={id} /></td>
                    </tr>
                    <tr>
                        {_Input("address")}
                        {_Input("managementCompany")}
                    </tr>
                    <tr>
                        {_Input("account")}
                        {_Input("abn")}
                    </tr>
                </tbody>
            </table>
            <Units id={id} />
            <Actions onSubmit={onSubmit} />
        </div>
    )
}

export default Fields;