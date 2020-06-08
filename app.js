//const argv = require('yargs').argv;

const { argv } = require('./config/yargs');
const colors = require('colors');

const { crear, getListado, actualizar, borrar } = require('./por-hacer/por-hacer');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let resp = crear(argv.descripcion);
        console.log(`Tarea agregada: ${ argv.descripcion }`);
        break;

    case 'listar':
        let listado = getListado();
        console.log(listado);
        console.log('========== Por Hacer =========='.green);
        for (let tarea of listado) {
            console.log('');
            console.log(tarea.descipcion);
            console.log('Estado:', tarea.completado)
            console.log('____________________________'.green);

        }
        console.log('==============================='.green);
        break;
    case 'actualizar':
        let actializado = actualizar(argv.descripcion, argv.completado)
        console.log(actializado);
        break;
    case 'borrar':
        let borrado = borrar(argv.descripcion)
        console.log(borrado);
        break;
    default:
        console.log('Comando no es reconocido');

}