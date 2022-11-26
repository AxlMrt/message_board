var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date().toLocaleString().split(',')[0]
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date().toLocaleString().split(',')[0]
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages });
});

//GET new message page
router.get('/new', (req, res) => {
  res.render('new', { title: 'New message: '});
})

router.post('/new', (req, res) => {
  const message = {
    user: req.body.user,
    text: req.body.text,
    added: new Date().toLocaleString().split(',')[0]
  }
  messages.push(message);
  res.redirect('/');
});

module.exports = router;
