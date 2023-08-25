import UserModels from "../models/UserModels.js";

export const getUser = async(req,res)=>{
    try {
       const dataUser= await UserModels.findAll({
        where:{
            usuario:req.body.usuario,
            password:req.body.password
        }  
       });
       console.log(dataUser)
       if(data != undefined){
        //req.session.id_usuario = data.id;
        //req.session.nombre = data.usuario;
        res.redirect('http://localost:3000/home');
      }else{
        res.render('admin/login',{
          layout:'admin/layout',
          error:true 
      });
      }
    } catch (error) {
        console.log(error);
        //res.json({message: error.message})
    }
}

/* router.post('/', async(req, res, next)=> {
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
      
    }   */