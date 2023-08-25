import express from "express";
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('admin/contacto', {
      layout: 'admin/layout'
    });
  });








  export default router;