import Sequelize, { Model } from 'sequelize';

class Plant extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                sun: Sequelize.STRING,
                water: Sequelize.STRING,
                image: Sequelize.STRING,
                price: Sequelize.DECIMAL,
                toxicity: Sequelize.BOOLEAN,
                url: {
                    type: Sequelize.VIRTUAL,
                    get() {
                        return `http://localhost:3332/plants/${this.image}`;
                    },
                },
            },
            {
                sequelize,
            }
        );
        return this;
    }
}

export default Plant;
