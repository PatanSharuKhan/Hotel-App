const { PrismaClient } = require('@prisma/client');
var express = require('express');
var router = express.Router();

const prisma = new PrismaClient()

/* GET hotels listing. */
router.get('/', async function(req, res, next) {
  const hotels = await prisma.hotel.findMany()
  res.send(hotels);
});

router.post('/', async function(req, res, next) {
  const hotel = await prisma.hotel.create({
    data: {
      email: 'admin@gmail.com',
      name: 'Hotel 1',
      address: 'Address 1',
      mobile: 123456789
    }
  })
  res.send(hotel);
})

module.exports = router;
