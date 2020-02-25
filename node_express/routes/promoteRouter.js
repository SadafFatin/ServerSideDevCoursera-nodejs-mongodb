const express = require('express');
const bodyParser = require('body-parser');

const promoteRouter = express.Router();
promoteRouter.use(bodyParser.json());
promoteRouter.route('/')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send all the promotes to you!');
})
.post((req, res, next) => {
    res.end('Will add the promote: ' + req.body.name + ' with details: ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('PUT operation not supported on /promotes');
})
.delete((req, res, next) => {
    res.end('Deleting all promotes');
});

promoteRouter.route('/:promoId')
.all((req,res,next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res,next) => {
    res.end('Will send the promote to you with id:'+ req.params.promoId);
})
.post((req, res, next) => {
    res.end('Will add the promote: ' + req.body.name + ' with details: ' + req.body.description + ' with id:'+ req.params.promoId);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('Will edit the promote with id:'+ req.params.promoId);
})
.delete((req, res, next) => {
    res.end('Deleting the promote with id:'+ req.params.promoId);
});





module.exports = promoteRouter;