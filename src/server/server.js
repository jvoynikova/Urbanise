var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser')
var app = express();
var data = require('./data')

let properties = [];
let managers = [];
let regions = [];

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors());

app.listen(3001, (err) => {
    if (err) {
        console.log(err);
    } else {
        properties = data.properties;
        managers = data.managers;
        regions = data.regions;
        console.log("Server is running on port 3001!");
    }
});

app.get('/api/regions', (req, res) => {
    res.send(regions);
})

app.get('/api/manager/:id', (req, res) => {
    const id = req.params.id;
    const result = managers.filter(f => f.id == id);
    if (result.length) {
        res.send(result[0]);
    } else {
        res.status(400);
        res.send(`No manager with id [${id}]`)
    }
})

app.get('/api/properties', (req, res) => {
    res.send(properties.map(i => (
        {
            id: i.id,
            name: i.name,
            plan: i.plan,
            units: i.units ? i.units.length : 0,
            city: i.city,
            region: i.region,
            manager: i.manager
        })));
})

app.get('/api/properties/:id', (req, res) => {
    const id = req.params.id;
    const result = properties.filter(f => f.id == id);
    if (result.length) {
        res.send(result[0]);
    } else {
        res.status(400);
        res.send(`No property with id [${id}]`)
    }
})

app.post('/api/properties', (req, res) => {
        result = {...req.body}
        if(!result.planRegistered.match(/^\d{4}-\d{2}-\d{2}$/)) {
            res.status(400);
            res.send({code: 1, msg : `Wrong date format [${result.planRegistered}]`})    
        }
        
        const id = Math.max(...properties.map(i => i.id)) + 1;
        result.id = id;
        properties.push(result);
        res.send(id.toString());
})

app.put('/api/properties/:id', (req, res) => {
    const id = req.params.id;
    const ind = properties.findIndex(i => i.id == id);

    if (ind != -1) {
        if(!req.body.planRegistered.match(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)) {
            res.status(400);
            res.send({code: 1, msg : `Wrong date format [${req.body.planRegistered}]`});
            return;    
        }
        properties[ind] = req.body;
        res.send(id);
        
    } else {
        res.status(400);
        res.send(`No property with id [${id}]`)
    }
})  

app.delete('/api/properties/:id', (req, res) => {
    if (properties.length === 1) {
        res.status(400);
        res.send({code: 2, msg : `There should be at least one property!`})
        return;
    }
    const id = req.params.id;
    const ind = properties.findIndex(i => i.id == id);
    if (ind != -1) {
        properties.splice(ind, 1)
    }
    res.send(id);
})