const express = require('express');
const { loginUser } = require('../services/auth/login');
const { userPostCheck } = require('../services/checkers/user');
const { newUser } = require('../services/db/new/user');
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
      loginUser({ body: req.body }).then(response => {
         return res.json(response)
      })
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
   userPostCheck({ email, password, name }).then(err => {
      if (err) return res.json(err)
      newUser({ body: req.body }).then(response => {
         res.json(response)
      })
   })
})



module.exports = router;