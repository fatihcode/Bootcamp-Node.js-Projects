const express = require('express')
const userModel = require('../model/user.model');


exports.createUser = (req, res) => {

   const user = new userModel({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
      age: req.body.age,
      gender: req.body.gender,
      isActive: req.body.isActive,
      userType: req.body.userType
   });

   user.save()
      .then(data => { res.json(data) })
      .catch(err => { res.json(err) })
}


exports.findAll = (req, res) => {

   userModel.find()
      .then(data => { res.json(data) })
      .catch(err => { res.json(err) })
}


exports.findOne = (req, res) => {

   userModel.findById(req.params.id)
      .then(data => { res.json(data) })
      .catch(err => { res.json(err) })
}


exports.findByIdAndRemove = (req, res) => {

   userModel.findByIdAndRemove(req.params.id)
      .then(data => { res.json(data) })
      .catch(err => { res.json(err) })
}


exports.findByIdAndUpdate = (req, res) => {
   
   userModel.findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(data => { res.json(data) })
      .catch(err => { res.json(err) })
}