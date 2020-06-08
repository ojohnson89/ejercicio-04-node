const fs = require('fs');

let listadoPorHacer = [];

const guardarDB = () => {
    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile(`db/data.json`, data, (err) => {
        if (err) throw new Error('No se pudo guardar', err)
    });

}

const cargarDB = () => {

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (error) {
        listadoPorHacer = [];
    }

}


const crear = (descipcion) => {

    cargarDB();

    let porHacer = {
        descipcion,
        completado: false
    }

    listadoPorHacer.push(porHacer);

    guardarDB();

    return porHacer;
}

const getListado = () => {
    cargarDB();
    return listadoPorHacer;
}

const actualizar = (descipcion, completado) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descipcion === descipcion)

    if (index >= 0) {
        listadoPorHacer[index].completado = completado;
        guardarDB()
        return true;
    } else return false
}

const borrar = (descipcion) => {
    cargarDB();
    let index = listadoPorHacer.findIndex(tarea => tarea.descipcion === descipcion)

    if (index >= 0) {
        listadoPorHacer.splice(index, 1);
        guardarDB()
        return true;
    } else return false
}

module.exports = {
    crear,
    getListado,
    actualizar,
    borrar
}