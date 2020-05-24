//METODOS:
//index - Criando um metodo que retorna uma listagem de sessões
//show - Listar uma única sessão 
//store -  Criar uma sessão 
//update - Alterar uma sessão 
//Destroy - Deletar/remover uma sessão 

const User = require('../models/User');

module.exports = {
    async store(req, res){
        const { email } = req.body;

        let user = await User.findOne({ email }); 

        if(!user){
            user = await User.create({ email });
        }

      
        
      return res.json(user);
    }

};




