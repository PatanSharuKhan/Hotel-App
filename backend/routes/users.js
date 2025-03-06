var PC = require('@prisma/client');
var express = require('express');
var router = express.Router();

const prisma = new PC.PrismaClient()

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const users = await prisma.user.findMany()
  res.send(users);
});

module.exports = router;
