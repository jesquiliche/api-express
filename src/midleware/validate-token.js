const jwt = require('jsonwebtoken')

// Middleware para validar el token en las rutas protegidas
const verifyToken = (req, res, next) => {
    const token = req.header('auth-token')

    // Si no se proporcionó un token, se devuelve un error 401
    if (!token) return res.status(401).json({ error: 'Acceso denegado' })

    try {
        // Se verifica si el token es válido y se extrae la información del usuario autenticado
        const verified = jwt.verify(token, process.env.TOKEN_SECRET)
        req.user = verified
        next() // Si el token es válido, se continúa con la ejecución de la ruta
    } catch (error) {
        // Si el token no es válido, se devuelve un error 401
        res.status(401).json({error: 'token no es válido'})
    }
}

module.exports = verifyToken;
