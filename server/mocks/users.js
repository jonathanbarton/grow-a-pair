module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  usersRouter.get('/', function(req, res) {
    res.send({
      "users":
        [{
            "id":"0",
            "firstName" : "Ursula",
            "lastName": "Yethon",
            "email": "ursula.yethon@mheducation.com"
          },
          {
            "id": "1",
            "firstName" : "Jonathan",
            "lastName": "",
            "email": "@mheducation.com"
          },
          {
            "id": "2",
            "firstName" : "Varun",
            "lastName": "",
            "email": "@mheducation.com"
          },
          {
            "id": "3",
            "firstName" : "Giorgio",
            "lastName": "",
            "email": "@mheducation.com"
          },
          {
            "id": "4",
            "firstName" : "Rico",
            "lastName": "",
            "email": "@mheducation.com"
          }]
    });
  });

  usersRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  usersRouter.get('/:id', function(req, res) {
    res.send({
      'users': {
        id: req.params.id
      }
    });
  });

  usersRouter.put('/:id', function(req, res) {
    res.send({
      'users': {
        id: req.params.id
      }
    });
  });

  usersRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/users', usersRouter);
};
