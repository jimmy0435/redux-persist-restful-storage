var express = require('express');
var bodyParser = require('body-parser');

//Use node-localstorage to store/fetch data here. 
//You can use any tool whatever you want.
var LocalStorage = require('node-localstorage').LocalStorage;
let adaptor = new LocalStorage('./tmp')

var api = express();
var port = 9999; 

api.use(bodyParser.urlencoded({ extended: true }));
api.use(bodyParser.json());

api.post('/getItem', function (req, res) {
    try {
        let result = adaptor.getItem(req.body.key);
        return res
            .status(200)
            .json(result);
    } catch (e) {
        return res
            .status(500)
            .send({message: e});
    }
})

api.post('/setItem', function (req, res) {
    try {
        adaptor.setItem(req.body.key, req.body.value);
        return res
            .status(200)
            .json({'response': 'success'});
    } catch (e) {
        return res
            .status(500)
            .send({message: e});
    }
})

api.post('/removeItem', function (req, res) {
    try {
        adaptor.removeItem(req.body.key);
        return res
            .status(200)
            .json({'response': 'success'});
    } catch (e) {
        return res
            .status(500)
            .send({message: e});
    }
})

api.get('/getAllKeys', function (req, res) {
    try {
        let keys = []
        for (let i = 0; i < adaptor.length; i++) {
            keys.push(adaptor.key(i))
        }
        return res
            .status(200)
            .json(keys);
    } catch (e) {
        return res
            .status(500)
            .send({message: e});
    }
})

api.listen(port);