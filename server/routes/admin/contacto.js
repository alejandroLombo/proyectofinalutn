import express from "express";
var router = express.Router();
import nodemailer from 'nodemailer';

router.route('/')
  .get((req, res) => {
    res.render('admin/contacto', {
      layout: 'admin/layout'
    });
  })
  .post(async (req, res) => {
    try {

      var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "554023e09048df",
          pass: "92ddaee7edb263"
        }
      });
      const mail = {
        to: 'lombo.alejandro@gmail.com',
        subject: 'Contacto Web',
        html: `${req.body.nombre} te ha enviado un mensaje y desea una respuesta a este correo electrónico ${req.body.email}<br> Con el siguiente mensaje: ${req.body.mensaje} y su teléfono es: ${req.body.telefono}`
      }

      console.log(mail);

      // Configuración y envío del correo con Nodemailer

      // Renderizar la vista y enviarla como respuesta
      res.render('admin/login', { mensaje: "Correo enviado exitosamente" });
    } catch (error) {
      console.error(error);
      res.render('admin/login', { mensaje: "Error al enviar el correo",error });
    }
  });




/* router.get('/', function (req, res, next) {
  res.render('admin/contacto', {
    layout: 'admin/layout'
  });
}); */








export default router;