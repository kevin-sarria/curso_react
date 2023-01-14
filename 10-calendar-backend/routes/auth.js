/*
    Rutas de usuarios /Auth
    host + /api/auth
*/
const { Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');


router.post(
    '/new',
    [ // Middlewares
        check( 'name', 'El nombre es obligatorio' ).not().isEmpty(),
        check( 'email', 'El email es obligatorio' ).isEmail(),
        check( 'password', 'El password debe contener al menos 8 caracteres' ).isLength({ min: 8 }),
        validarCampos
    ],
    crearUsuario
);


router.post(
    '/',
    [ // Middlewares
        check( 'email', 'El email es obligatorio' ).isEmail(),
        check( 'password', 'El password debe contener al menos 8 caracteres' ).isLength({ min: 8 }),
        validarCampos
    ],
    loginUsuario
);


router.get( '/renew', revalidarToken );



module.exports = router;