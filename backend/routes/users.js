const { PrismaClient } = require("@prisma/client")
var express = require("express")
var router = express.Router()

const prisma = new PrismaClient()

/* GET users listing. */
router.get("/", async function (req, res, next) {
  const users = await prisma.user.findMany()
  res.send(users)
})

router.post("/", async function (req, res, next) {
  const { email, password } = req.body
  try {
    const user = await prisma.user.create({
      data: {
        email: email,
        password: password,
      },
    })
    res.send(user)
  } catch (e) {
    console.error(e.message)
    res.send(e.message)
  }
})

router.put("/", async function (req, res, next) {
  const { email, password } = req.body
  try {
    const updateUser = await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        password: password,
      },
    })
    res.send(updateUser)
  } catch (e) {
    console.log(e.message)
    res.send(e.message)
  }
})

router.delete("/:id", async function(req, res, next){
  const userId = JSON.parse(req.params.id)
  try {
    const deletedUser = await prisma.user.delete({
      where: {
        id: userId
      }
    })
    res.send(deletedUser)
  } catch(e) {
    console.error(e.message)
    res.send(e.message)
  }
})

module.exports = router
