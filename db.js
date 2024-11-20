import { Sequelize, DataTypes } from 'sequelize';

import { fileURLToPath } from 'url';
import path from 'path';

import { logger } from './logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let env = process.env.NODE_ENV || 'development';

let storage;

if (env === "test") {
  storage = ":memory:"
} else {
  storage = path.join(__dirname, 'db.sqlite')
}

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: storage,
  logging: (msg) => logger.info(msg),
});

import signification from "./models/signification.js"
import prénoms from "./models/prénoms.js"

export default {
    sequelize: sequelize,
    model: {
        Signification: signification(sequelize),
        Prénoms: prénoms(sequelize),
    }
}