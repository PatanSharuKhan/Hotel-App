const { PrismaClient } = require('@prisma/client');
var express = require('express');
var router = express.Router();

const prisma = new PrismaClient()

/* GET books listing. */
router.get('/', async function(req, res, next) {
  const books = await prisma.book.findMany()
  res.send(books);
});

router.post('/', async function(req, res, next) {
    const { userId, hotelId } = req.body
    try{
        const book = await prisma.book.create({
          data: {
            userId: userId,
            hotelId: hotelId
          }
        })
        res.send(book);
    } catch(e) {
        console.error(e.message)
        res.send(e.message);
    }
})

router.put('/:bookId', async function(req, res, next){
    const bookId = JSON.parse(req.params.bookId)
    const { userId, hotelId } = req.body
    try {
        const updatedBook = await prisma.book.update({
            where: {
                id: bookId
            },
            data: {
                userId: userId,
                hotelId: hotelId
            }
        })
        res.send(updatedBook)
    }catch(e) {
        console.error(e.message)
        res.send(e.message)
    }
})

router.delete('/:bookId', async function(req, res, next){
    try {
        const deletedBook = await prisma.book.delete({
            where: {
                id: bookId
            }
        })
        res.send(deletedBook)
    } catch(e) {
        console.error(e.message)
        res.send(e.message)
    }
})

module.exports = router;
