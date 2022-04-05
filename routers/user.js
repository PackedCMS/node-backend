const express = require('express');
const { userPostCheck } = require('../services/checkers/user');
const router = express.Router();

router.post('/login', (req, res) => {
   const { email, password } = req.body

   if (!email || !password) {
      return res.json({
         error: true,
         message: "Hepsini Eksiksiz Doldurun!"
      })
   }

   userPostCheck({ email, password }).then(err => {
      if (err) return res.json(err)


   })

})

router.post('/register', (req, res) => {
   const { name, email, password } = req.body

   if (!email || !password || !name) {
      return res.json({
         error: true,
         message: "Hepsini Eksiksiz Doldurun!"
      })
   }

})



module.exports = router;