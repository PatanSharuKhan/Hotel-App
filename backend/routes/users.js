const { PrismaClient } = require('@prisma/client');
var express = require('express');
var router = express.Router();

const prisma = new PrismaClient()

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const users = await prisma.user.findMany()
  res.send(users);
});

router.post('/', async function(req, res, next) {
  const user = await prisma.user.create({
    data: {
      email: 'admin@gmail.com',
      password: 'Admin@123'
    }
  })
  res.send(user);
})

module.exports = router;
