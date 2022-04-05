const express = require('express')
const uuid = require('uuid')
const users = require('../../UsersData')
const router = express.Router();


router.get('/', (req, res) => {
   res.json(users)
})


router.get('/:id', (req, res) => {
   if (users.some(user => user.id === parseInt(req.params.id))) {

      res.json(users.find(user => user.id === parseInt(req.params.id)))

   } else {
      res.send("No user found")
   }
})


router.post('/', (req, res) => {
   const newUser = {
      id: uuid.v4(),
      name: req.body.name,
      email: req.body.email,
   };
   console.log(req.body);
   users.push(newUser)
})


router.put('/:id', (req, res) => {
   const updateUser = req.body
   if (users.some(user => user.id === parseInt(req.params.id))) {

      const user = users.find(user => user.id === parseInt(req.params.id))
      user.name = updateUser.name ? updateUser.name : user.name;
      user.email = updateUser.email ? updateUser.email : user.email;
      res.json({ msg: "User updated", user });

   } else {
      res.send("No user found")
   }
})


router.delete('/:id', (req, res) => {
   if (users.some(user => user.id === parseInt(req.params.id))) {

      users = users.filter(user => user.id !== parseInt(req.params.id));
      res.json({ msg: "User deleted", users });

   } else {
      res.send("No user found")
   }
})


module.exports = router;