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
    const { name, email, address, mobile } = req.body
    try{
        const hotel = await prisma.hotel.create({
          data: {
            email: email,
            name: name,
            address: address,
            mobile: mobile
          }
        })
        res.send(hotel);
    } catch(e) {
        console.error(e.message)
        res.send(e.message);
    }
})

router.put('/:id', async function(req, res, next){
    const hotelId = JSON.parse(req.params.id)
    const { name, email, address, mobile } = req.body
    try {
        const updatedHotel = await prisma.hotel.update({
            where: {
                id: hotelId
            },
            data: {
                email: email,
                name: name,
                address: address,
                mobile: mobile
            }
        })
        res.send(updatedHotel)
    }catch(e) {
        console.error(e.message)
        res.send(e.message)
    }
})

router.delete('/:id', async function(req, res, next){
    const hotelId = JSON.parse(req.params.id)
    try {
        const deletedUser = await prisma.hotel.delete({
            where: {
                id: hotelId
            }
        })
        res.send(deletedUser)
    } catch(e) {
        console.error(e.message)
        res.send(e.message)
    }
})

module.exports = router;
