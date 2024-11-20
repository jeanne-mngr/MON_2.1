import express from 'express';

import numérologie from '../back/numerologie.js'
import db from "../db.js"

import {router as apiRoutes} from './api/index.js'

let router = express.Router();

router.get(encodeURI('/prénom'), (req, res) => {
    console.log(req.query)
    let prénom = req.query["valeur"]
    let chiffre = numérologie.chiffre(prénom)
    db.model.Prénoms.findOne({
        where: {
            prénom: prénom
        }
    }).then((data) => {
        if (data === null) {
            db.model.Prénoms.create({
                prénom: prénom
            })
        }
        console.log(data)
    })
    db.model.Signification.findOne({
        where: {
            nombre: chiffre
        }
    }).then((data) => {
        res.json({
            prénom: prénom,
            chiffre: chiffre,
            message: data.message
        })
    })
})

router.use('/api', apiRoutes)


export {
    router
}