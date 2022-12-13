const express = require("express");
const { reset } = require("nodemon");

const Router = require("express").Router;

const router = Router();

router.use(express.json());
router.use(express.urlencoded({extended: true}))

const productos = [{id: 1, titulo: "superunknown", banda: "soundgarden", anio: 1994}, {id: 2, titulo: "ten", banda: "pearl jam", anio: 1991}, {id: 3, titulo: "dirt", banda: "alice in chains", year: 1992}]

router.get('/productos', (req, res) => {
    res.send({productos})
})

router.get('/productos/:id', (req, res) => {
    const id = req.params.id
    const producto = productos.find((el) => el.id == id)
    res.send({producto})
})

router.post('/productos', (req, res) => {
    const producto = req.body;
    const id = productos.length + 1;
    const nuevoProducto = {id, ...producto};
    productos.push(nuevoProducto)
    res.send({productos})
})

router.put('/productos/:id', (req, res) => {
    const {titulo, banda, anio} = req.body;
    let {id} = req.params;
    id = parseInt(id)
    let posicionProducto = productos.findIndex((el) => el.id === id)
    productoElegido = {id, titulo, banda, anio}
    productos[posicionProducto] = productoElegido;
    res.send({productos})
})

router.delete('/productos/:id', (req, res) => {
    const id = req.params.id;
    const producto = productos.find((el) => el.id == id);
    if(producto) {
        const arrayActualizado = productos.filter((el) => el.id != id);
        res.send({arrayActualizado})
    } 
    else {
        res.send({message: "No existe un producto con ese id"})
    }
})

module.exports = router