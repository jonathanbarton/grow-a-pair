module.exports = function(app) {
  var express = require('express');
  var usersRouter = express.Router();

  usersRouter.get('/', function(req, res) {
    res.send({
      'users': [
        {
          id: 1,
          fullName: 'Jonathan Jerkaton',
          availability: false,
          email: 'test@jerk.com'
        },
        {
          id: 2,
          fullName: 'Giorgio Jerkatili',
          availability: true,
          email: 'giorgio@jerk.com'
        },
        {
          id: 3,
          fullName: 'Ursula Jerkthon',
          availability: true,
          email: 'ursula@jerk.com'
        }
      ]
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
