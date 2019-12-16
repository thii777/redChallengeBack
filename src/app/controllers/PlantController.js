import Plant from '../models/Plant';

class PlantController {
    async store(req, res) {
        const { filename } = req.file;
        const { name, sun, water, price, toxicity } = req.body;

        const plant = await Plant.create({
            image: filename,
            name,
            sun,
            water,
            price,
            toxicity,
        });
        return res.json(plant);
    }

    async index(req, res) {
        const { sun, water, toxicity } = req.query;

        // if (!sun) {
        //     return res.status(422).json({ error: 'missing argument' });
        // }
        // if (!water) {
        //     return res.status(422).json({ error: 'missing argument' });
        // }
        // if (!toxicity) {
        //     return res.status(422).json({ error: 'missing argument' });
        // }
        const plants = await Plant.findAll({ where: { sun, water, toxicity } });

        return res.json(plants);
    }

    async show(req, res) {
        const { id } = req.params;

        const plant = await Plant.findByPk(id);

        return res.json(plant);
    }
}

export default new PlantController();
