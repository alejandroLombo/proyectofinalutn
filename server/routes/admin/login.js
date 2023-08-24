//var express = require('express');
import UserModels from "../../models/UserModels.js";
import express from "express";
var router = express.Router();

//var usuariosModel = require('./../../models/usuariosModels')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('admin/login', {
    layout: 'admin/layout'
  });
});

router.get('/logout', function (req, res, next) {
  //req.session.destroy();
  res.redirect('http://localhost:8000')
  /* res.render('admin/login', {
    layout: 'admin/layout'
  }); */
});

router.post('/', async (req, res) => {
  try {
    const User = await UserModels.findAll({
      where: {
        usuario: req.body.usuario,
        password: req.body.password
      }
    });
    if (User != undefined) {
      console.log(User);
      //req.session.id = User.id;
      //req.session.usuario = User.usuario;
      res.redirect('http://localhost:3000');
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    }
  } catch (error) {
    console.log(error);
    //res.json({message: error.message})
  }
})
/*

router.post('/', async(req, res, next)=> {
  try {
    var usuario = req.body.usuario;
    var password = req.body.password;
    var data= await usuariosModel.getUserByUsernameAndPassword(usuario, password);
    if(data != undefined){
      console.log(data);      
      req.session.id_usuario = data.id;
      req.session.nombre = data.usuario;
      res.redirect('/admin/novedades');
    }else{
      res.render('admin/login',{
        layout:'admin/layout',
        error:true 
    });
    }
  } catch (error) {
    console.log(error);
  }  



});
 */

//module.exports = router;
export default router;