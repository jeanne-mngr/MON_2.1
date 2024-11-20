import express from 'express';

import numerologie from '../../back/numerologie.js'
import db from "../../db.js"

let router = express.Router();

router.get(encodeURI('/prénoms/read'), (req, res) => {
    db.model.Prénoms.findAll()
        .then((data) => {
            var liste = []
            for (let element of data) {
                liste.push({
                    prénom: element.prénom,
                    chiffre: numerologie.chiffre(element.prénom)
                })
            }
            res.json(liste)
        })
})

export {router};