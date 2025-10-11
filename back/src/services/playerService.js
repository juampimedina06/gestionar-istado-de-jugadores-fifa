const  { Player }  = require('../models')

const getAllPlayers = () =>{
     try {
        const players = Player.findAll();
         if(players){
            return players
        }else{
            throw new Error('No se encontraron los usuarios')
     }
     } catch (error) {
        throw error;
     }
}

const getAllPlayer = async (id) => {
    try {
        const player = await Player.findByPk(id)
        if(player){
            return player;
        }else{
           throw new Error(`Usuario no encontrado`)
        }
    } catch (error) {
        throw error;
    }
}

const updatePlayer = async (userId, userOptions) => {
    try {
        const [numRowUpdates] = await Player.update(userOptions, {
            where: {id:userId}, 
            returning:true 
        }) 
        console.log(`Se actualizaron ${numRowUpdates} filas en a BD`)
        const updatedPlayer = await Player.findByPk(playerId);
        return updatedPlayer;
    } catch (error) {
    throw new Error(`No se pudo actualizar el jugador: ${error.message}`);
    }
}

const createPlayer = async ( playerOptions ) => {
    try {
        const newPlayer = await Player.create(playerOptions)
        return newPlayer
    } catch (error) {
        throw new Error(`No se pudo crear el jugador: ${error.message}`);
    }
}

module.exports = { 
    getAllPlayers, 
    getAllPlayer,
    updatePlayer, 
    createPlayer,
};
