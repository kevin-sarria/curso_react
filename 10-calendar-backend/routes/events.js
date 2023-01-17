/*
    Events Routes
    /api/events
*/

const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require("../middlewares/validar-jwt");
const { getEventos, crearEvento, actualizarEvento, eliminarEvento } = require("../controllers/events");

const router = Router();

// Todas tienen que pasar por la validación del JWT
router.use( validarJWT );


// Obtener eventos
router.get('/', getEventos);

// Crear un nuevo evento
router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'La fecha de inicio es Obligatoria').custom( isDate ),
        check('end', 'La fecha de finalización es Obligatoria').custom( isDate ),
        validarCampos
    ],
    crearEvento
);

// Actualizar evento
router.put(
    '/:id',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'La fecha de inicio es Obligatoria').custom( isDate ),
        check('end', 'La fecha de finalización es Obligatoria').custom( isDate ),
        validarCampos
    ],
    actualizarEvento
    );

// Borrar evento
router.delete('/:id', eliminarEvento);



module.exports = router;