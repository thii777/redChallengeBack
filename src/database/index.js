import Sequelize from 'sequelize';

import Plant from '../app/models/Plant';
import Form from '../app/models/Form';

import databaseConfig from '../config/database';

const models = [Plant, Form];

class Database {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(databaseConfig);

        models.map(model => model.init(this.connection));
    }
}

export default new Database();
