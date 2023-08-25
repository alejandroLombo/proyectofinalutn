import express from "express";
var router = express.Router();
import nodemailer from 'nodemailer';

router.post('/email', async (req, res) => {
    try {
        // Crear un objeto transporter con las opciones de conexión
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // Cambia esto según el servicio de correo que quieras usar
            auth: {
                user: 'tucorreo@gmail.com', // Cambia esto a tu dirección de correo
                pass: 'tucontraseña' // Cambia esto a tu contraseña de correo
            }
        });

        const mailOptions = {
            from: 'tucorreo@gmail.com',
            to: 'lombo.alejandro@gmail.com',
            subject: 'Contacto Web',
            text: `${req.body.nombre} te ha enviado un mensaje: ${req.body.mensaje}`
        };

        // Enviar el correo
        await transporter.sendMail(mailOptions);

        console.log('Correo enviado');

        res.status(200).send("Correo enviado exitosamente");
    } catch (error) {
        console.error(error);
        res.status(500).send("Error al enviar el correo");
    }
});


 /* 
router.post('/email',async (req,res)=>{
try {
    const mail = {
        to:'lombo.alejandro@gmail.com',
        subject:'Contacto Web',
        html: `${req.body.nombre} te a mandado un mensaje y quiere una respuesta en este email ${req.body.email}
        <br> Con el siguiente mensaje ${req.body.mensaje} y su telefono es: ${req.body.telefono}`
    }
    console.log(mail);


    res.status(200).send("Correo enviado exitosamente");
} catch (error) {
    console.error(error);
    res.status(500).send("Error al enviar el correo");
}

}) */


export default router;