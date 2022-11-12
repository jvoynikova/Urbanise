const propetries = [
    {
        id: 1,
        name: "name 0",
        plan: "PN0001",
        units: [{
            id: 0,
            lotAlpha: "1",
            floor: 0,
            type: "Residential",
        }],
        city: "Sofia",
        region: 2,
        manager: 2,
        previousManager: 1,
        managementCompany: "Some Company",
        planRegistered: "2020-12-12",
        address: "address",
        account: "acc",
        abn: "ABN",
    },
    {
        id: 2,
        name: "name 2",
        plan: "PN0002",
        units: [
            {
                id: 0,
                lotAlpha: "1",
                floor: 0,
                type: "Residential",
            },
            {
                id: 1,
                lotAlpha: "1",
                floor: 1,
                type: "Residential",
            }
        ],
        city: "Burgas",
        region: 1,
        manager: 1,
        previousManager: 3,
        managementCompany: "Some Company",
        planRegistered: "2020-11-12",
        address: "address",
        account: "acc",
        abn: "ABN",
    },
    {
        id: 3,
        name: "name 34",
        plan: "PN0003",
        units: [{
            id: 0,
            lotAlpha: "1",
            floor: 0,
            type: "Residential",
        }],
        city: "Sofia",
        region: 3,
        manager: 3,
        previousManager: 2,
        managementCompany: "Some Company",
        planRegistered: "2020-10-12",
        address: null,
        account: "acc",
        abn: "ABN",
    },
    {
        id: 4,
        name: "name 4",
        plan: "PN0004",
        units: [{
            id: 0,
            lotAlpha: "1",
            floor: 0,
            type: "Residential",
        }],
        city: "Sofia",
        region: 3,
        manager: 3,
        previousManager: 4,
        managementCompany: "Some Company",
        planRegistered: "2020-10-12",
        address: "address",
        account: "acc",
        abn: "ABN",
    }
]

const regions = [
    {
        id: 1,
        name: "Region 1"
    },
    {
        id: 2,
        name: "Region 2"
    },
    {
        id: 3,
        name: "Region 3"
    },
    {
        id: 4,
        name: "Region 4"
    },
    {
        id: 5,
        name: "Region 5"
    }
]

const managers = [
    {
        id: 1,
        firstName: "Adam",
        lastName: "Anderson",
        managedSince: "2020-12-12",
    },
    {
        id: 2,
        firstName: "Bob",
        lastName: "Benton",
        managedSince: "2020-03-12",
    },
    {
        id: 3,
        firstName: "Cintia",
        lastName: "Carter",
        managedSince: "2020-05-12",
    },
    {
        id: 4,
        firstName: "Dana",
        lastName: "Denvor",
        managedSince: "2021-05-12",
    },
]

module.exports.properties = propetries;
module.exports.regions = regions;
module.exports.managers = managers;
