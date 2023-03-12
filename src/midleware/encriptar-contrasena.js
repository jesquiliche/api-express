const bcrypt = require('bcryptjs');

/**
 * Encripta una contraseña utilizando el algoritmo bcrypt.
 * @param {string} password - La contraseña a encriptar.
 * @returns {Promise<string>} La contraseña encriptada.
 */
const encriptarContrasena=async (password)=>{
    // Genera un "salt" con 10 vueltas (10 rounds) 
    console.log(password);
    let salt = await bcrypt.genSalt(5);
    // Encripta la contraseña utilizando el "salt"
    const pass = await bcrypt.hash(password, salt);
    // Retorna la contraseña encriptada
    return pass;
}

module.exports=encriptarContrasena;
