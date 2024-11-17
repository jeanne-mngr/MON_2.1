import { fileURLToPath } from 'url';
import path from 'path';
import numerologie from './back/numerologie.js';
import db from "./db.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import express from 'express'

const app = express()

const hostname = '127.0.0.1';
const port = 3000;

app.use("/static", express.static(path.join(__dirname, '/static')))

app.get('/', (req, res) => {
    res.redirect(301, '/static/index.html')
})


app.get(encodeURI('/prénom'), (req, res) => {
    console.log(req.query)
    let prénom = req.query["valeur"]
    let chiffre = numerologie.chiffre(prénom) 
    db.model.Prénoms.findOne({
        where: {
            prénom: prénom
        }
    }).then((data) => {
        if (data === null ) {
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

app.get(encodeURI('/api/prénoms/read'), (req, res) => {
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


app.use(function (req, res) {
    console.log("et c'est le 404 : " + req.url);

    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');

    res.end("");

})

app.listen(port, hostname);
console.log(`Server running at http://${hostname}:${port}/`);