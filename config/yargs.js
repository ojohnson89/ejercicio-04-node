const descripcion = {
    demand: true,
    alias: 'd'
}
const completado = {
    alias: 'c',
    default: true
}

const argv = require('yargs')
    .command('crear', 'Crear una tarea por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualizar la tarea a completado', {
        descripcion,
        completado
    })
    .command('borrar', 'Borrar una tarea por hacer', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}