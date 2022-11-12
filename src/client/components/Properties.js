import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getManager, getProperties, setProperty } from "../common/store";

import Row from "./Row";
import Regions from "./Regions";

const Properties = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const properties = useSelector((state) => state.properties);
    const regions = useSelector((state) => state.regions);
    const managers = useSelector((state) => state.managers);
    const [rows, setRows] = useState([]);
    const [search, setSearch] = useState("");
    const [bySearch, setBySearch] = useState([]);
    const [region, setRegion] = useState("");
    const [byRegion, setByRegion] = useState([]);

    useEffect(() => {
        dispatch(setProperty({}));
        dispatch(getProperties());
    }, [])
    
    // don't really like this implementation but it seems optimal
    // due to asymcrounous nature of the request if there are made per property ( <Row/>)
    // it can't be garanteed that there wan;t be unneccessary calls to the API for managers
    // that are aloready loaded in client
    // Maybe missing something .....? 
    // would like to disscuss in person
    useEffect(() => {
        if (properties.length) {
            setRows(properties);
            setBySearch(properties);
            setByRegion(properties);

            if (properties.length) {
                const manager = properties.map(i => i.manager).filter((v, i, a) => a.indexOf(v) === i);
                manager.forEach(i => {
                    if (!managers.filter(f => f.id === i).length) {
                        dispatch(getManager(i));
                    }
                })
            }
        }
    }, [properties])

    // requirement are not entirely clear if there should be one or two search boxes
    // and if there is dependancy between two searching and filtering
    // common practice is to have one serach box, so it is implemented this way
    useEffect(() => {
        if (search !== "") {
            let timer = setTimeout(function () {
                const regex = new RegExp(`^.*${search}.*$`, 'gi')
                const bySelf = properties.filter(f => f.name.match(regex) || f.plan.match(regex))
                const result = byRegion.filter(f => f.name.match(regex) || f.plan.match(regex))
                setBySearch(bySelf);
                setRows(result);
            }, 500);
            return () => {
                clearTimeout(timer);
            };
        } else {
            setBySearch(properties);
            setRows(byRegion);
        }

    }, [search])

    useEffect(() => {
        if (region != "") {
            const bySelf = properties.filter(f => f.region.toString() === region);
            const result = bySearch.filter(f => f.region.toString() === region);
            setByRegion(bySelf);
            setRows(result);
        }
        else {
            setByRegion(properties);
            setRows(bySearch);
        }

    }, [region])

    const addNewHandler = () => {
        navigate("/create");
    }

    // assuming there is at least one property initially, 
    // in all cases there should be more complicated logic for loading and error handling
    if (!properties.length) return 'loading....'
    
    return (
        <div style={{width: '90%', margin: "auto"}}>
            <h1>Properties</h1>
            <div className="actions">
                <div className="action">
                    <input
                        type="text"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search} />
                </div>
                <div className="action">
                    <Regions
                        options={regions.filter(f => properties.map(i => i.region).includes(f.id))}
                        onChange={(v) => setRegion(v)} />
                </div>
                <div className="action" onClick={addNewHandler}><button>Add new</button></div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th width="20%">Name</th>
                        <th width="20%">Plan</th>
                        <th width="10%">Units</th>
                        <th width="10%">City</th>
                        <th width="10%">Region</th>
                        <th width="12%">Manager</th>
                        <th width="12%">Manager since</th>
                        <th width="6%"></th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map(property => (<Row key={`property-${property.id}`} property={property} />))}
                </tbody>
            </table>
        </div>
    )
}

export default Properties;