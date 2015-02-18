module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  usersRouter.get('/', function(req, res) {
    res.send({
      "users":
        [{
            "firstName" : "Ursula",
            "lastName": "Yethon",
            "email": "ursula.yethon@mheducation.com"
          },
          {
            "firstName" : "Jonathan",
            "lastName": "",
            "email": "@mheducation.com"
          },
          { 
            "firstName" : "Varun",
            "lastName": "",
            "email": "@mheducation.com"
          },
          { "firstName" : "Giorgio",
            "lastName": "",
            "email": "@mheducation.com"
          },
          { "firstName" : "Rico",
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
